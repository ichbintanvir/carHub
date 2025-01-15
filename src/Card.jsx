import React from "react";

const Card = ({ title, brand, year, price, isPremium }) => {
  return (
    <div className="bg-white shadow rounded-xl p-2">
      <h4 className="font-bold text-xl">{title}</h4>
      <p>
        <span className="font-bold">Brand: </span>
        {brand}
      </p>
      <p>
        <span className="font-bold">Year: </span>
        {year}
      </p>
      <p>
        <span className="font-bold">Price: </span>${price}
      </p>
      <p>
        <span className="font-bold">Premium: </span>
        {isPremium === true ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default Card;
