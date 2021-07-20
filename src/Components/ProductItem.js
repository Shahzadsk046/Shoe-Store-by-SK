import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./../shoes.json";
import {Button} from 'react-bootstrap';

export default function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) return <h2>Product Not Found!</h2>;

  console.log(shoe);

  return (
    <div>
      <h1>This is Product Item Component</h1>
      <div className="shoeLink text-center">
        <h2>{shoe.name}</h2>
        <img src={shoe.img} height={500} alt={shoe.name} />
        <h6>Price: ${shoe.cost}</h6>
        <Button variant="outline-success">Add to Cart</Button>

      </div>
    </div>
  );
}
