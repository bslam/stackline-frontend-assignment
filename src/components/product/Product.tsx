import React from 'react';
import { Fragment } from 'react';
import './Product.css';

export interface IConsumerGood {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: {
        customer: string;
        review: string;
        score: number;
    }[];
    retailer: string;
    details: string[];
    tags: string[];
}

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