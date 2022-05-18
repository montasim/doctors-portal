import React from 'react';
import footer from '../Assets/images/footer.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div style={{ backgroundImage: `url(${footer})` }} class="footer footer-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center">
                <div>
                    <h4 class="footer-title">Services</h4>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <h4 class="footer-title">Oral Health</h4>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <h4 class="footer-title">Our Address</h4>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <div class="footer footer-center p-4 text-base-content mt-10">
                <div>
                    <p>Copyright &copy; {year} - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;