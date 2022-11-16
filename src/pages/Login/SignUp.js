import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='lg:w-1/4 px-4 lg:px-0 mx-auto min-h-screen flex items-center'>
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="card-title justify-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Name</label>
                        <input type='name' className='input input-bordered w-full'
                            {...register("name", { required: "Email Address is required" })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && <p role="alert" className='text-error'>{errors.name?.message}</p>}
                        <label htmlFor="email">Email</label>
                        <input type='email' className='input input-bordered w-full'
                            {...register("email", { required: "Email is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                        <label htmlFor="password">Password</label>
                        <input type='password' className='input input-bordered w-full'
                            {...register("password", { required: true, minLength: 6 })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password?.type === 'required' && <p role="alert" className='text-error'>Password is required</p>}
                        <label><Link>Forgot Password?</Link></label>
                        <input type="submit" value='SignUp' className='btn btn-neutral w-full mt-4 mb-2' />

                        <label htmlFor="">Already registered? <Link to='/login' className='text-primary'>Login now</Link> </label>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;