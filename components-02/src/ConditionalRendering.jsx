function ConditionalRendering() {
  const LoggedIn = true;
  const haveMessage=true;


//instead of using multi line code ,use ternary operator
  
  return <>
    {LoggedIn ?<h1>Welcome guys</h1>:<h2>please login buddy</h2>}
    {haveMessage && <p>you have new message</p>}
  </>;
  }
  export default ConditionalRendering;
//NOTE-> THIS CONDITIONAL RENDERING CAN BE DONE ON CSS FILES ALSO ON OTHER JSX FILES 


  //this thing is given by api ,but right now we are learning so we use it statically
//   let message;
//   if (LoggedIn) {
//     message = <h1>Welcome guys</h1>;
//   } else {
//     message = <h2>please login buddy</h2>;
//   }

