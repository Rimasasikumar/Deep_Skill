import React from "react";

function UserPage() {
  return (
    <div>

      <h2>Welcome User!</h2>

      <h3>You can now book flight tickets.</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹4500</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Bengaluru</td>
            <td>₹3200</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Kolkata</td>
            <td>Hyderabad</td>
            <td>₹5200</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}

export default UserPage;