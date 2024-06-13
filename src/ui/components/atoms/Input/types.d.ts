import { TCursor, THeight, TWidth } from '@/ui/types/tailwindStyleTypes';
import { CSSProperties, FocusEventHandler } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type inputType = 'text' | 'number' | 'email' | 'file' | 'date';

export interface IInputProps {
    type: inputType | 'area';
    width: TWidth;
    mobileWidth: TWidth;
    height: THeight;
    mobileHeight: THeight;
    name: string;
    register: UseFormRegisterReturn;
    onChange: (event: TOnChangeParamsInput | ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    error?: FieldError;
    placeholder?: string;
    style?: CSSProperties;
    onFocus?: FocusEventHandler<HTMLInputElement> | FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLInputElement> | FocusEventHandler<HTMLTextAreaElement>;
    maxLength?: number;
    cursor?: TCursor;
    required?: boolean;
    rows?: number;
    cols?: number;
    max?: number | string;
    min?: number | string;
};

export interface IBasicInputProps extends Omit<IInputProps, 'rows' | 'cols' | 'type'> {
    type: inputType;
};

export interface IBasicInputTextAreaProps extends Omit<IInputProps, 'min' | 'max' | 'type' | 'onFocus' | 'onBlur'> {
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
};