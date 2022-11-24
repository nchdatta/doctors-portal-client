import React from 'react';
import { useForm } from 'react-hook-form';
import baseUrl from '../../utilities/baseUrl';
import PageTitle from '../Shared/PageTitle';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { name, email, speciality, img } = data;
        const formData = new FormData();
        formData.append('image', img[0]);

        // Uploading image to imbb 
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const image = data.data.url;

                    // Adding doctor to database
                    fetch(baseUrl + '/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify({ name, email, speciality, image })
                    })
                        .then(res => {
                            if (res.status === 403) {
                                console.log('Doctor already registered.');
                            }
                            return res.json();
                        })
                        .then()
                }
            })


    };

    return (
        <div>
            <PageTitle title='Add a Doctor' />
            <h2 className='text-xl mb-3 text-primary'>Add a Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='lg:w-1/2'>
                <label htmlFor="name">Name</label>
                <input type='name' className='input input-bordered w-full mb-4'
                    {...register("name", { required: "Name is required" })}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p role="alert" className='text-error'>{errors.name?.message}</p>}
                <label htmlFor="email">Email</label>
                <input type='email' className='input input-bordered w-full mb-4'
                    {...register("email", { required: "Email is required" })}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}

                <label htmlFor="speciality">Speciality</label>
                <select className="select select-bordered w-full mb-4"
                    {...register("speciality", { required: true })}
                    aria-invalid={errors.speciality ? "true" : "false"}>
                    <option>Pediatric Dental</option>
                    <option>Teeth Orthodontics</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Cavity Protection</option>
                    <option>Teeth Cleaning</option>
                    <option>Oral Surgery</option>
                </select>
                {errors.speciality && <p role="alert" className='text-error'>{errors.speciality?.message}</p>}

                <input type="file" className="file-input file-input-bordered w-full "
                    {...register("img", { required: false })}
                    aria-invalid={errors.img ? "true" : "false"} />
                {errors.img && <p role="alert" className='text-error'>{errors.img?.message}</p>}

                <input type="submit" value='Add' className='btn btn-neutral w-full mt-4 mb-2' />
            </form>
        </div>
    );
};

export default AddDoctor;