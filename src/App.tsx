import Header from "./components/common/header"
import EditorPanel from "./components/Editor/EditorPanel"
import Sidebar from "./components/Sidebar/Sidebar"
import TerminalPanel from "./components/Terminal/TerminalPanel"

function App() {
  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      <Header></Header>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <div className="flex flex-col flex-1">
          <EditorPanel></EditorPanel>
          <TerminalPanel></TerminalPanel>
        </div>
      </div>
    </div>
  );
}

export default App