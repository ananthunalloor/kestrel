export interface ButtonProps {
  class?: string;
  type?: string;
  label: string;
  onClick?: (event: MouseEvent) => void;
}

export function Button(props: ButtonProps) {
  return <button {...props}>{props.label}</button>;
}
