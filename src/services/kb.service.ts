import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

export interface KBResponse {
  question: string;
  answer: string;
  postId: number;
}

export const askQuestion = async (question: string): Promise<KBResponse> => {
  const postId = (question.length % 100) + 1;

  try {
    const res = await api.get(`/posts/${postId}`);
    return {
      question,
      answer: res.data.title,
      postId,
    };
  } catch (error: any) {
    const status = error?.response?.status;
    throw new Error(`API Error ${status ?? "unknown"}: ${error.message}`);
  }
};