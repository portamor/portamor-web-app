import { Box, Button, Typography, Card, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

yup.setLocale({
  mixed: {
    required: "Campo requerido",
  },
})

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  repeatPassword: yup.string().required(),
})

interface FormValues {
  username: string
  password: string
  repeatPassword: string
}

const LoginForm = ({ repeatPasswordOption = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    if (data.password !== data.repeatPassword) {
      // Passwords do not match, handle the error
      console.log("Passwords do not match")
    } else {
      // Passwords match, proceed with login logic
      console.log(data)
    }
  }

  return (
    <Box mt={5}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight={theme => theme.typography.fontWeightBold}
        textAlign="center"
        mb={5}
      >
        Login - Portamor
      </Typography>
      <Card
        elevation={0}
        sx={{
          maxWidth: 400,
          margin: "0 auto",
          background: theme => theme.palette.custom.greyF4,
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            padding: 3,
            "& .MuiTextField-root": { m: 1 },
          }}
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <TextField
            id="txtUsername"
            label="usuario"
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            margin="none"
            {...register("username")}
          />
          <TextField
            id="txtPassword"
            label="Contraseña"
            type="password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            margin="none"
            {...register("password")}
          />

          {repeatPasswordOption && (
            <TextField
              id="txtRepeatPassword"
              label="Repetir contraseña"
              type="password"
              error={Boolean(errors.repeatPassword)}
              helperText={errors.repeatPassword?.message}
              margin="none"
              {...register("repeatPassword")}
            />
          )}

          <Box textAlign="center" mt={2}>
            <Button size="large" variant="contained" type="submit">
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default LoginForm
