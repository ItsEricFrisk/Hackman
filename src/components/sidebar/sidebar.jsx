import { useEffect, useState } from "react";

export default function Sidebar({
  toggle,
  characters,
  letters,
  numbers,
  attempts,
  capitalLetters,
  winStatus,
}) {
  const [toggleSidebar, setToggleSiderbar] = useState(toggle);

  useEffect(() => {
    setToggleSiderbar(toggle);
  }, [toggle]);

  return (
    <section
      className={`w-screen lg:w-1/2 h-screen bg-indigo-950 bg-opacity-90 p-4 absolute top-0 left-0 flex flex-col text-green-500 select-none transition-all duration-1000 ${
        toggleSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <p className="text-lg">Hack OS version 1.0.2</p>
      <p className="text-sm mt-10">
        {"C:/Admin: analyze_user --username [CeoAtPayguard@payguard.com]"}
      </p>
      <p className="text-sm mt-2">{`Target Password: ${characters} characters long`}</p>
      <p className="text-sm mt-5">{`C:/Admin: probe_security --password_strength`}</p>
      <p className="text-sm mt-2">{`Password strength: High | Contains: ${letters} letters, ${capitalLetters} of which are uppercase, and ${numbers} numbers.`}</p>
      <p className="text-sm mt-5">{`C:/Admin: bruteforce_simulation --attempts-status`}</p>
      <p className="text-sm mt-2">{`Current remaining attempts: ${attempts} `}</p>
      <h3 className="self-center m-24 items-end text-2xl text-center animate-pulse">
        {winStatus}
      </h3>
    </section>
  );
}
