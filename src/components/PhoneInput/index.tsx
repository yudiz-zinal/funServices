import PhoneInputComp from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneInput({
  value = "",
  placeholder = "",
  onChange = (_val) => {},
  className = "",
}: Props) {
  return (
    <PhoneInputComp
      country={"in"}
      value={value}
      placeholder={placeholder}
      onChange={(phone) => onChange(phone)}
      inputClass={className}
    />
  );
}

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default PhoneInput;
