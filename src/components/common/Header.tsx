import { SUPPORTED_LANGUAGES } from "../../constants/languages";
import type { Language } from "../../types";

const Header = ({ currentLanguage, onLanguageChange, onRun, isRunning }: {
    currentLanguage: Language;
    onLanguageChange: (lang: Language) => void;
    onRun : () => void;
    isRunning : boolean
}) => {
    return (
        <div className="h-12 bg-zinc-900 border-b border-zinc-700 flex items-center px-4">
            <span className="text-white font-semibold text-sm">CodeCraft IDE</span>
            <select className="ml-4 bg-zinc-800 text-white text-sm px-2 py-1 rounded border border-zinc-600"
                value = {currentLanguage.id}
                onChange={(e) => {
                    const selected = SUPPORTED_LANGUAGES.find(lang => lang.id === e.target.value);
                    if (selected) onLanguageChange(selected);
                }}
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                        {lang.name}
                    </option>
                ))}
            </select>
            <button
                className="ml-auto bg-green-600 hover:bg-green-700 disabled:bg-green-900 disabled:cursor-not-allowed text-white text-sm px-4 py-1 rounded"
                onClick={onRun}
                disabled={isRunning}
            >
                {isRunning ? "Running..." : "Run"}
            </button>
        </div>
    );
};

export default Header;