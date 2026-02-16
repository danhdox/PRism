import { Config, IssueEvent, PullRequestEvent, StorageBackend } from '../types';
type DedupeStatus = 'duplicate' | 'related' | 'distinct';
type BacklogItemType = 'issue' | 'pr';
export interface BacklogItem {
    type: BacklogItemType;
    number: number;
    title: string;
    url: string;
    dedupeStatus: DedupeStatus;
    similarity: number;
    score: number;
    reasons: string[];
}
export declare class TriageService {
    private config;
    private storage;
    private llm;
    private github;
    constructor(config: Config, storage: StorageBackend);
    /**
     * Process an issue event
     */
    processIssue(event: IssueEvent): Promise<void>;
    /**
     * Process a pull request event
     */
    processPullRequest(event: PullRequestEvent): Promise<void>;
    /**
     * Process a backlog scan for open issues and PRs.
     * Returns ranked items with score reasoning.
     */
    processBacklog(owner: string, repo: string): Promise<BacklogItem[]>;
    buildBacklogReport(items: BacklogItem[]): string;
    postBacklogReport(owner: string, repo: string, issueNumber: number, items: BacklogItem[]): Promise<void>;
    /**
     * Detect duplicate issues
     */
    private detectIssueDuplicate;
    /**
     * Detect duplicate PRs
     */
    private detectPrDuplicate;
    /**
     * Generate PR review
     */
    private generatePrReview;
    /**
     * Suggest labels for an issue
     */
    private suggestIssueLabels;
    /**
     * Suggest labels for a PR
     */
    private suggestPrLabels;
    /**
     * Evaluate one issue in backlog scan
     */
    private evaluateIssueForBacklog;
    /**
     * Evaluate one PR in backlog scan
     */
    private evaluatePrForBacklog;
    private getSeverityCounts;
    private classifyDedupeResult;
    private postIssueSignalCommentIfNew;
    private postIssueCrossReference;
    private applyIssueDedupeLabels;
    private resolveDuplicateStatus;
    private normalizeSimilarity;
    private formatSimilarityPercent;
    private normalizeDuplicateResult;
    private scoreBacklogEntry;
    /**
     * Find similar issues using embeddings
     */
    private findSimilarIssues;
    /**
     * Find similar PRs using embeddings
     */
    private findSimilarPrs;
    /**
     * Format duplicate detection comment
     */
    private formatDuplicateComment;
    private formatRelatedComment;
    private formatCrossLinkedIssueComment;
    /**
     * Format PR review comment
     */
    private formatReviewComment;
    /**
     * Format a single finding
     */
    private formatFinding;
}
export {};
//# sourceMappingURL=triage.d.ts.map