import React from 'react';
import { Fragment } from 'react';
import './Product.css';
import { IConsumerGood } from '../../service/api';


interface IProductProps {
  consumerGood?: IConsumerGood;
}

export const Product = (product: IProductProps) => {

const { consumerGood } = product;

  return (
    <div className="product">
        {consumerGood ? (
          <Fragment>
            <img
            className="display-image"
              src={consumerGood.image}
              alt="blender"
            />
            <h3>{consumerGood.title}</h3>
            <span className="subtitle">{consumerGood.subtitle}</span>
            <div className="tags-container">
              <div>
                {consumerGood.tags.map((tag) => (
                  <div className="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment />
        )}
    </div>
  );
};

export default Product;