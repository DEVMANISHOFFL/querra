export async function askLLM(text, question = "Summarize this PDF") {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `${question}\n\n${text}`,
    }),
  });

  const data = await response.json();
  return data?.choices?.[0]?.message?.content || "No response from AI.";
}
