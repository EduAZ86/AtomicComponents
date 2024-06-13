import { FC } from "react";
import { IBasicInputProps, IBasicInputTextAreaProps } from "./types";


export const BasicInput: FC<IBasicInputProps> = ({
    height,
    mobileHeight,
    width,
    mobileWidth,
    cursor,
    name,
    onChange,
    register,
    type,
    error,
    id,
    placeholder,
    max,
    maxLength,
    min,
    onBlur,
    onFocus,
    required,
    style

}) => {
    return (
        <input
            type={type}
            onChange={onChange}
            style={style}
            id={id}
            required={required}
            max={type === 'number' ? max : undefined}
            min={type === 'number' ? min : undefined}
            maxLength={type !== 'number' ? maxLength : undefined}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            {...register(name)}
            className={`
                ${mobileWidth} md:${width}
                ${mobileHeight} md:${height}
                ${cursor}
            `}
        />
    )
}

export const BasicInputTextArea: FC<IBasicInputTextAreaProps> = ({
    height,
    mobileHeight,
    width,
    mobileWidth,
    name,
    onChange,
    register,
    cols,
    rows,
    cursor,
    error,
    id,
    maxLength,
    onBlur,
    onFocus,
    placeholder,
    required,
    style
}) => {
    return (
        <textarea
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}

            className={`
                ${mobileWidth} md:${width}
                ${mobileHeight} md:${height}
                ${cursor}
    `}
        />
    )
}