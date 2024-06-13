import { FC, FocusEventHandler } from "react";
import { IInputProps } from "./types";
import { BasicContainer } from "../basicContainer/BasicContainer";
import { BasicInput, BasicInputTextArea } from "./styles.tw";

export const Input: FC<IInputProps> = ({
    height,
    mobileHeight,
    width,
    mobileWidth,
    name,
    onChange,
    register,
    type,
    cols,
    cursor,
    error,
    id,
    max,
    maxLength,
    min,
    onBlur,
    onFocus,
    placeholder,
    required,
    rows,
    style,
}) => {
    return (
        <BasicContainer
            height={height}
            width={width}
            mobileHeight={mobileHeight}
            mobileWidth={mobileWidth}
            padding="p-2"
        >
            {type === 'area'
                ?
                <BasicInputTextArea
                    height={height}
                    mobileHeight={mobileHeight}
                    width={width}
                    mobileWidth={mobileWidth}
                    name={name}
                    onChange={onChange}
                    register={register}
                    cursor={cursor}
                    error={error}
                    id={id}
                    maxLength={maxLength}
                    required={required}
                    placeholder={placeholder}
                    style={style}
                    rows={rows}
                    cols={cols}
                    onBlur={onBlur as FocusEventHandler<HTMLTextAreaElement>}
                    onFocus={onFocus as FocusEventHandler<HTMLTextAreaElement>}
                />
                :
                <BasicInput
                    height={height}
                    mobileHeight={mobileHeight}
                    width={width}
                    mobileWidth={mobileWidth}
                    name={name}
                    onChange={onChange}
                    register={register}
                    cursor={cursor}
                    error={error}
                    id={id}
                    maxLength={maxLength}
                    required={required}
                    placeholder={placeholder}
                    style={style}
                    type={type}
                    max={max}
                    min={min}
                />
            }
        </BasicContainer>
    )
}