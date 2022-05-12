import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import ActiveQuiz from "./Pages/ActiveQuiz/ActiveQuiz";
import Quizes from "./Pages/Quizes/Quizes";
import Auth from "./Pages/Auth/Auth";
import Reg from "./Pages/Auth/Reg";
import QuizCreator from "./Pages/QuizCreator/QuizCreator";
import QuizResults from "./Pages/QuizResults/QuizResults";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Quizes />} />
          <Route path="/auth" element={<Auth />} />
          {user && <Route path="/quiz-creator" element={<QuizCreator />} />}
          <Route path="/quiz/:id" element={<ActiveQuiz />} />
          <Route path="/edit/:id" element={<QuizCreator />} />
          <Route path="/results/:id" element={<QuizResults />} />
          {user && <Route path="/add_user" element={<Reg />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
