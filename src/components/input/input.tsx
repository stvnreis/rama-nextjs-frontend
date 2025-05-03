import { Input as NextuiInput } from '@nextui-org/react';
import { ChangeEvent } from 'react';
export function Input({
  color,
  radius,
  handleChange,
  property,
  type,
  value,
}: {
  value: string;
  color?: 'primary';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  property: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>, key: string) => void;
  type?: 'string' | 'date' | 'tel' | 'time' | 'number';
}) {
  return (
    <NextuiInput
      value={value}
      color={color ?? 'default'}
      radius={radius ?? 'none'}
      onChange={(e) => handleChange(e, property)}
      type={type ?? 'string'}
    />
  );
}
