import React, { useState, useEffect } from "react";
import { clickButton, fetchUserDetails } from "../services/api";
import "./ClickGame.css"; 

const ClickGame = ({ userEmail }) => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [prizesWon, setPrizesWon] = useState(0);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchUserDetails(userEmail);
        setTotalPoints(data.totalPoints || 0);
        setPrizesWon(data.prizesWon || 0);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setTotalPoints(0);
        setPrizesWon(0);
      }
    };

    fetchData();
  }, [userEmail]);

  const handleClick = async () => {
    try {
      const { data } = await clickButton(userEmail);
      setTotalPoints(data.totalPoints);
      setPrizesWon(data.prizesWon);
      setMessage(data.message);
    } catch (error) {
      console.error("Error clicking button:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="click-game-container">
      <h1 className="title">Total Points: {totalPoints}</h1>
      <h2 className="subtitle">Prizes Won: {prizesWon}</h2>
      <button onClick={handleClick} className="click-button">
        Click Me!
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ClickGame;
