import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { InputProps } from "../../../../interface.model";

const Input = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);
  const handleShow = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    setShow(!show);
  };
  return (
    <div className="relative flex w-full flex-col items-start justify-center gap-2">
      <label htmlFor={id} className="text-base font-normal">
        {label}
      </label>
      <input
        id={id}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded border border-input-border px-4 py-3 text-xl font-normal text-black placeholder:text-placeholder sm:w-[404px] md:w-full"
        required
      />
      {type === "password" ? (
        <div className="view-pass absolute top-12 right-6 cursor-pointer text-2xl">
          {show ? (
            <AiFillEyeInvisible onClick={handleShow} />
          ) : (
            <AiFillEye onClick={handleShow} />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
