import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Camera } from "lucide-react";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=18"
    );

    setUserData(response.data);
  };

  let printUserData = <h3 className="text-gray-700 font-light">No User Data Found</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((user) => {
      return (
        <div key={user.id}>
          <a href={user.url} target="_blank" rel="noopener noreferrer">
            <div className="h-40 w-44 m-2">
              <img
                src={user.download_url}
                alt={user.author}
                className="h-full w-full object-cover hover:scale-105 transition-all duration-200 rounded-lg border-2 border-transparent hover:border-amber-200"
              />
            </div>
            <h1 className="font-thin text-gray-500">{user.author}</h1>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen p-4 text-white overflow-auto scrollbar-none ">
      <h1 className=" text-3xl flex justify-center items-center font-bold  hover:text-amber-500 transition-all duration-200 cursor-pointer">
        Gallery
        <span className="">
          {" "}
          <Camera
            className=" mx-2  hover:text-amber-500 transition-all duration-200 cursor-pointer"
            size={35}
            strokeWidth={1.5}
          />
        </span>
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">{printUserData}</div>
      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-amber-500 px-5 py-2 rounded-xl hover:bg-amber-300 hover:text-black hover:scale-105 active:scale-95   cursor-pointer text-sm  ">
          Prev
        </button>
        <button className="bg-amber-500 px-5 py-2 rounded-xl hover:bg-amber-300 hover:text-black hover:scale-105 active:scale-95   cursor-pointer text-sm  ">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
