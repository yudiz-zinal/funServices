function PasswordField({
  type = "password",
  value = "",
  error = "",
  onChange = (_val) => {},
  placeHolder = "",
  className = "",
  id = "",
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
        id={id}
        class={className}
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
  className?: string;
  id?: string;
};

export default PasswordField;
