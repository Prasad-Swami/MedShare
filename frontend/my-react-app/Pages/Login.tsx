import {useForm} from "react-hook-form"

interface ILoginForm{
    email: string;
    password: string;
}

function Login(){
    const{
        register,
        handleSubmit,
        formState:{errors, isSubmitting}
    } = useForm<ILoginForm>();

    const onSubmit = async (data: ILoginForm) => {
        try{
            console.log("Login Data:", data);
            //call backend api
        }catch(error){
            console.error("Login failed:", error);
        }
    };

    return(
        <div className="login-conatainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>MedShare Login</h2>
                
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        {...register("email",{
                            required: "Email is required",
                            pattern: {
                                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email"
                            }
                        })}
                    />

                    {errors.email && (
                        <p className="error">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required:"Password is required",
                            pattern:{
                                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Password must be at least 8 characters"

                            }      
                        })}
                    />

                    {errors.password && (
                        <p className="error">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Loggin in..." : "Login"}
                </button>
            </form>
        </div>
    );


}

export default Login;

