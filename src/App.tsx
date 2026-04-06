import Header from "./components/common/Header"
import EditorPanel from "./components/Editor/EditorPanel"
import Sidebar from "./components/Sidebar/Sidebar"
import TerminalPanel from "./components/Terminal/TerminalPanel"
import { useState } from "react"
import type { Language } from "./types"
import { DEFAULT_LANGUAGE } from "./constants/languages"


function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE)

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      <Header currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} ></Header>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <div className="flex flex-col flex-1">
          <EditorPanel currentLanguage={currentLanguage}></EditorPanel>
          <TerminalPanel></TerminalPanel>
        </div>
      </div>
    </div>
  );
}

export default App