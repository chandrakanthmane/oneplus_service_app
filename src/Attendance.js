import React, { useState , useEffect } from 'react';
import './Attendance.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const [showModal, setShowModal] = useState(false);
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentAttendance, setCurrentAttendance] = useState({});
  const [presentDays, setPresentDays] = useState(0);
  const [absentDays, setAbsentDays] = useState(0);

  const rows = [
    { name: 'John Doe', attendance: {
      1: "3",
      2: "8",
      3: "0",
      4: "2",
      5: "8",
      10: "8"
    } 
    },
    { name: 'Jane Smith' },
    { name: 'Sam Johnson' },
    { name: 'Alice Brown' },
    { name: 'Bob White' },
  ];

  const history = useNavigate(); // Initialize useHistory

  const handleSelectChange = (event , attendance) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === 'attendance') {
      const date = new Date();
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth();
      const days = new Date(currentYear, currentMonth + 1, 0).getDate();
      setDaysInMonth(Array.from({ length: days }, (_, i) => i + 1));
      setCurrentAttendance(attendance || {});
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOption('default');
  };

  const backClick = () => {
      history('/'); // Navigate to the Attendance component
  };

  useEffect(() => {
    let present = 0;
    Object.values(currentAttendance).forEach(value => {
      if ( value ) {
        present += 1;
      }
    });
    const noOfAbsent = daysInMonth.length - present;
    setPresentDays(present);
    setAbsentDays(noOfAbsent);
  }, [currentAttendance, daysInMonth]);

  return (
    <>
    <button className='backButton' onClick={backClick}>Go Back</button>
    <div className="attendance-container">
      <h2>User Details</h2>
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
                <select value={selectedOption} onChange={(event) => handleSelectChange(event, row.attendance)}>
                <option value="default">Please Select</option>
                  <option value="attendance">Attendance</option>
                  <option value="download">Download Payslip</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3>Attendance in Current Month</h3>
            <div className="days-grid">
            {daysInMonth.map((day) => {
                const attendanceValue = currentAttendance[day] || "0";
                return (
                  <div 
                    className={`day-box ${attendanceValue === "0" ? 'red' : 'green'}`} 
                    key={day}
                  >
                    <div className="day-number">{day}</div>
                    <div className="day-label">{attendanceValue}</div>
                  </div>
                );
              })}
            </div>
            <div className="attendance-summary">
              <p>Present Days: {presentDays}</p>
              <p>Absent Days: {absentDays}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Attendance;
