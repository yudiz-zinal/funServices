function TextField({
  type = "text",
  value = "",
  error = "",
  onChange = (_val) => { },
  placeHolder = "",
  className = "",
  id = ""
}: Props) {
  return (
    <>
      <input
        type={type}
        value={value}
        onInput={(e: any) => onChange(e.target?.value)}
        placeholder={placeHolder}
        noValidate
        autoComplete="off"
        class={className}
        id={id}
      />
      <span style={{ color: "#F8373F", fontSize: "14px" }}>{error}</span>
    </>
  );
}

type Props = {
  type?: inputType;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  placeHolder?: string;
  className?: string;
  id?: string;
};

export default TextField;
