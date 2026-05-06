import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const analyzeFinanceData = async (query: string, financeContext: any) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          text: `You are the ABILIX Finance Hub AI Assistant. You help users manage their business finances.
          
          Context about the business:
          - Current Month: May 2026
          - Total Revenue YTD: $145,280
          - Monthly Revenue (May): $55,000
          - Monthly Expenses (May): $38,500
          - Pending Payments: $18,420
          - Active Clients: 24
          - Top Clients: Nexus Digital, Quantum Labs
          - Current Cashflow Trend: Upward (+15% vs last month)
          
          Additional Finance Data: ${JSON.stringify(financeContext)}
          
          User Query: ${query}
          
          Provide a concise, professional, and helpful response. Use formatting (bolding, lists) to make it readable. If they ask about predictive analysis, use the provided numbers to give a realistic estimation.`
        }
      ],
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble analyzing your financial data right now. Please try again in a moment.";
  }
};
