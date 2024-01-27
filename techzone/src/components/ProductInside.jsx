import React from "react";
import { items } from "./AllData";

const ProductInside = () => {
  return (
    <div className='container'>
      <div className='image-side'>
        <img src={items[0].img} alt='chair' />
        <div className='other-image'></div>
      </div>
      <div className='info-side'>
        <p>
          Sum is a series designed by the Danish designer Simon Legald, who is
          the epitome of modern elegance. Elegant and resolute as the tip of a
          wing, the armrests spread out invitingly, as if they want to embrace
          you in the armchair's soft, homely space.
        </p>
      </div>
    </div>
  );
};

export default ProductInside;
