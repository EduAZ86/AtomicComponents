import { FC } from "react";
import { IContentButtonProps, IIconButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContentButton: FC<IContentButtonProps> = ({
    children,
    background,
    color,
    size,
    disabled,
    onClick,
    style,
    type,
    width
}) => {
    return (
        <button
            className={`
            ${width}
            ${background === 'transparent' ? `bg-transparent dark:bg-transparent` : `bg-light-${background} dark:bg-dark-${background}`}
            ${color !== 'transparent' && `dark:text-dark-${color} text-light-${color} `}
            `}
            onClick={onClick}
            disabled={disabled}
            style={style}
            type={type}
        >
            {children}
        </button>
    )
}

export const IconContainer: FC<IIconButtonProps> = ({ iconLeft, size }) => {
    return (
        <>{
            iconLeft &&
            <span
                className={`
                ${size}
            `}
            >
                <FontAwesomeIcon icon={iconLeft} />
            </span>
        }
        </>
    )
}