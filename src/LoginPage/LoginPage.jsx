import React, { useEffect } from "react";
import "./LoginPage.scss";
import { API_URL } from "../api";

export default function LoginPage() {
  useEffect(() => {
    fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: "paccmasters@gmail.com",
        password: "lolek232",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      });
  }, []);
  return (
    <div>
      Login Page
      <form>
        <div className="input-wrapper">
          <label>
            Email or username:
            <input type="text" name="name" />
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            Password:
            <input type="password" name="name" />
          </label>
        </div>
        <input type="submit" value="Zaloguj" />
      </form>
    </div>
  );
}
