import React from "react";
import Header from "./Header";
import UserInput from "./UserInput";
import Cards from "./Cards";

const CarHub = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <UserInput />
      <Cards />
    </div>
  );
};

export default CarHub;
