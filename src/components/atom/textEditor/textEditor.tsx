import React from "react";
import {
  BoldIcon,
  ItalicIcon,
  ResizeIcon,
  UnderlineIcon,
} from "../../../assets";

interface TextEditorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextEditor = ({ value, onChange }: TextEditorProps) => {
  return (
    <div className="rounded border border-input-border p-4">
      <div className="header mb-2 flex gap-2">
        <img src={BoldIcon} alt="bold" className="cursor-pointer" />
        <img src={UnderlineIcon} alt="underline" className="cursor-pointer" />
        <img src={ItalicIcon} alt="italic" className="cursor-pointer" />
        <img src={ResizeIcon} alt="resize" className="cursor-pointer" />
      </div>
      <div className="textArea">
        <textarea
          name="text-editor"
          id="text-editor"
          cols={50}
          rows={40}
          placeholder="Write your story"
          className="border-none focus:outline-none"
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default TextEditor;
