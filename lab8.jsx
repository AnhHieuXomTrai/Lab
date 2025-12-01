//Register
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async event => {
    event.preventDefault();

    if (!form.username || !form.email || !form.password) {
      return alert('Vui lòng nhập đầy đủ thông tin!');
    }

    try {
      await axios.post('http://localhost:3000/users', {
        ...form,
      });

      alert('Đăng ký thành công!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Đã xảy ra lỗi, vui lòng thử lại!');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Đăng ký</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Register;
//Login
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      return alert("Vui lòng nhập đầy đủ thông tin!");
    }

    try {
      const response = await axios.post("http://localhost:3000/login", form);
      const { token } = response.data;

      localStorage.setItem("token", token);

      alert("Đăng nhập thành công!");
      navigate("/add");
    } catch (error) {
      console.error(error);
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Đăng nhập</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;

