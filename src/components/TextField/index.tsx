function TextField({
  type = "text",
  value = "",
  error = "",
  onChange = (_val) => {},
  placeHolder = "",
  className = "",
}: Props) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onInput={(e: any) => onChange(e.target?.value)}
        placeholder={placeHolder}
        noValidate
        autoComplete="off"
        class={className}
      />
      <span style={{ color: "#F8373F", fontSize: "14px" }}>{error}</span>
    </div>
  );
}

type Props = {
  type?: inputType;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  placeHolder?: string;
  className?: string;
};

export default TextField;
