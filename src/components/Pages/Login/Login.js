import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';




const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
       
    };
    return (
        <div className="flex justify-center items-center  h-[800px]">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4 text-center">Login</h2>

                <div className="mb-4 w-96">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <div className="relative">
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Password is required',pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            , message: 'Password must be strong'} })}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.password ? 'border-red-500' : ''}`}
                        />
                        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                        <label className="label"> <span className="label-text  hover:text-blue-600">Forget Password?</span></label>
                    </div>
                </div>

                <div className='text-center w-96'>  <button type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-96">Login</button></div>
                <p className="text-center">
                   Are you New to us <Link to="/signup" className="text-blue-500 hover:text-blue-600">Create New One</Link>
                </p>
                
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </form>
            
        </div>
    );
};

export default Login;