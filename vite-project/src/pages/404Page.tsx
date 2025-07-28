import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 min-h-[calc(100vh-25vh)]">
      <h2 className="text-6xl font-modak mb-6">WHOOPS!</h2>
      <p className="text-lg font-Inter mb-8">
        Looks like this page doesn't exist!<br />
        (Click this button to go back to my home page!)
      </p>
      <Link
        to="/"
        className="bg-black text-offwhite font-semibold py-2 px-4 rounded-xl hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;