import { FC } from "react"
import { IBasicContainerProps } from "./types"
import { BackgroundComponent, ContainerStyleComponent, ImageBackground } from "./styles.tw"

export const BasicContainer: FC<IBasicContainerProps> = ({
    children,
    backgroundComponent,
    imageBackground,
    ...moreProps
}) => {
    return (
        <ContainerStyleComponent
            {...moreProps}
        >
            <>
                {children}
                {backgroundComponent &&
                    <BackgroundComponent
                        {...backgroundComponent}
                    />
                }
                {imageBackground &&
                    <ImageBackground
                        {...imageBackground}
                    />
                }
            </>
        </ContainerStyleComponent>
    )
}