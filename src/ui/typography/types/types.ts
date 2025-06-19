export const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  ulList: 'ul',
  olList: 'ol',
  list_item: 'li',
  'inline-code': 'code',
  lead: 'p',
  link: 'p',
} as const;

export type TypographyElement = keyof typeof tagMap;

export interface TypographyProps {
  as?: TypographyElement;
  size?: 'large' | 'medium' | 'small' | 'subtle';
  color?: 'white' | 'text';
  children: React.ReactNode;
  className?: string;
  listStyle?: 'none';
}
