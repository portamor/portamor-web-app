import { Box, Button, Typography, Card, TextField } from "@mui/material";

export const FormRegister = () => {
  return (
    <Box mt={5}>
      <Typography
        variant='h4'
        component='h2'
        fontWeight={(theme) => theme.typography.fontWeightBold}
        textAlign='center'
        mb={5}
      >
        Regístrate
      </Typography>
      <Card
        elevation={0}
        sx={{
          maxWidth: 635,
          margin: "0 auto",
          background: (theme) => theme.palette.custom.greyF4,
        }}
      >
        <Box
          component='form'
          noValidate
          autoComplete='off'
          sx={{
            padding: 3,
            "& .MuiTextField-root": { m: 1 },
          }}
        >
          <Box display='flex'>
            <TextField id='txtName' label='Nombres' />
            <TextField id='txtSurname' label='Apellidos' />
          </Box>
          <Box display='flex'>
            <TextField id='txtBirthday' label='Fecha de cumpleaños' />
            <TextField id='txtCellphone' label='Celular' />
          </Box>
          <Box textAlign='center' mt={2}>
            <Button size='large' variant='contained'>
              Continuar
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
