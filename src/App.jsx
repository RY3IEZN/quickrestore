import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CreateEvent from "./pages/dashboard/createEvent";
import Home from "./pages/home";
import Invitee from "./pages/dashboard/Invitee";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ViewEvent from "./pages/dashboard/ViewEvent";

import "./index.css";
import { Routes, Route } from "react-router-dom";
import EventSummary from "./pages/dashboard/EventSummary";

function App() {
  return (
    <div classNameName="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/invitee" element={<Invitee />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/view_event" element={<ViewEvent />} />
        <Route path="/event-summary" element={<EventSummary />} />
      </Routes>
    </div>
  );
}

export default App;
