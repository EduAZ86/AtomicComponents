import { FC } from "react";
import { Typography } from "../Typography";
import { ContentButton, IconContainer } from "./styles.tw";
import { IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({ title, iconLeft, iconRight, ...ContentProps }) => {
    return (
        <ContentButton
            {...ContentProps}
        >
            {iconLeft &&
                <IconContainer
                    iconLeft={iconLeft}
                    size={ContentProps.size}
                />}
            <Typography
                variant="textButton"
            >
                {title}
            </Typography>
            {iconRight &&
                <IconContainer
                    iconLeft={iconRight}
                    size={ContentProps.size}
                />}
        </ContentButton>
    )
}