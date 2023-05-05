function EmailField({
  type = "email",
  value = "",
  error = "",
  onChange = (_val) => {},
  placeHolder = "",
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
      />
      <span>{error}</span>
    </div>
  );
}

type Props = {
  type?: inputType;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  placeHolder?: string;
};

export default EmailField;
