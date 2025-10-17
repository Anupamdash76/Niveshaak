import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import ActionWindow from "./ActionWindow";
const apiUrl = import.meta.env.VITE_API_URL;

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [actionWindowState, setActionWindowState] = useState({ isOpen: false, uid: null, mode: "BUY" });
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [orders, setOrders] = useState([]);

  const refetchData = () => {
    setTimeout(() => {
      const cacheBuster = `?timestamp=${new Date().getTime()}`;
      axios.get(`${apiUrl}/allHoldings${cacheBuster}`)
        .then((res) => setHoldings(res.data))
        .catch(err => console.error("Error fetching holdings:", err));

      axios.get(`${apiUrl}/allPositions${cacheBuster}`)
        .then((res) => setPositions(res.data))
        .catch(err => console.error("Error fetching positions:", err));

      axios.get(`${apiUrl}/allOrders${cacheBuster}`)
        .then((res) => setOrders(res.data))
        .catch(err => console.error("Error fetching orders:", err));
    }, 500);
  };

  useEffect(() => {
    refetchData();
  }, []);

  const openActionWindow = (uid, mode) => setActionWindowState({ isOpen: true, uid, mode });
  const closeActionWindow = () => setActionWindowState({ isOpen: false, uid: null, mode: "BUY" });

  return (
    <GeneralContext.Provider value={{ openActionWindow, closeActionWindow, holdings, positions, orders, refetchData }}>
      {children}
      {actionWindowState.isOpen && <ActionWindow uid={actionWindowState.uid} mode={actionWindowState.mode} />}
    </GeneralContext.Provider> // <-- THE FIX IS HERE
  );
};

export default GeneralContext;