import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl text-center">
        {/* 404 GIF */}
        <div
          className="
            h-75 sm:h-87.5 md:h-100
            bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')]
            bg-center
            bg-no-repeat
            bg-contain
            flex items-center justify-center
          "
        >
          <h1
            className="
              text-7xl sm:text-8xl
              font-bold
              text-gray-900
            "
          >
            404
          </h1>
        </div>

        {/* Content */}
        <div className="-mt-6 sm:-mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Looks like you're lost
          </h2>

          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            The page you are looking for is not available!
          </p>

          <Link
            to="/"
            className="
              inline-block
              mt-6
              px-6 py-3
              rounded-full
              bg-black
              text-white
              text-sm
              font-medium
              shadow-sm
              hover:bg-gray-800
              hover:scale-105
              active:scale-95
              transition-all duration-200
            "
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
