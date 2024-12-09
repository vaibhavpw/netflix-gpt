import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/IN-en-20241202-TRIFECTA-perspective_052fb757-35ce-4655-946e-3c9ffac95fd0_large.jpg"
          alt="banner"
        />
      </div>

      <form
        action=""
        className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 absolute bg-black bg-opacity-70 p-12 my-20 mx-auto left-0 right-0 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          {" "}
          {isSignInForm ? "SignIn" : "SignUp"}{" "}
        </h2>
        {!isSignInForm &&
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 m-2 border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-2 m-2 border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 m-2 border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full p-2 m-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition duration-300">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <p
          className="text-center mt-4 text-white py-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
           ? "New to netflix? SignUp now"
          : "Already registered? SignIn Now"
          }
        </p>
      </form>
    </div>
  );
};

export default Login;
