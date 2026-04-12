const API_URL = "http://localhost:3001/api/execute";

interface ExecuteRequest {
    language: string;
    version: string;
    code: string;
    stdin? : string;
}

export interface ExecuteResponse {
    stdout: string;
    stderr: string;
    output: string;
    exitCode: number;
}

export async function executeCode({ language, version, code, stdin }: ExecuteRequest): Promise<ExecuteResponse> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ language, version, code, stdin }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to execute code");
    }

    return response.json();
}