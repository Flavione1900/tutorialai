import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GeminiModel } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Sei un esperto Senior Frontend Engineer e UI/UX Designer specializzato nel workflow "Figma to Code".
Il tuo compito è aiutare gli utenti a capire come trasformare i loro design in codice pulito (HTML/CSS o React/Tailwind).
Rispondi in italiano in modo conciso, tecnico ma accessibile.
Se l'utente chiede codice, fornisci esempi moderni usando Tailwind CSS.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "API Key non configurata. Assicurati che process.env.API_KEY sia impostato.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GeminiModel.FLASH,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Mi dispiace, non sono riuscito a generare una risposta.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Si è verificato un errore durante la comunicazione con l'assistente AI.";
  }
};