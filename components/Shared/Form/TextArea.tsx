import { InputHTMLAttributes, FC } from "react";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  name: string;
  id?: string;
  rows?: number;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <div className="relative mt-8">
      <textarea
        {...props}
        rows={props.rows ?? 4}
        className="block w-full rounded-xl border border-[##D8D8D8] sm:text-sm placeholder:text-customGray text-base pl-4 py-5 outline-none"
      />
    </div>
  );
};
