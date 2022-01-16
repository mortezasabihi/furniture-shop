import type { NextApiRequest, NextApiResponse } from "next";
import type { Data } from "types/hero";

const data: Data = {
  slides: [
    {
      title: "The Mine",
      category: "Working Chair",
      price: 180,
      image: "/hero/Hero-chair.png",
      color: "#B0D5D8",
    },
    {
      title: "Ingrid",
      category: "Working Chair",
      price: 120,
      image: "/hero/Hero-chair2.png",
      color: "#F5F5F5",
    },
    {
      title: "Gronlid",
      category: "Working Chair",
      price: 419,
      image: "/hero/Hero-couch.png",
      color: "#EBD9D9",
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data);
}
