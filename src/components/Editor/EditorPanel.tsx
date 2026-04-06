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
            />
        </div>
    );
};

export default EditorPanel;