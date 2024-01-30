import { Box, BoxProps, styled } from "@mui/material";

export const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '674px',
  background: theme.palette.custom.pinkF3,
  position: 'absolute',
  top: '-33px',
  transform: 'translate(108%)'
})) as typeof Box;