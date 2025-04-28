import { useState } from "react";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAccount from "./pages/userAccount";
import Login from "./pages/login";
import AccountDetails from "./pages/accountDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <UserAccount /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ < Login /> } />
        <Route path="/account-details" element={<AccountDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
