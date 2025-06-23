export interface CustomSelectProps {
  className?: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}
