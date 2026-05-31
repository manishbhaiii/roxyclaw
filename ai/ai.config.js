import {openai} from "openai";

export function getAgentModel() {

    const provider = createOpenAI({ apiKey: process.env.AI_API});

    const modelId = process.env.AI_MODEL || "deepseek-ai/deepseek-v4-pro";
    
    return provider(modelId);
}