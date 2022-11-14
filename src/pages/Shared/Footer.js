import React from 'react';

const Footer = () => {
    return (
        <footer className='px-4 lg:px-12 py-12'>
            <section class="footer text-neutral pb-10">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">Oral Health</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">Our Address</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                </div>
            </section>
            <section className="footer footer-center p-4 text-neutral">
                <div>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;