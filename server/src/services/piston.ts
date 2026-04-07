const PISTON_API_URL = "http://localhost:2000/api/v2/execute";

interface PistonRequest {
    language: string;
    version: string;
    code: string;
}

interface PistonResponse {
    stdout: string;
    stderr: string;
    output: string;
    exitCode: number;
}

export async function executeCode({ language, version, code }: PistonRequest): Promise<PistonResponse> {
    const response = await fetch(PISTON_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            language,
            version,
            files: [{ content: code }],
        }),
    });

    if (!response.ok) {
        throw new Error(`Piston API error: ${response.status}`);
    }

    const data = await response.json();

    return {
        stdout: data.run.stdout,
        stderr: data.run.stderr,
        output: data.run.output,
        exitCode: data.run.code,
    };
}