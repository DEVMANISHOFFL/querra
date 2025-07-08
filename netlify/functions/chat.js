// netlify/functions/chat.js

export async function handler(event) {
    try {
        const body = JSON.parse(event.body);
        const messages = body.messages;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {  
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://eloquent-macaron-1dceff.netlify.app", // replace localhost
            },
            body: JSON.stringify({
                model: "mistralai/mistral-small-3.1-24b-instruct:free",
                messages,
            }),
        });

        console.log("🔐 OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);
        console.log("🔐 OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);
        console.log("🔐 OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
    } catch (err) {
        console.error("Netlify Function error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "OpenRouter failed." }),
        };
    }
}
