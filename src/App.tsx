import { Button, TextField, Box, styled, TextFieldProps } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormValues {
  password: string,
  password_confirm: string
}

const StyledInput = styled(TextField)<TextFieldProps>(() => ({
  marginBottom: '20px'
}))


const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "At least 6 chars")
    .matches(/.*[A-Z].*/, "At least 1 uppercase char")
    .matches(/.*[a-z].*/, "At least 1 lowercase char")
    .matches(/.*[0-9].*/, "At least 1 number")
    .matches(/.*[!@\#\$%\^&\*\(\)_\-\+\=\{\[\}\]\|\:\;\"\'\<\,\>\.].*/, "At least one special char")
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "At least 1 number or special char (@,!,#, etc)."
    ),
  password_confirm: yup
    .string()
    .required("Password is required.")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

function App() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      password: '',
      password_confirm: ''
    }
  });

  const onSubmit = async () => {
    try {
      alert("Password validation Success!");
    } catch (e: any) {
      console.error(e)
    }
  }


  return (
    <Box
      sx={{
        mt: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: "500px"
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: 'column' }}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <StyledInput
              id="password"
              label="Password"
              type="password"
              helperText={errors.password?.message}
              error={!!errors.password}
              {...field}
            />
          )}
        />
        <Controller
          name="password_confirm"
          control={control}
          render={({ field }) => (
            <StyledInput
              id="password_confirm"
              label="Confirm Password"
              type="password"
              helperText={errors.password_confirm?.message}
              error={!!errors.password_confirm}
              {...field}
            />
          )}
        />
        <Button sx={{ mt: 2 }} type='submit' variant='contained'>Submit</Button>
      </form>
    </Box>
  )
}

export default App
