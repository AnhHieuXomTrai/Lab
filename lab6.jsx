import { useState } from 'react';
import axios from 'axios';

function Add() {
  const [form, setForm] = useState({
    name: '',
    destination: 'Sapa',
    duration: '',
    price: '',
    image: '',
    description: '',
    available: '',
  });

  const handleChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async event => {
    event.preventDefault();

    if (
      !form.name ||
      !form.duration ||
      !form.price ||
      !form.image ||
      !form.description ||
      !form.available
    ) {
      return alert('Vui lòng nhập đầy đủ thông tin!');
    }

    await axios.post('http://localhost:3000/tours', {
      ...form,
      price: Number(form.price),
      available: Number(form.available),
    });

    alert('Thêm thành công!');
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Thêm tour</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          name="name"
          placeholder="Tên tour"
          onChange={handleChange}
        />
        <select
          className="border p-2 w-full"
          name="destination"
          onChange={handleChange}
        >
          <option value="Sapa">Sapa</option>
          <option value="Hạ Long">Hạ Long</option>
          <option value="Đà Lạt">Đà Lạt</option>
        </select>
        <input
          className="border p-2 w-full"
          name="duration"
          placeholder="Thời gian"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          name="price"
          placeholder="Giá"
          type="number"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <textarea
          className="border p-2 w-full"
          name="description"
          placeholder="Mô tả"
          onChange={handleChange}
        ></textarea>
        <input
          className="border p-2 w-full"
          name="available"
          placeholder="Số lượng"
          type="number"
          onChange={handleChange}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Thêm
        </button>
      </form>
    </div>
  );
}

export default Add;
