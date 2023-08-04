import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import SignIn from "./pages/signin/SignIn";
import Signup from "./pages/signup/Signup";
import OnBoarching from "./pages/onboarding/OnBoarching";
import Chat from "./pages/chat/Chat";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Splash />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<OnBoarching />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
