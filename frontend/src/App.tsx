import Register from "./features/auth/register/Register";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import Login from "./features/auth/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoute element={<h1>HOME</h1>} />}>
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
