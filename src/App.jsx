import { useEffect, useState } from "react";
import passwords from "./password";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [toggleTerminal, setToggleTerminal] = useState(false);
  const [guess, setGuess] = useState("");
  const [inputType, setInputType] = useState(true);
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(10);
  const [winStatus, setWinStatus] = useState("");
  let win = "Good job you got in!";
  let loss = "Account locked.. Try again";

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 20);
    const currentPass = passwords[randomNum];
    setPassword(currentPass);
  }, []);

  console.log(password);

  // Handle password hints
  // Take out the numbers from the string
  const numbers = password
    .split("")
    .filter((char) => !isNaN(char) && char !== " ");

  // Use regex to remove the letters from password. If null, return empty array.
  const letters = password.match(/[a-zA-Z]/g) || [];

  // Check to see if the letters contains any uppercases
  const capitalLetters = password.match(/[A-Z]/g) || [];

  // Handle attempts
  const handleClick = () => {
    setTimeout(() => {
      if (guess === "") return;

      if (password === guess) {
        setWinStatus(win);
        return;
      }

      if (attempts <= 1) {
        setToggleTerminal(true);
        setWinStatus(loss);
        setAttempts(0);
      } else {
        setAttempts(attempts - 1);
      }
    }, 500);
  };

  const handleEnter = (e) => {
    setTimeout(() => {
      if (e.key !== "Enter") return;
      if (guess === "") return;

      if (password === guess) {
        setWinStatus(win);
        return;
      }

      if (attempts <= 1) {
        setToggleTerminal(true);
        setWinStatus(loss);
        setAttempts(0);
        return;
      } else {
        setAttempts(attempts - 1);
      }
    }, 500);
  };

  const handlePassInput = () => {
    setInputType(!inputType);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="min-w-80 h-3/4 desktop:h-2/4 py-4 px-5 flex flex-col justify-between items-center rounded-md bg-white border-2 border-gray-200 shadow-lg">
        <img
          src="./src/assets/payguardLogo.png"
          alt="Payguard logo"
          className="w-24"
        />
        <div className="">
          <span className="text-md">Username</span>
          <div className="text-md text-slate-500 border-2 border-gray-100 py-2 px-4 shadow-inner rounded-sm">
            CeoAtPayguard@payguard.com
          </div>
        </div>
        <div className="flex flex-col w-64">
          <label htmlFor="password">Password</label>
          <input
            type={`${inputType ? "password" : "text"}`}
            name="password"
            id="password"
            autoComplete="off"
            className="border-2 border-gray-50 animate-pulse shadow-inner py-2 px-4 focus:outline-none"
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleEnter}
          />
          <img
            src={`./src/assets/${inputType ? "EyeOff.png" : "Eye.png"}`}
            className="w-3 relative bottom-6 left-56 cursor-pointer transition-all duration-150"
            alt="Password icon"
            onClick={handlePassInput}
          />
          <p
            className={`${
              attempts < 10 ? "block" : "hidden"
            } absolute bottom-48 text-sm text-red-600`}
          >
            Incorrect password.
          </p>
          <span className="underline mt-2 text-sm cursor-pointer active:rotate-3 transition-all duration-50 select-none">
            Forgot password?
          </span>
        </div>
        <button
          onClick={handleClick}
          className="py-2 px-10 font-semibold transition-all duration-200 bg-gray-700 text-white  mb-5 rounded-md hover:bg-gray-500 select-none"
        >
          Login
        </button>
      </div>
      <Sidebar
        toggle={toggleTerminal}
        characters={password.length}
        letters={letters.length}
        numbers={numbers.length}
        attempts={attempts}
        capitalLetters={capitalLetters.length}
        winStatus={winStatus}
      />
      <div
        className="w-12 h-12 bg-black rounded-full absolute top-7 right-16 cursor-pointer"
        onClick={() => {
          setToggleTerminal(!toggleTerminal);
        }}
      ></div>
    </main>
  );
}

export default App;
