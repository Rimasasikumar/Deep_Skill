import React from "react";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Bengaluru</td>
            <td>₹3200</td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Kolkata</td>
            <td>Hyderabad</td>
            <td>₹5200</td>
          </tr>
        </tbody>
      </table>

      <p>
        Login to book tickets.
      </p>

    </div>
  );
}

export default GuestPage;