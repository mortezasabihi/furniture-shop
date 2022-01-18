import type { NextApiResponse } from "next";

async function fetcher<T>(url: string) {
  const res = await fetch(`${process.env.NEXT_API_ROUTE}/api${url}`);

  if (res.ok) {
    const data: NextApiResponse<T> = await res.json();
    return data;
  }

  throw new Error(res.statusText);
}

export default fetcher;
