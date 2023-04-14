import React, { useContext, useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../authentication/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { TabTitle } from '../../../utilities/FunctionTitle';




const Login = () => {
  const location = useLocation();
    const navigate = useNavigate();

    const { from } = location.state || { from: { pathname: "/" } };

    navigate(from);

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    const { userSignIn, currentUser } = useContext(AuthContext);
     const { userSignInWithGoogle } = useContext(AuthContext);
     const [loginError,setLoginError] =useState('')

     useEffect(() => {
      if (currentUser) {
        reset(); // Call reset method here to clear input fields
      }
    }, [currentUser, reset]);
      
              //sign in with email and password
      const onSubmit = (data) => {
        setLoginError('')
        console.log(data);
        userSignIn(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log('User signed in:', user);
            // showCustomToast('Message sent successfully.', 'success');
          })
          .catch((error) => {
            console.error('Error during sign in:', error.message);
            setLoginError(error.message)
           alert(`Wrong Password try again please: ${error.message}`, 'info');
          });
      };

                    // Google Sign In
      const handleSignInWithGoogle = () => {
        userSignInWithGoogle()
          .then((result) => {
            console.log('Signed in with Google:', result);
            navigate(from);
          })
          .catch((error) => {
            console.error('Error signing in with Google:', error);
          });
      };
      TabTitle('Login|Logout');
    return (
        <div className="flex justify-center items-center p-16  h-[1000px]">
          <div className=''>
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
                            {...register('password', { required: 'Password is required'
                            , message: 'Password must be strong' })}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.password ? 'border-red-500' : ''}`}
                        />
                        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                        <label className="label"> <span className="label-text  hover:text-blue-600">Forget Password?</span></label>
                    </div>
                </div>

                <div className='text-center w-96'>  <button type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-96">Login</button></div>
                <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                 </div>
                <p className="text-center">
                   Are you New to us <Link to="/signup" className="text-blue-500 hover:text-blue-600">Create New One</Link>
                </p>
                
                
            </form>
            <div>
            <div className="divider">OR</div>
                <button  onClick={handleSignInWithGoogle} className='btn btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
          </div>
            
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Login;