import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import auth from '../../utilities/firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
        // navigate(from, { replace: true });
    };

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='lg:w-2/6 px-4 lg:px-0 mx-auto min-h-screen flex items-center'>
            <div className="card shadow-lg border">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email</label>
                        <input type='email' className='input input-bordered w-full'
                            {...register("email", { required: "Email is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                        <label htmlFor="password">Password</label>
                        <input type='password' className='input input-bordered w-full'
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password?.type === 'required' && <p role="alert" className='text-error'>Password is required</p>}

                        <Link to='/forgot-password' className='text-secondary'>Forgot Password?</Link>

                        {loading || gLoading
                            ? <Loading />
                            : <input type="submit" value='Login' className='btn btn-neutral w-full mt-4 mb-2' />}

                        <label htmlFor="">New to Doctors Portal? <Link to='/signup' className='text-primary'>Create new account</Link> </label>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full"
                        onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;