import { Link } from "react-router-dom";

export default function ProgressButton({ enabled, to, text, onClick, from }) {
  let buttonStyles = !enabled
    ? "bg-gray-50 text-indigo-400"
    : "bg-indigo-400 text-white hover:bg-indigo-500 border border-solid border-white";
  return (
    <Link
      className={!enabled ? "pointer-events-none" : ""}
      to={to}
      onClick={onClick}
      state={{ from: from }}
    >
      <div
        className={`w-max rounded-full py-2 px-20 text-4xl font-bold transition-all ${buttonStyles}`}
      >
        {text}
      </div>
    </Link>
  );
}