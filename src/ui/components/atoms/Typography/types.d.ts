'use client'
import { IColorTheme } from '@/types/color.types';
import { CSSProperties, FC, PropsWithChildren } from 'react';

export interface ITypographyProps extends PropsWithChildren {
    variant: keyof TTypographyVariant;
    style?: CSSProperties;
    bold?: boolean;
    align?: 'text-center' | 'text-left' | 'text-right';
    textSize?: 'text-sm' | 'text-base' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' | 'text-7xl';
    textColor?: IColorTheme;
};

export type TTypographyVariant = {
    mainTitle: FC<ITypographyProps>;
    title: FC<ITypographyProps>;
    subTitle: FC<ITypographyProps>;
    cardTitle: FC<ITypographyProps>;
    altText: FC<ITypographyProps>;
    paragraph: FC<ITypographyProps>;
    error: FC<ITypographyProps>;
    textButton: FC<ITypographyProps>;
    label: FC<ITypographyProps>;
    price: FC<ITypographyProps>;
};