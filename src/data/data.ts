import { productImgs } from "@/contains/fakeData";
import productVariantImg2 from "@/images/products/v2.jpg";
import productVariantImg3 from "@/images/products/v3.jpg";
import productVariantImg4 from "@/images/products/v4.jpg";
import productVariantImg5 from "@/images/products/v5.jpg";
import productVariantImg6 from "@/images/products/v6.jpg";
//
import productSport1 from "@/images/products/sport-1.png";
import productSport2 from "@/images/products/sport-2.png";
import productSport3 from "@/images/products/sport-3.png";
import productSport4 from "@/images/products/sport-4.png";
import productSport5 from "@/images/products/sport-5.png";
import productSport6 from "@/images/products/sport-6.png";
import productSport7 from "@/images/products/sport-7.png";
import productSport8 from "@/images/products/sport-8.png";
import { StaticImageData } from "next/image";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: StaticImageData | string;
  color?: string;
  featuredImage: StaticImageData | string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string;
  category: string;
  tags: string[];
  link: "/product-detail/";
  variants?: ProductVariant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  rating?: string;
  numberOfReviews?: number;
}

const DEMO_VARIANTS: ProductVariant[] = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Enchanted Garden",
    price: 3200,
    image: productImgs[16],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
    rating: "4.4",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: 'Ethreal Blossom',
    price: 3800,
    image: productImgs[1],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Wild Orchid",
    price: 3500,
    image: productImgs[15],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Ocean Breeze",
    price: 2200,
    image: productImgs[3],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Mystic Woods",
    price: 2500,
    image: productImgs[4],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Velvet Noir",
    price: 1800,
    image: productImgs[5],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Royal Oud",
    price: 2600,
    image: productImgs[8],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Citrus Sunrise",
    price: 2500,
    image: productImgs[7],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];

export const SPORT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mastermind Toys",
    price: 74,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: "Divine Essence",
    price: 5000,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Tee Ball Beanie",
    price: 132,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Rubber Table Tennis",
    price: 28,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Classic Blue Rugby",
    price: 42,
    image: productSport5,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Amber Whisper",
    price: 1800,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Tabletop Football ",
    price: 12,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Pvc Catching Toy",
    price: 145,
    image: productSport8,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];
