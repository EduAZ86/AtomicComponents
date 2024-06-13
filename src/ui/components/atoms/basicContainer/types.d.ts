import { TAlign, TColors, TDirection, TGap, THeight, TJustify, TMargin, TOpacity, TOverflow, TPadding, TPosition, TRounded, TSpace, TWidth } from "@/ui/types/tailwindStyleTypes";
import { CSSProperties, ReactNode } from "react";

export interface IBackgroundComponent {
    color: TColors;
    opacity: TOpacity;
}

export interface IBackgroundImage {
    src: string;
    opacity: TOpacity;
}

export interface IBasicContainerProps {
    width: TWidth;
    mobileWidth: TWidth;
    height: THeight;
    mobileHeight: THeight;
    children: ReactNode;
    position?: TPosition;
    direction?: TDirection;
    imageBackground?: IBackgroundImage;
    backgroundComponent?: IBackgroundComponent;
    style?: CSSProperties;
    cursor?: TCursor;
    justyfy?: TJustify;
    align?: TAlign;
    gap?: TGap;
    overflow?: TOverflow;
    padding?: TPadding;
    margin?: TMargin;
    rounded?: TRounded;
}

export interface IContainerStyleComponentProps extends Omit<IBasicContainerProps, 'imageBackground' | 'backgroundComponent'> {

}