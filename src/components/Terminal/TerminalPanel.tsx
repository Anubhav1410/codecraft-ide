import { useState } from "react";
import type { ExecuteResponse } from "../../services/codeExecution";

const TerminalPanel = ({ output, isRunning, stdin, onStdinChange }: {
    output: ExecuteResponse | null;
    isRunning: boolean;
    stdin: string;
    onStdinChange: (value: string) => void;
}) => {
    const [activeTab, setActiveTab] = useState<"output" | "input">("output");

    return (
        <div className="h-48 bg-zinc-950 border-t border-zinc-700 flex flex-col">
            <div className="flex border-b border-zinc-800">
                <button
                    onClick={() => setActiveTab("output")}
                    className={`px-4 py-2 text-xs uppercase tracking-wider ${
                        activeTab === "output"
                            ? "text-white border-b-2 border-green-500"
                            : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                    Output
                </button>
                <button
                    onClick={() => setActiveTab("input")}
                    className={`px-4 py-2 text-xs uppercase tracking-wider ${
                        activeTab === "input"
                            ? "text-white border-b-2 border-green-500"
                            : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                    Input
                </button>
            </div>

            <div className="flex-1 overflow-auto p-4 font-mono text-sm">
                {activeTab === "output" && (
                    <>
                        {isRunning && <div className="text-yellow-400">Running...</div>}

                        {!isRunning && !output && (
                            <div className="text-zinc-500">Click Run to execute your code.</div>
                        )}

                        {!isRunning && output && (
                            <>
                                {output.stdout && (
                                    <pre className="text-white whitespace-pre-wrap">{output.stdout}</pre>
                                )}
                                {output.stderr && (
                                    <pre className="text-red-400 whitespace-pre-wrap">{output.stderr}</pre>
                                )}
                                <div className="mt-2 text-xs text-zinc-500">
                                    Exit code: {output.exitCode}
                                </div>
                            </>
                        )}
                    </>
                )}

                {activeTab === "input" && (
                    <textarea
                        value={stdin}
                        onChange={(e) => onStdinChange(e.target.value)}
                        placeholder="Type input for your program here..."
                        className="w-full h-full bg-transparent text-white resize-none outline-none font-mono text-sm placeholder-zinc-600"
                    />
                )}
            </div>
        </div>
    );
};

export default TerminalPanel;