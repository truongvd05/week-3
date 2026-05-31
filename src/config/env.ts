import dotenv from "dotenv";

dotenv.config();

export const env = {
  API_URL: process.env.API_URL || "",
};