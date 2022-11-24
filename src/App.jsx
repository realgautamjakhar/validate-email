import { useState } from "react";

import "./App.css";
import { useRef } from "react";

function App() {
  const textInputRef = useRef();
  const [textErr, settextErr] = useState("");

  function handleTextInput(e) {
    let textInput = e.target.value;
    if (/^\d{10}$/.test(textInput)) {
      settextErr(""); // Valid Stop showing error
      textInputRef.current.style.borderColor = "revert";
      textInputRef.current.style.color = "revert";
      textInputRef.current.maxLength = "10"; //Setting a upper text character limit to 10 for 10 digits only
      //(if anybody have 10 digits without any character will face some problem)
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(textInput)) {
      settextErr(""); // Valid Stop showing error
      textInputRef.current.style.borderColor = "revert";
      textInputRef.current.style.color = "revert";
    } else {
      textInputRef.current.style.borderColor = "red";
      textInputRef.current.style.color = "red";
      textInputRef.current.maxLength = "50"; //Setting a upper text character limit to 50
      settextErr("Email / Phone is invalid"); // inValid showing error
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const { email, password } = e.currentTarget;
    console.log(email.value, password.value);
  }

  return (
    <div className=" h-screen flex items-center justify-center flex-col">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex flex-col w-[390px]"
      >
        <h1 className=" text-2xl font-bold ">Sign In to WisdomCircle</h1>
        <p className="mb-6">
          Don’t have an account?{" "}
          <span className="text-[#2558E5] font-semibold">Sign Up</span>
        </p>
        <input
          type="text"
          name="textInput"
          id="textInput"
          placeholder="Email or Mobile Number"
          onChange={(e) => handleTextInput(e)}
          ref={textInputRef}
          className="border-2 py-4 px-3 text-[#606880] outline-none rounded"
        />
        <p className="error-message mb-4 text-red-400">{textErr}</p>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => handleTextInput(e)}
          className="border-2 py-4 px-3 w-[390px] outline-none rounded mb-6"
        />
        <button
          type="submit"
          className=" bg-[#F1C12B] py-3 font-semibold hover:bg-transparent hover:outline hover:outline-[#F1C12B] ease-in-out "
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default App;
