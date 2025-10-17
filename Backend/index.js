require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// --- DATA READ ENDPOINTS ---

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).send("Error fetching holdings");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).send("Error fetching positions");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    res.status(500).send("Error fetching orders");
  }
});

app.get("/stock/:id", async (req, res) => {
  try {
    let stock = await HoldingsModel.findOne({ name: req.params.id });
    if (stock) {
      res.json(stock);
    } else {
      res.status(404).send("Stock not found in holdings");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// --- DATA WRITE ENDPOINT ---

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const quantity = Number(qty);

    const newOrder = new OrdersModel({ name, qty: quantity, price, mode });
    await newOrder.save();
    console.log("Order saved to Orders collection.");

    const existingHolding = await HoldingsModel.findOne({ name: name });

    if (mode === "BUY") {
      if (existingHolding) {
        const newQty = existingHolding.qty + quantity;
        const newAvg = ((existingHolding.avg * existingHolding.qty) + (price * quantity)) / newQty;
        existingHolding.qty = newQty;
        existingHolding.avg = newAvg;
        await existingHolding.save();
        console.log("Existing holding updated for BUY.");
      } else {
        const newHolding = new HoldingsModel({ name, qty: quantity, avg: price, price });
        await newHolding.save();
        console.log("New holding created.");
      }
    } else if (mode === "SELL") {
      if (!existingHolding) {
        return res.status(400).send("Cannot sell stock not in holdings.");
      }
      if (existingHolding.qty < quantity) {
        return res.status(400).send("Quantity to sell exceeds holdings.");
      }
      existingHolding.qty -= quantity;
      if (existingHolding.qty === 0) {
        await HoldingsModel.deleteOne({ _id: existingHolding._id });
        console.log("Holding sold and removed.");
      } else {
        await existingHolding.save();
        console.log("Existing holding updated for SELL.");
      }
    }
    res.status(201).send("Order processed and holdings updated!");
  } catch (error) {
    console.error("Error processing new order:", error);
    res.status(500).send("Error processing order.");
  }
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);
  mongoose.connect(uri).then(() => {
    console.log("DB connected!");
  }).catch(err => console.error("DB connection error:", err));
});