import { Tabs, TabsProps, styled } from "@mui/material";

export const ProgramsTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  ".MuiTabs-flexContainer": {
    justifyContent: 'center'
  }
})) as typeof Tabs;
