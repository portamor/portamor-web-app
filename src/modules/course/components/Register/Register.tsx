import { Box, Button, Typography, Card, TextField, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Validations } from "@src/modules/shared/validation";

yup.setLocale({
  mixed: {
    required: "Campo requerido",
  },
});

const schema = yup.object({
  name: yup
    .string()
    .required()
    .test("format", "Campo inválido", (value) =>
      Validations.alphanumeric(value)
    ),
  surname: yup
    .string()
    .required()
    .test("format", "Campo inválido", (value) =>
      Validations.alphanumeric(value)
    ),
  birthday: yup.string().required(),
  cellphone: yup
    .string()
    .required()
    .test("format", "Campo inválido", (value) => Validations.number(value)),
});

interface FormValues {
  name: string;
  surname: string;
  birthday: string;
  cellphone: string;
}

const FormRegister = ({ handleSkip }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
    handleSkip();
  };

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
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id='txtName'
                label='Nombres'
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
                margin='none'
                {...register("name")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='txtSurname'
                label='Apellidos'
                error={Boolean(errors.surname)}
                helperText={errors.surname?.message}
                margin='none'
                {...register("surname")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='txtBirthday'
                label='Fecha de cumpleaños'
                error={Boolean(errors.birthday)}
                helperText={errors.birthday?.message}
                margin='none'
                {...register("birthday")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='txtCellphone'
                label='Celular'
                type='number'
                error={Boolean(errors.cellphone)}
                helperText={errors.cellphone?.message}
                margin='none'
                {...register("cellphone")}
              />
            </Grid>
          </Grid>
          <Box textAlign='center' mt={2}>
            <Button size='large' variant='contained' type='submit'>
              Continuar
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default FormRegister;