import {
  Box,
  BoxProps,
  Card,
  CardProps,
  styled,
} from "@mui/material";

export const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "140px",
  background: "rgb(236 225 225 / 30%)",
  top: 0,
  zIndex: 0,
})) as typeof Box;

export const CardItem = styled(Card)<CardProps>(({ theme }) => ({
  position: "relative",
  boxShadow: theme.shadows[2],
  borderRadius: "20px",
  "&[data-position='1'], &[data-position='3']": {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: `calc(100% - ${theme.spacing(4)})`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "&[data-position='2']": {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
})) as typeof Card;

export const BoxCircle = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  width: "630px",
  height: "630px",
  background: "#F39F9F",
  borderRadius: "50%",
  left: "50%",
  top: "52%",
  transform: "translate(-50%, -50%)",
})) as typeof Box;