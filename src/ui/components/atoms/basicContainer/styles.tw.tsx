import { FC } from "react";
import { IBackgroundComponent, IBackgroundImage, IContainerStyleComponentProps } from "./types";

export const ContainerStyleComponent: FC<IContainerStyleComponentProps> = ({
    children,
    height,
    mobileHeight,
    mobileWidth,
    width,
    align,
    cursor,
    direction,
    gap,
    padding,
    margin,
    justyfy,
    overflow,
    position,
    rounded,
    style
}) => {
    return (
        <div
            className={`
             flex ${direction}
             md:${height} md:${width}
             ${mobileHeight} ${mobileWidth}
             ${align} ${justyfy}
             ${cursor}
            relative
            ${overflow}
            ${rounded}
            ${padding} ${margin} ${gap}
            `}
            style={style}
        >
            {children}
        </div>
    )
}

export const ImageBackground: FC<IBackgroundImage> = ({ opacity, src }) => {
    return (
        <img
            className={`
            w-full h-full
            top-0 left-0
            absolute
            -z-10
            ${opacity}
            `}
            src={src} />
    )
}

export const BackgroundComponent: FC<IBackgroundComponent> = ({ color, opacity }) => {
    return (
        <span
            className={`
                w-full h-full
                top-0 left-0
                absolute
                -z-10
               ${color === 'transparent' ? `bg-transparent dark:bg-transparent` : `bg-light-${color} dark:bg-dark-${color}`}
               ${opacity}
            `}
        />
    )
}