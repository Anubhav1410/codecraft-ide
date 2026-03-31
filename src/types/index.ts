export interface Language {
    id : string;
    name : string;
    extension : string;
    monacoId : string;
    pistonId : string;
    version : string;
    defaultCode : string
}

export interface EditorFile {
    id : string;
    name : string;
    language : Language;
    content : string;
    isModified : boolean
}

export type Theme = "light" | "dark"