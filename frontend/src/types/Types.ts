export type ApiFetchOptions = {
    method: 'GET' | 'POST' | 'PATCH';
    path: string,
    body?: unknown,
    headers?: Record<string, string>,
    credentials?: RequestCredentials,
    delai?: number,
}

export type ApiResponse<TData> = {
    message: string,
    data: TData,
}