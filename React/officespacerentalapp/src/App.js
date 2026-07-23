import React from "react";
import "./App.css";

function App() {

  const office = {
    name: "Tech Park Office",
    rent: 55000,
    address: "MG Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
  };

  const officeSpaces = [
    {
      name: "Tech Park Office",
      rent: 55000,
      address: "MG Road, Bengaluru",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
    },
    {
      name: "Business Hub",
      rent: 75000,
      address: "HSR Layout, Bengaluru",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800"
    },
    {
      name: "Corporate Tower",
      rent: 95000,
      address: "Whitefield, Bengaluru",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <h2>Featured Office</h2>

      <img
        src={office.image}
        alt={office.name}
        width="400"
      />

      <h3>Name: {office.name}</h3>

      <h3
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        Rent: ₹{office.rent}
      </h3>

      <h3>Address: {office.address}</h3>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeSpaces.map((item, index) => (

        <div className="officeCard" key={index}>

          <img
            src={item.image}
            alt={item.name}
            width="300"
          />

          <h3>{item.name}</h3>

          <h3
            style={{
              color: item.rent < 60000 ? "red" : "green"
            }}
          >
            Rent: ₹{item.rent}
          </h3>

          <h3>{item.address}</h3>

        </div>

      ))}

    </div>
  );
}

export default App;