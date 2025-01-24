import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailForm from "./components/EmailForm";
import ClickGame from "./components/ClickGame";

const App = () => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailForm setUserEmail={setUserEmail} />} />
        <Route path="/game" element={<ClickGame userEmail={userEmail} />} />
      </Routes>
    </Router>
  );
};

export default App;
