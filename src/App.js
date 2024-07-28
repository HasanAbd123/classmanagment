import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainpage } from "./component/mainpage/Mainpage";
import Login from "./page/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
