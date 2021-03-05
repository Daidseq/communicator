import React, { useState } from "react";
import Button from "../Button";

function LoginPage({ onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = () => {
    setLoading(true);
    fetch("https://open.rocket.chat/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status !== 200) {
          setError("Nie udało się zalogować");
        } else {
          onSuccess(response.data);
        }
        setLoading(false);
      });
  };

  return (
    <div className="login-page">
      <div>Login Page</div>
      <br />
      <br />
      <form>
        <div>
          <label>
            Email or username:
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <Button onButtonClick={() => login()} />
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default LoginPage;
