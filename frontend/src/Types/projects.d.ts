export interface Projects {
	data: Record<string, unknown>[];
	status: 'loading' | 'success' | 'failed' | 'initialized';
	error: string | null;
}

export interface ProjectPayload {
	projects: Record<string, unknown>[];
}

export interface ProjectPayloadError {
	message: string;
}
