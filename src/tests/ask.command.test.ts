import { Command } from "commander";
import { askCommand } from "../commands/ask.command";
import { askQuestion } from "../services/kb.service";
import { vi, describe, it, expect, afterEach } from "vitest";

vi.mock("../services/kb.service");

describe("ask command", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  // Test 1 — in ra question và answer
  it("should print question and answer", async () => {
    vi.mocked(askQuestion).mockResolvedValue({
      question: "test?",
      answer: "test answer",
      postId: 1,
    });

    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const program = new Command();
    askCommand(program);
    await program.parseAsync(["node", "cli", "ask", "test?"]);

    expect(consoleSpy).toHaveBeenCalledWith("Answer  :", "test answer");
  });

  it("should print JSON when --json flag is used", async () => {
    vi.mocked(askQuestion).mockResolvedValue({
      question: "test?",
      answer: "test answer",
      postId: 1,
    });
    // Test 2 — flag --json
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const program = new Command();
    askCommand(program);
    await program.parseAsync(["node", "cli", "ask", "test?", "--json"]);

    expect(consoleSpy).toHaveBeenCalledWith(
      JSON.stringify({ question: "test?", answer: "test answer", postId: 1 })
    );
  });
  // Test 3 — argument truyền đúng không
  it("should call askQuestion with correct argument", async () => {
    vi.mocked(askQuestion).mockResolvedValue({
      question: "hello?",
      answer: "some answer",
      postId: 2,
    });

    vi.spyOn(console, "log").mockImplementation(() => {});
    const program = new Command();
    askCommand(program);
    await program.parseAsync(["node", "cli", "ask", "hello?"]);

    expect(askQuestion).toHaveBeenCalledWith("hello?");
  });
  // Test 4 - flag --verbose
  it("should print full response when --verbose flag is used", async () => {
  const mockData = {
    question: "test?",
    answer: "test answer",
    postId: 1,
  };

  vi.mocked(askQuestion).mockResolvedValue(mockData);

  const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  const program = new Command();
  askCommand(program);
  await program.parseAsync(["node", "cli", "ask", "test?", "--verbose"]);

  // In ra answer bình thường
  expect(consoleSpy).toHaveBeenCalledWith("Answer  :", "test answer");

  // Thêm in ra full JSON
  expect(consoleSpy).toHaveBeenCalledWith(
    "\n Full response:",
    JSON.stringify(mockData, null, 2)
  );
});
  it("should handle API error", async () => {
    vi.mocked(askQuestion).mockRejectedValue(
    new Error("API failed")
  );

  const errorSpy = vi
  .spyOn(console, "error")
  .mockImplementation(() => {});

  const exitSpy = vi
    .spyOn(process, "exit")
    .mockImplementation((() => {
    throw new Error("process.exit");
  }) as any);

  const program = new Command();
  askCommand(program);

  await expect(
    program.parseAsync(["node", "cli", "ask", "test?"])
  ).rejects.toThrow("process.exit");

  expect(errorSpy).toHaveBeenCalledWith(
    "Detail:",
    "API failed"
  );

  exitSpy.mockRestore();
  });
});