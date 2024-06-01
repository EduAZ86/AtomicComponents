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
                ${background && `dark:bg-dark-${background.dark} bg-light-${background.light} `}
                ${color && `dark:bg-dark-${color.dark} bg-light-${color.light} `}
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