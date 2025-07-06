export const askLLM = async (context, question) => {
    // Format context safely
    const formattedContext = typeof context === "string"
        ? context
        : JSON.stringify(context, null, 2);

    // Trim large context to prevent token overflow
    const trimmedContext = formattedContext.length > 4000
        ? formattedContext.slice(0, 4000)
        : formattedContext;

    const messages = [
        {
            role: "system",
            content: "You are a helpful assistant. Answer based on the following document.",
        },
        {
            role: "user",
            content: `Document:\n${trimmedContext}\n\nQuestion:\n${question}`,
        },
    ];

    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
    });

    const data = await res.json();

    if (!res.ok) {
        console.error("OpenRouter API failed:", data);
        throw new Error(JSON.stringify(data));
    }

    return data;
};
