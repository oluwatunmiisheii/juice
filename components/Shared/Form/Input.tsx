import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
  type?: string;
  id?: string;
  defaultValue?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = "text", name, id, placeholder, ...rest } = props;
  const [inputType, setInputType] = useState(type);

  return (
    <div className="relative mb-8">
      <div className="mt-1 relative">
        <input
          type={inputType}
          name={name}
          id={id}
          ref={ref}
          className="block w-full rounded-xl border border-[##D8D8D8] sm:text-sm placeholder:text-customGray text-base pl-4 py-5 outline-none"
          placeholder={placeholder}
          {...rest}
        />
        {type === "password" && (
          <>
            {inputType === "password" ? (
              <button className="absolute bottom-1/4 right-3" onClick={() => setInputType("text")} type="button">
                <EyeSlashIcon className="h-6 w-6 text-gray-500" />
              </button>
            ) : (
              <button className="absolute bottom-1/4 right-3" onClick={() => setInputType("password")} type="button">
                <EyeIcon className="h-6 w-6 text-gray-500" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";
