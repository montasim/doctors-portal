import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import auth from '../../Hooks/Firebase.Init';

const Signup = () => {
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        updateProfile,
        updating,
        updateError
    ] = useUpdateProfile(auth);
    const [
        sendEmailVerification,
        sending,
        sendError
    ] = useSendEmailVerification(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    if (googleLoading || emailLoading || updating || sending) {
        return <Loading loadingColor={'progress-accent'} />;
    }
    if (googleUser || emailUser) {
        toast(`Welcome ${googleUser?.email || emailUser?.email}`);
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile(data?.name);
        await sendEmailVerification();
        await toast(`Email verification send to ${data?.email}`);
        navigate('/appointment');
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <p className='text-center text-red-500 mb-4'>{emailError?.message.slice(10) || ''}</p>
                        <p className='text-center text-red-500 mb-4'>{sendError || ''}</p>
                        <p className='text-center text-red-500 mb-4'>{updateError?.message || ''}</p>

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Register" />

                        <p className='mt-3 text-center'><small>Forgot password? <Link className='text-secondary' to='/reset-password'>Reset Password</Link></small></p>

                        <p className='mt-3 text-center'><small>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></small></p>
                    </form>

                    <div className='divider'>OR</div>

                    <p className='text-center text-red-500 mb-3'>{googleError ? googleError?.message.slice(10) : ''}</p>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;