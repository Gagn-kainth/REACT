import React from "react";

const Buttons = (props) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center gap-4">
      <button
      style={{ opacity: props.index <= 1 ? 0.5 : 1 }}
        className="bg-amber-500 px-5 py-2 rounded-xl 
                    hover:bg-amber-300 hover:text-black hover:scale-105 
                    active:scale-95 cursor-pointer text-sm"
        onClick={() => {
          if (props.index > 1) props.setIndex(props.index - 1);
          props.setUserData([]);
        }}
      >
        Prev
      </button>
      <h4 className="flex items-center p-2">Page {props.index}</h4>
      <button
        className="bg-amber-500 px-5 py-2 rounded-xl 
                    hover:bg-amber-300 hover:text-black hover:scale-105 
                    active:scale-95 cursor-pointer text-sm"
        onClick={() => {
          props.setUserData([]);
          props.setIndex(props.index + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
