import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { email } from "zod";
import { registerValidator } from "../validators/register.validator";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({}); //set null ไปก่อน

  const navigate = useNavigate();

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    setError[{}];
    const result = registerValidator.safeParse(formData);
    if (!result.success) {
      const { fieldErrors } = result.error.flatten(); //เรียก fieldErrors มาใช้
      console.log(fieldErrors);
      setError(fieldErrors);
      return;
    }
    // console.log(result.error.flatten());
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
      );
      console.log("Register successfully register", res.data);
      toast.success("ลงทะเบียนสำเร็จ");
      navigate("/posts");
    } catch (error) {
      console.log("เกิดข้อผิดพลาด");
      toast.error("ลงทะเบียนล้มเหลว");
    }
  };

  console.log("error", error);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <form
        onSubmit={hdlSubmit}
        className="bg-white p-6 rounded-md w-full max-w-md flex flex-col"
      >
        <h2 className="flex justify-center text-2xl text-[#FEB9C8]">
          Create Account
        </h2>
        <label htmlFor="">Username :</label>
        <input
          type="text"
          name="username"
          className="border"
          placeholder="username:"
          onChange={hdlChange}
        />
        {error.username && <p className="text-red-500">{error.username[0]}</p>}

        <label htmlFor="">Password :</label>
        <input
          type="text"
          name="password"
          className="border"
          placeholder="password"
          onChange={hdlChange}
        />
        {error.password && <p className="text-red-500">{error.password[0]}</p>}
        <label htmlFor="">Email :</label>
        <input
          type="text"
          name="email"
          className="border"
          placeholder="example@mail.com"
          onChange={hdlChange}
        />
        {error.email && <p className="text-red-500">{error.email[0]}</p>}
        <label htmlFor="">Phone :</label>
        <input
          type="text"
          name="phone"
          className="border"
          placeholder="phone number"
          onChange={hdlChange}
        />
        {error.phone && <p className="text-red-500">{error.phone[0]}</p>}
        <button className="rounded-md m-5 bg-amber-200 p-2 hover:bg-[#F6A7BA]">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
