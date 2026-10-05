import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import Heading from "./components/Heading";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    getData();
  }, [index]);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );

    setUserData(response.data);
  };

  let printUserData = (
    <h3 className=" text-2xl text-gray-700 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y1/2 ">
      Loading....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((user) => {
      return (
        <div key={user.id}>
          <Cards user={user} />
        </div>
      );
    });
  }
  return (
    <div 
    className="bg-black h-screen p-4 text-white overflow-auto scrollbar-none ">

       <Heading />
     
      <div className="flex h-[82%]  flex-wrap gap-4 justify-center ">
        {printUserData}
      </div>
    
        <Buttons index={index} setIndex={setIndex} setUserData={setUserData} />
  
    </div>
  );
}

export default App;
