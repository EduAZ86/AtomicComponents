export type TColors =
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'background'
    | 'acent'
    | 'complementary';

export type TDimension =
    | '8'
    | '12'
    | '16'
    | '24'
    | '32'
    | '40'
    | '48'
    | '56'
    | '64'
    | '96'
    | 'auto'
    | 'screen'
    | 'full'
    | 'min-content'
    | 'max-content'
    | 'fit-content'
    | '1/2'
    | '1/3'
    | '2/3'
    | '1/4'
    | '3/4'
    | '3/5'
    | '1/6'
    | '5/6'
    | '11/12';

type PrefixW<T extends string> = `w-${T}`;

type PrefixH<T extends string> = `h-${T}`;

export type TWidth = PrefixW<TDimension>;

export type THeight = PrefixW<TDimension>;

export type TGap =
    | '0'
    | '1'
    | '2'
    | '4'
    | '6'
    | 'x-0'
    | 'x-1'
    | 'x-2'
    | 'x-4'
    | 'y-6'
    | 'y-0'
    | 'y-1'
    | 'y-2'
    | 'y-4'
    | 'y-6';

export type TSpace =
    | TGap
    | 'l-0'
    | 'l-1'
    | 'l-2'
    | 'l-4'
    | 'l-6'
    | 'r-0'
    | 'r-1'
    | 'r-2'
    | 'r-4'
    | 'r-6'
    | 't-0'
    | 't-1'
    | 't-2'
    | 't-4'
    | 't-6'
    | 'b-0'
    | 'b-1'
    | 'b-2'
    | 'b-4'
    | 'b-6';

export type TJustify =
    | 'justify-center'
    | 'justify-start'
    | 'justify-end'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly';

export type TAlign =
    | 'items-center'
    | 'items-start'
    | 'items-end'
    | 'items-baseline'
    | 'items-stretch';

export type TOverflow =
    | 'overflow-auto'
    | 'overflow-hidden'
    | 'overflow-clip'
    | 'overflow-visible'
    | 'overflow-scroll'
    | 'overflow-x-auto'
    | 'overflow-y-auto'
    | 'overflow-x-hidden'
    | 'overflow-x'
    | 'overflow-y-hidden';

export type TBorder =
    | 'border-solid'
    | 'border-none';

export type TCursor =
    | 'cursor-auto'
    | 'cursor-pointer'
    | 'cursor-wait'
    | 'cursor-text'
    | 'cursor-move';

export type TPosition =
    | 'absolute'
    | 'relative'
    | 'fixed';

export type TDirection =
    | 'flex-row'
    | 'flex-col'
    | 'flex-row-reverse';

export type TFontSize =
    | 'text-8xl'
    | 'text-6xl'
    | 'text-4xl'
    | 'text-2xl'
    | 'text-base'
    | 'text-sm';

export type TOpacity =
    | 'opacity-0'
    | 'opacity-25'
    | 'opacity-50'
    | 'opacity-75'
    | 'opacity-100';

export type TZIndex =
    | 'z-0'
    | 'z-10'
    | 'z-20'
    | 'z-30'
    | 'z-40'
    | 'z-50'
    | 'z-auto';

export type TDisplay =
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'grid'
    | 'table'
    | 'table-row'
    | 'table-cell'
    | 'hidden';