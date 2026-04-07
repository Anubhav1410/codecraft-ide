import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import type { Language } from "../../types";

const EditorPanel = ({currentLanguage} : {
    currentLanguage : Language;
}) => {
    const [code, setCode] = useState(currentLanguage.defaultCode);

    useEffect(() => {
        setCode(currentLanguage.defaultCode);
    }, [currentLanguage]);

    function handleCodeChange (val : string | undefined) {
        setCode(val || "")
    }
    return (
        <div className="flex-1">
            <Editor
                height="100%"
                language={currentLanguage.monacoId}
                theme="vs-dark"
                value={code}
                onChange={handleCodeChange}
                loading={
                    <div className="flex items-center justify-center h-full bg-black text-zinc-400">
                        Loading editor...
                    </div>
                }
                options={{
                    minimap: { enabled: false },
                    fontSize: 16,
                    lineNumbers: "on",
                    wordWrap: "on",
                    tabSize: 4,
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    padding: { top: 16 },
                }}
            />
        </div>
    );
};

export default EditorPanel;