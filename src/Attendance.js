import React from 'react';
import './Attendance.css'; // Import the CSS file for styling

const Attendance = () => {
  const rows = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Sam Johnson' },
    { name: 'Alice Brown' },
    { name: 'Bob White' },
  ];

  return (
    <div className="attendance-container">
      <h2>Attendance</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>
                <select>
                  <option value="attendance">Attendance</option>
                  <option value="download">Download Payslip</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
