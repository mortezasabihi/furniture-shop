import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "types/product";

const data: Data = {
  products: [
    {
      title: "Ingrid",
      category: "Working Chair",
      price: 180,
      image: "/products/Chair-Ingrid.png",
      color: "#F5F5F5",
      type: "chair",
      slug: "ingrid-chair",
    },
    {
      title: "Shell",
      category: "Working Chair",
      price: 180,
      image: "/products/Chair-Shell.png",
      color: "#F5F5F5",
      type: "chair",
      slug: "shell-chair",
    },
    {
      title: "Leifarne",
      category: "Working Chair",
      price: 180,
      image: "/products/Chair-Leifarne.png",
      color: "#ADD4FF",
      type: "chair",
      slug: "leifarne-chair",
    },
    {
      title: "Gronlid",
      category: "Working Chair",
      price: 180,
      image: "/products/Sofa-Gronlid.png",
      color: "#EBD9D9",
      type: "sofa",
      slug: "gronlid-sofa",
    },
    {
      title: "Ekebol",
      category: "Working Chair",
      price: 180,
      image: "/products/Chair-Ekebol.png",
      color: "#F5F5F5",
      type: "chair",
      slug: "ekebol-chair",
    },
    {
      title: "Lallerod",
      category: "Working Chair",
      price: 180,
      image: "/products/Chair-Lallerod.png",
      color: "#F5F5F5",
      type: "chair",
      slug: "lallerod-chair",
    },
    {
      title: "Vejmon",
      category: "Working Chair",
      price: 180,
      image: "/products/Sofa-Vejmon.png",
      color: "#E6E2F0",
      type: "sofa",
      slug: "vejmon-sofa",
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data);
}