import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
