// src/app/api/chat/route.js

export async function POST(req) {
    try {
        const body = await req.json();
        const messages = body.messages;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000",
            },
            body: JSON.stringify({
                model: "mistralai/mistral-small-3.1-24b-instruct:free",
                messages,
            }),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("AI error:", err);
        return new Response(JSON.stringify({ error: "OpenRouter failed." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// ✅ Optional: ensures this file is treated as a module
export const config = {};
