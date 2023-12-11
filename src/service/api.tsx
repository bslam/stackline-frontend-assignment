

export interface IWeeklySales {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }

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
    sales: IWeeklySales[];
}