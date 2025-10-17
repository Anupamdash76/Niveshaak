import React, { useState } from "react";

function CreateTicket() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issue: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket submitted:", form);
    alert("Ticket submitted successfully!");
    setForm({ name: "", email: "", issue: "" });
  };

  return (
    <section className="container my-5" id="createTicket">
      <h2>Need more help? Create a support ticket</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            className="form-control"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="issue" className="form-label">Describe Your Issue</label>
          <textarea
            className="form-control"
            name="issue"
            rows="5"
            value={form.issue}
            onChange={handleChange}
            placeholder="Explain your issue briefly"
            required
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Submit Ticket</button>
      </form>
    </section>
  );
}

export default CreateTicket;
