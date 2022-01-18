import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "types/product";
import db from "db.json";

const data: Data = db as Data;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data);
}
