import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  //AuthContex
  const { loginUser } = useContext(AuthContext);

  // From Submit Button Handle. When Submit button data will get here
  const handleFromSubmit = (data) => {
    // console.log(data);
    // Jodi Kono error thake tahole submit er jaygay reset kore felbo
    setLoginError("");

    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className=" h-[680px]  flex justify-center items-center">
      <div className=" lg:w-96 p-7 lg:shadow-xl">
        <h2 className="text-3xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit(handleFromSubmit)}>
          <div className=" my-4 form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full "
            />

            {/* when Emil is not given this error will show */}

            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className=" my-3 form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password Should be 6 Charecter",
                },
              })}
              className="input input-bordered w-full "
            />

            {/* when Password is not given This error will show */}
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forgot Password ?</span>
            </label>
          </div>

          {/* password wrong hole je error dekhabe  */}
          <div>
            {loginError && <p className="text-red-600"> {loginError} </p>}
          </div>
          <input
            className=" mt-4 btn btn-accent w-full text-xl font-normal text-white "
            type="submit"
            value="LOGIN"
          />
        </form>
        <p className=" my-3 text-center">
          New To Healthy Smile?
          <Link className="text-secondary" to="/signUp">
            Create New Account
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

export default Login;
