import React, { useState } from "react";
import Header from "./Header";
import UserInput from "./UserInput";
import Cards from "./Cards";

const carDetails = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];


const CarHub = () => {
  const [userInput,setUserInput] = useState('');
  const [check,setCheck] = useState(false);
  console.log(check)
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} check={check} setCheck={setCheck}/>
      <Cards carDetails={carDetails} userInput={userInput} check={check}/>
    </div>
  );
};

export default CarHub;
