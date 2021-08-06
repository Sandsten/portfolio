export interface Admin {
	signedIn: boolean | null;
	status: 'loading' | 'success' | 'failed' | null;
	error: string | null;
}

export interface AdminPayload {
	message: string;
}

export interface Credentials {
	username: string;
	password: string;
}

export interface AdminError {
	message: string;
}
