import { FC } from "react"
import { IBasicContainerProps } from "./types"
import { BackgroundComponent, ContainerStyleComponent, ImageBackground } from "./styles.tw"

export const BasicContainer: FC<IBasicContainerProps> = ({ children, backgroundComponent, imageBackground, }) => {
    return (
        <ContainerStyleComponent>
            <>
                {children}
                {backgroundComponent &&
                    <BackgroundComponent />
                }
                {imageBackground &&
                    <ImageBackground />
                }
            </>
        </ContainerStyleComponent>
    )
}