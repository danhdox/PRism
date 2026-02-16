import { VisionAlignment } from '../types';
export type BacklogItemType = 'issue' | 'pr';
export type DedupeStatus = 'duplicate' | 'related' | 'distinct';
export interface ScoreBacklogItemInput {
    itemType: BacklogItemType;
    dedupeStatus: DedupeStatus;
    duplicateSimilarity: number;
    visionAlignment?: VisionAlignment;
    severityCounts?: {
        critical?: number;
        major?: number;
        minor?: number;
        info?: number;
    };
    reviewComplexity?: 'low' | 'medium' | 'high';
}
export interface BacklogScore {
    score: number;
    reasons: string[];
}
/**
 * Score an item discovered during backlog runs.
 *
 * Returns a score in the range [0, 100] where higher scores mean higher
 * triage priority.
 */
export declare function scoreBacklogItem(input: ScoreBacklogItemInput): BacklogScore;
//# sourceMappingURL=scoring.d.ts.map