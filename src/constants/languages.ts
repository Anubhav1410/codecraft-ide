import type { Language } from "../types";

export const SUPPORTED_LANGUAGES: Language[] = [
    {
        id: "javascript",
        name: "JavaScript",
        extension: ".js",
        monacoId: "javascript",
        pistonId: "javascript",
        version: "18.15.0",
        defaultCode: 'console.log("Hello World!");'
    },
    {
        id: "python",
        name: "Python",
        extension: ".py",
        monacoId: "python",
        pistonId: "python",
        version: "3.10.0",
        defaultCode: 'print("Hello World!")'
    },
    {
        id: "typescript",
        name: "TypeScript",
        extension: ".ts",
        monacoId: "typescript",
        pistonId: "typescript",
        version: "5.0.3",
        defaultCode: 'console.log("Hello World!");'
    },
    {
        id: "cpp",
        name: "C++",
        extension: ".cpp",
        monacoId: "cpp",
        pistonId: "c++",
        version: "10.2.0",
        defaultCode: '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello World!" << endl;\n    return 0;\n}'
    },
    {
        id: "java",
        name: "Java",
        extension: ".java",
        monacoId: "java",
        pistonId: "java",
        version: "15.0.2",
        defaultCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}'
    }
];

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES[0];
