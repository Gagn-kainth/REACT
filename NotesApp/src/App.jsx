import { useState } from "react";
import { X } from "lucide-react";

function App() {
  const [tittle, setTittle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ tittle, detail });
    setTask(copyTask);

    setTittle("");
    setDetail("");
  };
  const deleteNote = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
    
  }
  return (
    <>
      <div className="h-screen lg:flex bg-white">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex lg:w-1/2 flex-col gap-4 p-10 items-start bg-[url('https://linkforgebygg.vercel.app/vx-ZcWO6')] bg-cover bg-center"
        >
          <h1 className="font-bold text-4xl text-white ">Add Notes</h1>

          {/* TITTLE */}
          <input
            className=" bg-amber-50  rounded-xl px-5 py-2 w-full outline-none"
            type="text"
            placeholder="Enter Task Heading"
            value={tittle}
            onChange={(e) => {
              setTittle(e.target.value);
            }}
          />

          {/* DETAILS */}
          <textarea
            className=" bg-amber-50 rounded-xl px-5 py-2 w-full  outline-none "
            placeholder="Enter Details"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>

          <button className="w-full rounded-2xl bg-slate-900 px-5 py-2 text-white  border border-slate-700 transition-all duration-200 hover:bg-slate-800 hover:border-violet-500 hover:scale-105 active:scale-95">
            Add Notes
          </button>
        </form>

        <div className="lg:w-1/2 p-10">
          <h1 className="font-bold text-4xl text-gray-800">Recent Notes</h1>

          <div className="flex flex-wrap  items-start justify-start gap-4 p-4 h-full overflow-auto">
            {task.map(function (item, index) {
              return (
                <div
                  key={index}
                  className="h-52 w-40 rounded-2xl bg-white/90 border border-violet-300 shadow-lg  font-bold p-4 overflow-y-auto scrollbar-none relative hover:scale-105 transition-all duration-200"
                >
                  <div onClick={()=>{
                    deleteNote(index)
                  }} className="absolute top-2 right-2 cursor-pointer bg-gray-700 rounded-full p-1 text-white hover:bg-gray-400 hover:scale-95 transition-all duration-200">
                    <X size={16} strokeWidth={3} />
                  </div>

                  <h3 className="leading-snug  text-xl font-bold text-gray-800 mb-2 wrap-break-word">
                    {item.tittle}
                  </h3>
                  <p className=" leading-tight font font-medium text-gray-700 wrap-break-word ">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
