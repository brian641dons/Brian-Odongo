
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Soulsprings Wellness Guide, an AI concierge for Soulsprings Wellness Spa in Nairobi.
Your tone is calming, professional, empathetic, and luxurious. 

Soulsprings is located at the Junction of Moi Avenue & Kenyatta Avenue, Nairobi. 
It is a women-owned business focusing on healing, renewal, and inner calm.
Services include:
- Massage Therapy (Deep Tissue, Swedish, Aromatherapy)
- Body Treatments (Scrubs, Wraps)
- Relaxation & Stress Relief
- Wellness & Self-Care Sessions

Recommend treatments based on user needs. If they feel stressed, suggest aromatherapy or deep tissue. If they want to refresh their skin, suggest body scrubs.
Always maintain a sanctuary-like persona. Do not mention prices unless asked (provide general premium ranges if needed).
Mention the phone number 0724 858 593 for bookings.
`;

export async function getWellnessAdvice(prompt: string, history: { role: string, content: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I am currently meditating on your request. Please try again in a moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, my connection to the sanctuary is momentarily interrupted. Please call us at 0724 858 593.";
  }
}
