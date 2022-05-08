/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import { useForm } from "react-hook-form";
import { signUp, useAuth, signInGoogle } from "../../firebase.init";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const currentUser = useAuth();
  const onSubmit = (data) => {
    signUp(data.email, data.password, data.name);
  };
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        swal(`${res?.user?.email}`, "Google Sign Up successfully!", "success");
      })
      .catch((err) => {
        swal(`${err?.message}`, "Oops!", "error");
      });
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 min-h-screen">
        <div className="grid md:grid-cols-2">
          <div>
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/codergalib20/image_upload/main/96833-login.gif"
            />
          </div>
          <div className="shadow-lg border-2 border-gray-700 mt-4 p-6 rounded-md py-1 px-2 mb-2 flex items-center justify-center flex-col">
            <div
              className="w-full flex items-center text-3xl text-red-600 w-20 h-20 flex items-center justify-center shadow-lg border-2 rounded-lg border-red-600 justify-center mb-8 cursor-pointer"
              onClick={handleGoogleSignIn}
            >
              <button>
                <BsGoogle />
              </button>
            </div>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="block text-gray-700 text-md border border-gray-800 w-full rounded-md py-1 px-2 mb-2"
                {...register("name", { required: true })}
                placeholder="enter your name "
              />
              <input
                className="block text-gray-700 text-md border border-gray-800 w-full rounded-md py-1 px-2 mb-2"
                {...register("email", { required: true })}
                placeholder="enter your email "
              />
              <input
                className="block text-gray-700 text-md border border-gray-800 w-full rounded-md py-1 px-2 mb-2"
                {...register("password", { required: true })}
                type="password"
                placeholder="enter your password"
              />
              <div className="flex items-center justify-between">
                <input
                  className="bg-gray-700 cursor-pointer rounded-md py-2 px-5 text-gray-50 uppercase"
                  type="submit"
                  value="Register"
                />
                <p className="text-md text-red-600">
                  <Link to="/login">Already register ?</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
