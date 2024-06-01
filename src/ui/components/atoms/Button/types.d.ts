import { IColorTheme, TColor } from "@/types/color.types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

type TVariant = 'text' | 'contained' | 'outlined';
type TType = 'submit' | 'button';
type TSize = 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'fullWidth' | 'auto';
enum ButtonSize {
    xs = '50px',
    small = '100px',
    normal = '150px',
    large = '200px',
    xl = '250px',
    fullWidth = '100%',
    auto = 'auto'
}


export interface IButtonProps {
    style?: CSSProperties;
    loading?: boolean;
    disabled?: boolean;
    width?: string;
    type?: TType;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    iconLeft?: IconProp;
    iconRight?: IconProp;
    form?: string;
    children: ReactNode;
    background: IColorTheme;
    variant: TVariant;
    color: IColorTheme;
    size: TSize;
    title: string;
}

export interface IContentButtonProps extends Pick<IButtonProps, 'children' | 'width' | 'background' | 'color' | 'disabled' | 'onClick' | 'type' | 'size' | 'style'> { }

export interface IIconButtonProps extends Pick<IButtonProps, 'iconLeft' | 'size'> { }