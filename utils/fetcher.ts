import type { NextApiResponse } from "next";

async function fetcher<T>(url: string) {
  const res = await fetch(`${process.env.NEXT_API_ROUTE}/api${url}`);
  const data: NextApiResponse<T> = await res.json();

  return data;
}

export default fetcher;
