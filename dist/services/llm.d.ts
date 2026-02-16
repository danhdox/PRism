import { Config, DuplicateResult, PrReview, LabelSuggestion, VisionAlignment } from '../types';
export declare class LLMService {
    private client;
    private model;
    private readonly parseRetryCount;
    constructor(config: Config);
    private parseLlmResponse;
    private sanitizeJson;
    /**
     * Generate embedding for text using OpenAI API
     */
    generateEmbedding(text: string): Promise<number[]>;
    /**
     * Detect if an issue is a duplicate
     */
    detectDuplicate(title: string, body: string, similarItems: Array<{
        number: number;
        title: string;
        body: string;
        url: string;
        similarity: number;
    }>): Promise<DuplicateResult>;
    /**
     * Generate a structured PR review
     */
    generatePrReview(title: string, body: string, diffContent: string, files: Array<{
        filename: string;
        additions: number;
        deletions: number;
    }>): Promise<PrReview>;
    /**
     * Suggest labels for an issue or PR
     */
    suggestLabels(title: string, body: string, type: 'issue' | 'pr', existingLabels: string[]): Promise<LabelSuggestion>;
    /**
     * Assess PR alignment against a repository vision statement
     */
    assessVisionAlignment(title: string, body: string, visionDocument: string, reviewSummary: string): Promise<VisionAlignment>;
    /**
     * Calculate cosine similarity between two vectors
     */
    static cosineSimilarity(a: number[], b: number[]): number;
}
//# sourceMappingURL=llm.d.ts.map