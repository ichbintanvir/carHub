import React from "react";
import Card from "./Card";


const Cards = ({carDetails,userInput,check}) => {
  let rows=[]
  carDetails.forEach(eachCar=>{
    if(eachCar.title.toLowerCase().indexOf(userInput.toLowerCase()) === -1||(check===true && eachCar.isPremium===false)){
      return ;
    }
    rows.push(<Card key={eachCar.id} {...eachCar} />)
  })
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {rows}
    </div>
  );
};

export default Cards;
