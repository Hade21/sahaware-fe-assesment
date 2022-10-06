import { TextAreaProps } from "../../../../interface.model";

const TextArea = ({
  id,
  placeholder,
  label,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <label htmlFor={id} className="text-base font-normal">
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        cols={30}
        rows={10}
        className="w-full rounded border border-input-border px-4 py-3 text-xl font-normal text-black placeholder:text-placeholder sm:w-[404px]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
