import React, { useState } from 'react';
import { Stack, Typography, Container, Button, InputLabel, InputAdornment, Link, FormControl, OutlinedInput, IconButton} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import icon_logo from "../assets/icon_logo.png"
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <form>
            <Stack spacing={3}>
                <Stack spacing={1.5} direction="column">
                    <FormControl variant="outlined">
                        <InputLabel >Email</InputLabel>
                        <OutlinedInput
                            type='text'
                            label="Email"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel >Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                </Stack>

                <Button fullWidth color="secondary" size="large" type="submit" variant="contained">Login</Button>
            </Stack>
        </form>
    )
}

export default function SignIn() {
    // create state variables for each input

    return (
        <Container sx={{ mt: 5, }} maxWidth="sm" >
            <Stack spacing={5}  >
                <Stack sx={{ width: "100%" }} direction="column" alignItems="center">
                    <img style={{ height: 100, width: 100 }} src={icon_logo} alt="Logo" />
                </Stack>
                <Stack spacing={2} sx={{ mb: 5, position: "relative" }} >
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4">
                        Sign in to FairExchange
                    </Typography>
                    <Stack direction="row" spacing={0.5}>
                        <Typography variant="body2">New user?</Typography>
                        <Link variant="subtitle2">Create an account</Link>
                    </Stack>
                    <LoginForm />
                </Stack>
            </Stack>



        </Container>
    );
}