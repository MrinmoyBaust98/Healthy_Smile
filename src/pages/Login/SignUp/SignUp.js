import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const handleSignupFromSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" h-[680px]  flex justify-center items-center">
      <div className=" lg:w-96 p-7 lg:shadow-xl">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignupFromSubmit)}>
          <div className=" my-4 form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Name</span>
            </label>
            <input
              type="text"
              {...register("Email")}
              className="input input-bordered w-full "
            />
          </div>

          <div className=" my-4 form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              {...register("Email")}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" my-3 form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className="input input-bordered w-full "
            />
          </div>

          <input
            className=" mt-4 btn btn-accent w-full text-xl font-normal text-white "
            type="submit"
            value="Sign Up"
          />
        </form>
        <p className=" my-3 text-center">
          Already Have an Account?
          <Link className=" mx-2 text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full text-accent">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
