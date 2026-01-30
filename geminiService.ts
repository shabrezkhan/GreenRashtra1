
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askEcoAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are GreenRashtra's AI Eco-Assistant. You help users understand e-waste recycling. 
        GreenRashtra is an Indian e-waste management company with the slogan "Connecting Nation to Nature".
        Keep answers helpful, professional, and environmentally focused.
        If users ask how to recycle, mention that they can use the pickup form on our website.
        Be concise. Mention specific Indian context if relevant (like CPCB regulations).`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later or contact our team directly!";
  }
}
