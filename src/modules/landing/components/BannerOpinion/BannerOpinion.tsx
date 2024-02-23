import Image from "next/image"
import { BoxMessage, BoxMessageImg, BoxMessageText, TypographyText } from "./styled"

interface Props {
  urlImage: string
  name: string
  opinion: string
  position: number
}

export const BannerOpinion = (props: Props) => (
  <BoxMessage data-position={props.position}>
    <BoxMessageImg>{/* <img src={props.urlImage} alt='photo' /> */}</BoxMessageImg>
    <BoxMessageText>
      <TypographyText mb={1} fontWeight="fontWeightBold">
        {props.name}
      </TypographyText>
      <TypographyText fontWeight="inherit">{props.opinion}</TypographyText>
    </BoxMessageText>
  </BoxMessage>
)
