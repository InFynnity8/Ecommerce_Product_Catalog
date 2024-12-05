// Represents the structure of a product fetched from the API
export interface Product {
    id: number;                  // Unique identifier for the product
    title: string;               // Name/title of the product
    price: number;               // Price of the product
    description: string;         // Detailed description of the product
    category: string;            // Category the product belongs to
    image: string;               // URL of the product's thumbnail image
    rating: {
      rate: number;              // Average rating of the product
      count: number;             // Number of ratings received
    };
  }
  
  // For sorting criteria (if implementing sorting)
  export type SortCriteria = 'price' | 'rating';
  