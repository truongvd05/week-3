import { describe, it, expect, vi, beforeEach } from "vitest";

// vi.hoisted đảm bảo mockGet được tạo TRƯỚC khi vi.mock chạy
const { mockGet } = vi.hoisted(() => ({
  mockGet: vi.fn(),
}));

vi.mock("axios", async (importOriginal) => {
  const actual = await importOriginal<typeof import("axios")>();
  return {
    default: {
      ...actual.defaults,
      create: () => ({ get: mockGet }),
    },
  };
});

import { askQuestion } from "../services/kb.service";

describe("KB Service - askQuestion", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return question and answer on success", async () => {
    mockGet.mockResolvedValue({
      data: { title: "mock answer title", id: 1 },
    });

    const result = await askQuestion("hello");

    expect(result.question).toBe("hello");
    expect(result.answer).toBe("mock answer title");
    expect(result.postId).toBeGreaterThan(0);
  });

  it("should use different postId based on question length", async () => {
    mockGet.mockResolvedValue({
      data: { title: "some answer", id: 5 },
    });

    const short = await askQuestion("hi");
    const long = await askQuestion("a".repeat(50));

    expect(short.postId).not.toBe(long.postId);
  });

  it("should throw error when API fails", async () => {
    mockGet.mockRejectedValue(
      Object.assign(new Error("Request failed"), {
        isAxiosError: true,
        response: { status: 404 },
      })
    );

    await expect(askQuestion("bad question")).rejects.toThrow("404");
  });
});