import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="login">Имя пользователя</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          onChange={handleChange}
          value={data.username}
          required
          placeholder="Имя пользователя"
        />
      </div>
      <div className="form-group">
        <label for="password">Пароль</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
          placeholder="Пароль"
        />
      </div>
      <div className="d-grid gap-2 mt-2">
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </div>
      <div className="d-grid gap-2 mt-2">
        <button className="btn btn-primary" onClick={handleLogout}>
          Выйти
        </button>
      </div>
    </form>
  );
};

export default Auth;
