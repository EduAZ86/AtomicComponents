import { THeight, TWidth } from '@/ui/types/tailwindStyleTypes';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type inputType = 'text' | 'number' | 'email' | 'file' | 'area';

export interface IInputProps {
    type: inputType;
    width: TWidth;
    height: THeight;
    name: string;
    register: UseFormRegisterReturn;
    onChange: (event: TOnChangeParamsInput | ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    error?: FieldError;
    placeholder?: string;
    style?: CSSProperties;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChangeForm?: (...event: any[]) => void;
    maxLength?: number;
    cursor?: string;
    required?: boolean;
    rows?: number;
    cols?: number;
    max?: number | string;
    min?: number | string;
};

export interface IBasicInputProps extends Omit<IInputProps, 'rows' | 'cols'> { };

export interface IBasicInputTextAreaProps extends Omit<IInputProps, 'min' | 'max'> { };