import Header from "./components/common/Header"
import EditorPanel from "./components/Editor/EditorPanel"
import Sidebar from "./components/Sidebar/Sidebar"
import TerminalPanel from "./components/Terminal/TerminalPanel"
import { useState, useEffect} from "react"
import type { Language } from "./types"
import { DEFAULT_LANGUAGE } from "./constants/languages"
import { executeCode, type ExecuteResponse } from "./services/codeExecution";


function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE)
  const [code, setCode] = useState<string>(currentLanguage.defaultCode);
  const [output, setOutput] = useState<ExecuteResponse | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [stdin, setStdin] = useState<string>("");

  useEffect(() => {
    setCode(currentLanguage.defaultCode);
  }, [currentLanguage]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
        // metaKey = Cmd on Mac, Windows key on Windows (rarely used)
        // ctrlKey = Ctrl on Windows/Linux, Control on Mac
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            runCode();
        }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [runCode]);

  async function runCode() {
      setIsRunning(true);
      setOutput(null);

      try {
          const result = await executeCode({
              language: currentLanguage.pistonId,
              version: currentLanguage.version,
              code: code,
              stdin : stdin
          });
          setOutput(result);
      } catch (error) {
          setOutput({
              stdout: "",
              stderr: error instanceof Error ? error.message : "Unknown error",
              output: "",
              exitCode: 1,
          });
      } finally {
          setIsRunning(false);
      }
  }

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onRun={runCode}
        isRunning={isRunning}
      />
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <div className="flex flex-col flex-1">
          <EditorPanel
            currentLanguage={currentLanguage}
            code={code}
            onCodeChange={setCode}
          />
          <TerminalPanel
            output={output}
            isRunning={isRunning}
            stdin={stdin}
            onStdinChange={setStdin}
          />
        </div>
      </div>
    </div>
  );
}

export default App