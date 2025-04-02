import type { NextApiRequest, NextApiResponse } from "next";
import QueryProcessor from "../../utils/QueryProcessor.js";

type Data = { result?: string; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query.q as string;
  try {
    const result = await QueryProcessor(query);
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error in QueryProcessor:", error);
  }
}
