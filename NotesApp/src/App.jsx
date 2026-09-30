function App() {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form Submitted")

  }
  return (

    <>
      <div className="h-screen bg-blue-300">

        <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col gap-2 p-8 items-center">
          <input
            className=" bg-amber-50 rounded-xl p-3 w-xl outline-none"
            type="text"
            placeholder="Enter Task Heading"
          />
          <textarea
            className=" bg-amber-50 rounded-xl p-3 w-xl  outline-none "
            placeholder="Enter Details"
          ></textarea>
          <button className="bg-emerald-500 p-4 rounded-2xl text-amber-50 hover:bg-emerald-800 transition-all hover:scale-105 hover:border-b-emerald-600 outline-none">Add Notes</button>
        </form>
      </div>
    </>
  );
}

export default App;
