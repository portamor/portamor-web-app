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
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  height: `calc(100% - ${theme.spacing(4)})`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  "&[data-important]": {
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
})) as typeof Card;

export const BoxCircle = styled(Box)<BoxProps>(({ theme }) => ({
  aspectRatio: 1/1,
  height: "98%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "grid",
  placeContent: "center",
  zIndex: -1,
  background: theme.palette.custom.pinkF3,
  borderRadius: "50%",
})) as typeof Box;