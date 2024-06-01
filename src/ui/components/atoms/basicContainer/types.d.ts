import { ReactNode } from "react";

type backgroundComponent = {
    color:string;
    opacity:string;
    style?:'';
}

export interface IBasicContainerProps {
    children: ReactNode;
    imageBackground?:string;
    backgroundComponent?:backgroundComponent;

}

export interface IContainerStyleComponentProps extends IBasicContainerProps {

}