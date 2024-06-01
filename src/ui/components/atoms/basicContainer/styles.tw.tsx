import { FC } from "react";
import { IContainerStyleComponentProps } from "./types";

export const ContainerStyleComponent: FC<IContainerStyleComponentProps> = ({ children }) => {
    return (
        <div
        className={``}
        >
            {children}
        </div>
    )
}

export const ImageBackground: FC = () => {
    return (
        <img 
        className={``}
        src="" />
    )
}

export const BackgroundComponent:FC = () => {
    return(
        <span
            className={``}
        />
    )
}