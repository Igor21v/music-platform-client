import React, { Children, ReactNode, useRef } from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

export default function FileUpload(props: FileUploadProps) {
  const { setFile, accept, children } = props;
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };
  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
}
