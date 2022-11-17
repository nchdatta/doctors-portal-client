import React from 'react';

const Service = ({ service }) => {
    const { img, title, subTitle } = service;

    return (
        <div className="card bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-neutral">
                <h2 className="card-title">{title}</h2>
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default Service;