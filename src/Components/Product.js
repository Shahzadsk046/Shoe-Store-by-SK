import React from "react";
import { Link } from "react-router-dom";
import Shoes from "./../shoes.json";
import { Button } from "react-bootstrap";

export default function Product() {
  console.log(Shoes);
  return (
    <div>
      <h1>Featured Items</h1>
      <div className="productContainer text-center">
        {Object.keys(Shoes).map((keyName, idx) => {
          const shoe = Shoes[keyName];
          return (
            <div className="product" key={idx}>
              <Link
                key={keyName}
                className="shoeLink"
                to={`/product/${keyName}`}
              >
                <h3>{shoe.name}</h3>
                <img src={shoe.img} height={150} alt={shoe.name} />
                <h6>Price: ${shoe.cost}</h6>
              </Link>
              <Button variant="outline-success btn">Add to Cart</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
