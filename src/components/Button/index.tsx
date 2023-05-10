import { VNode } from "preact";

function Button({
  title = "text",
  id = "btn",
  onClick = (_event) => {},
  isLoading = false,
  testId = "button",
  className = "",
}: Props): VNode<any> {
  return (
    <button
      onClick={!isLoading ? onClick : undefined}
      data-testid={testId}
      id={id}
      title={title}
      class={className}
    >
      {isLoading ? "Please wait" : title}
    </button>
  );
}

type Props = {
  title?: string;
  id?: string;
  onClick?: (event: MouseEvent) => void;
  isLoading?: boolean;
  testId?: string;
  className?: string;
};

export default Button;
