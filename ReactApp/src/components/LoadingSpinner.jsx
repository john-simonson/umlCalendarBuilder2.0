import spinner from "../img/Spinner.svg";

export default function LoadingSpinner() {
  return (
    <div className="absolute w-screen h-screen bg-black bg-opacity-20">
      <img
        className="relative w-24 h-24 mx-auto mt-64 animate-spin"
        src={spinner}
        alt="loading spinner"
      />
    </div>
  );
}