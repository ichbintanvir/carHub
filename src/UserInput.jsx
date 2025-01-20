import React from "react";

const UserInput = ({userInput, setUserInput,check,setCheck}) => {
  return (
    <form className="flex items-center gap-5">
      <input
        type="text"
        value={userInput}
        className="border outline-none w-1/2 xl:w-1/4 px-3 py-1 rounded"
        placeholder="Search cars..."
        // onChange={(e=>setUserInpute.target.value)}
        onChange={(event)=>setUserInput(event.target.value)}
      />
      <p className="flex items-center gap-3">
        <input type="checkbox" name="" id="" onClick={()=>setCheck(!check)}/>
        <span className="capitalize">show premium only</span>
      </p>
    </form>
  );
};

export default UserInput;
