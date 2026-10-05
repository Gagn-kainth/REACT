import React from "react";

function Cards(props) {
  return (
    <div>
      <a href={props.user.url} target="_blank" rel="noopener noreferrer">
        <div className="h-40 w-44 m-2">
          <img
            src={props.user.download_url}
            alt={props.user.author}
            className="h-full w-full object-cover hover:scale-105 transition-all duration-200 rounded-lg border-2 border-transparent hover:border-amber-200"
          />
        </div>
        <h1 className="font-thin text-gray-500">{props.user.author}</h1>
      </a>
    </div>
  );
}

export default Cards;
