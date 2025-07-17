import { useState } from "react";

export default function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  // Update state when inputs change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submit, send data to FastAPI backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const res = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data); // Log backend response
      alert("Message sent!");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  // Render the form with Bootstrap classes
  return (
    <div className="ContactPage">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="firstName" // important for handleChange
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName" // important for handleChange
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  );
}
