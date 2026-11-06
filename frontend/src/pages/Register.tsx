
import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

 const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Registration details:', {
      ...formData,
      role: 'user',
    })
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f1f7f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 5,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
          }}
        >
          <Stack spacing={2}>
           <Typography
          variant="h4"
         sx={{
         fontWeight: 'bold',
         textAlign: 'center',
        color: '#173b45',
          }}
>
  Create Your Account
</Typography>

            <Typography sx={{ textAlign:'center', color:'text.secondary' }}>
              Join MedShare and help make medicines accessible.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    backgroundColor: '#26766e',
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '16px',
                    '&:hover': {
                      backgroundColor: '#173b45',
                    },
                  }}
                >
                  Create Account
                </Button>
              </Stack>
            </Box>

            <Typography sx={{ textAlign: 'center', color: 'text.secondary' }}>
              Already have an account?{' '}
              <Link component={RouterLink} to="/login" underline="hover">
                Login
              </Link>
            </Typography>

            <Typography sx={{ textAlign: 'center' }}>
              Registering as an Organization?{' '}
              <Link component={RouterLink} to="/register-ngo" underline="hover">
                Organization Registration
              </Link>
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default Register
