import {
  Box,
  BoxProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

export const BoxMessage = styled(Box)<BoxProps>(({ theme }) => ({
  width: 280,
  padding: 12,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  "&[data-position='1']": {
    right: 0,
    top: 70,
    zIndex: -1,
  },
  "&[data-position='2']": {
    right: 374,
    bottom: -82,
  },
  borderRadius: 8
})) as typeof Box;

export const BoxMessageImg = styled(Box)<BoxProps>(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: "50%",
  overflow: "hidden"
})) as typeof Box;

export const BoxMessageText = styled(Box)<BoxProps>(({ theme }) => ({
  width: "calc(100% - 60px)",
  fontSize: "0.5rem",
  fontWeight: theme.typography.fontWeightMedium,
})) as typeof Box;

export const TypographyText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    display: "inline-block",
    padding: "2px 8px",
    fontSize: "inherit",
    background: theme.palette.custom.greyF4,
    borderRadius: 8
  })
) as typeof Typography;
