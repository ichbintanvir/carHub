import React from "react";

const UserInput = () => {
  return (
    <div className="flex items-center gap-5">
      <input
        type="text"
        className="border outline-none w-1/2 xl:w-1/4 px-3 py-1 rounded"
        placeholder="Search cars..."
      />
      <p className="flex items-center gap-3">
        <input type="checkbox" name="" id="" />
        <span className="capitalize">show premium only</span>
      </p>
    </div>
  );
};

export default UserInput;
