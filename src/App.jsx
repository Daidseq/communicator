import { useState } from "react";
import LoginPage from "./loginPage/LoginPage";
import MainPage from "./mainPage/MainPage";

function App() {
  const [userData, setUserData] = useState(null);

  if (userData) {
    return <MainPage userData={userData} />;
  } else {
    return <LoginPage onSuccess={setUserData} />;
  }
}

export default App;
