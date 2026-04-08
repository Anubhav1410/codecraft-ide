import type { ExecuteResponse } from "../../services/codeExecution";

const TerminalPanel = ({output, isRunning} : {
    output : ExecuteResponse | null,
    isRunning : boolean
}) => {
    return (
        <div className="h-48 bg-zinc-950 border-t border-zinc-700 flex flex-col">
            <div className="px-4 py-2 border-b border-zinc-800">
                <span className="text-xs uppercase tracking-wider text-zinc-400">Output</span>
            </div>

            <div className="flex-1 overflow-auto p-4 font-mono text-sm">
                {isRunning && (
                    <div className="text-yellow-400">Running...</div>
                )}

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
            </div>
        </div>
    );
}

export default TerminalPanel;