import { useState } from "react";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  const [userData, setUserData] = useState(null);

  if (userData) {
    return (
      <div>
        Slack ekran {userData.me.name} {userData.authToken}
      </div>
    );
  } else {
    return <LoginPage onSuccess={setUserData} />;
  }
}

export default App;
