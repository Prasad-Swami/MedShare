import { useForm } from "react-hook-form"
import MedShareLogo from "../images/MedShareLogo.png"
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";

interface ILoginForm {
    email: string;
    password: string;
}

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ILoginForm>();

    const onSubmit = async (data: ILoginForm) => {
        try {
            console.log("Login Data:", data);
            //call backend api
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (

        <Container
            sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
        >
            <Paper
                sx={{
                    padding:5,
                    mt:8
                }}
            >
                <img
                    src={MedShareLogo}
                    style={{
                        width:"150px",
                        display:"block",
                        margin:"auto"
                        
                    }}

                    
                />
                {/* <Typography variant="h4" align="center">
                    MedShare Login
                </Typography> */}

                <Box
                    
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems: "center"
                    }}
                >
                    <TextField
                        label="Email"
                        type="email"
                        sx={{width:"350px"}}
                        margin="normal"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email"
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        sx={{width:"350px"}}
                        margin="normal"
                        {...register("password", {
                            required: "Password is required"
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        sx={{
                            width:"350px",
                            mt: 2,
                            backgroundColor:"#1B5E20"
                        }}
                        
                    >
                        {isSubmitting ? "Loggin in..." : "Login"}
                    </Button>

                    
                </Box>

                <Typography align="center">
                    Didn't created account yet? Sign Up here
                    {/* Register Link her */}
                </Typography>
            </Paper>
        </Container>
        
    );


}

export default LoginForm;

