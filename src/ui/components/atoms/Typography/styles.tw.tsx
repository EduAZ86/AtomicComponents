'use client'
import { ITypographyProps } from "./types";
import { FC } from 'react'

export const MainTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor }) => {
    return (
        <h1
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center 
            text-3xl md:text-4xl  
            m-0
            font-roboto           
            ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`}         
            `
            }
        >
            {children}
        </h1>
    );
};

export const Title: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center 
            text-2xl md:text-3xl           
            font-roboto
            ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`}           
            `
            }
        >
            {children}
        </h2>
    );
};

export const SubTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-xl md:text-2xl 
             m-0 
            font-roboto 
            ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`}          
            `
            }
        >
            {children}
        </h2>
    );
};

export const CardTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor }) => {
    return (
        <h3
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-xl 
            font-roboto
            m-0
            ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`} 
            `}
        >
            {children}
        </h3>
    );
};


export const Paragraph: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textSize, textColor }) => {
    return (
        <p
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            ${textSize ? textSize : 'text-sm'}
            font-roboto
             m-0
             ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`}   
             `
            }
        >
            {children}
        </p>
    );
};

export const TextError: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor }) => {
    return (
        <span
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm font-roboto m-0
            ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`} 
            `}
        >
            {children}
        </span>
    );
};

export const TextButton: FC<ITypographyProps> = ({ align = 'text-left', children, textColor }) => {
    return (
        <span
            className={`
        md:${align} font-bold 
        text-sm font-roboto
        ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`} 
        `}
        >
            {children}
        </span>
    );
};

export const Label: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor }) => {
    return (
        <label
            className={`
        md:${align}  'font-light'
        text-sm font-roboto
        ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`} 
        cursor-pointer
        `}
        >
            {children}
        </label>
    );
};
export const AltText: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor }) => {
    return (
        <span
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center
            text-3xs 
            font-roboto 
             m-0 
             ${textColor && `text-light-${textColor.light} dark:text-dark-${textColor.dark}`}   
            `}
        >
            {children}
        </span>
    );
};