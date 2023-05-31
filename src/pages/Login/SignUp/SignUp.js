import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Error handle state
  const [signUpError, setSignUpError] = useState("");

  const { signUpUser, updateUser } = useContext(AuthContext);

  // From Handle Sunmit buttom
  const handleSignupFromSubmit = (data) => {
    // Error ke cear kore rakbo new signup er belay
    setSignUpError("");
    // console.log(data);
    signUpUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Toast added .when singnup successfull it shows
        toast("Sign Up Completed Successfully");
        // display user name part
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
        // display user name part ends here
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className=" h-[680px]  flex justify-center items-center">
      <div className=" lg:w-96 p-7 lg:shadow-xl">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignupFromSubmit)}>
          <div className=" my-4 form-control w-full ">
            {/* input fields are start here */}
            <label className="label">
              <span className="label-text text-xl">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name  is required" })}
              className="input input-bordered w-full "
            />

            {/* if name field not fillup this error will show */}
            {errors.name && (
              <p className="text-red-500" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className=" my-4 form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full "
            />
            {/* if Email field not fillup this error will show */}

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
                required: "Password Field Is required",
                minLength: {
                  value: 6,
                  message: "Password Should be 6 Charecter",
                },
              })}
              className="input input-bordered w-full "
            />
            {/* if Email field not fillup this error will show */}
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className=" mt-4 btn btn-accent w-full text-xl font-normal text-white "
            type="submit"
            value="Sign Up"
          />
          {/* jodi ager signuop thake same name or email ea then error will show */}
          {signUpError && <p className="text-red-600">{signUpError}</p>}
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
