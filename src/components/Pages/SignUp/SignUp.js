import { useForm, Watch } from 'react-hook-form';


// import { Link } from 'react-router-dom';




const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    

    const handleSignUp = (data) => {
        console.log(data);
        
    };


    return (
        <div className="flex justify-center items-center  h-[800px]">
            <form onSubmit={handleSubmit(handleSignUp)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4 text-center">Sign Up</h2>

                <div className="mb-2">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters long',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Name must not exceed 20 characters',
                            },
                        })}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.name ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.name && (
                        <p className="text-red-500 mt-1">{errors.name.message}</p>
                    )}
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.email ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: 'Password must be at least 8 characters long and contain at least one letter and one number',
                            },
                        })}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.password ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.password && (
                        <p className="text-red-500 mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: (value) => value === getValues('password') || 'Passwords do not match'
                        })}
                        className={`w-full px-2 py-2 border border-gray-300 rounded-lg ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    />
                    {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
                </div>


                <div className='text-center w-96'>  <button type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-96">SignUP</button></div>
                    

                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </form>

        </div>
    );
};

export default SignUp;