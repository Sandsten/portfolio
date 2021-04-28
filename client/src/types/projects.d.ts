export interface Projects {
	data: object[];
	status: 'loading' | 'success' | 'failed' | null;
	error: string | null;
}

export interface ProjectPayload {
	projects: object[];
}

export interface ProjectPayloadError {
	message: string;
}
