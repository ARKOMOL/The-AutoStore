import React from 'react';


const Footer = () => {
    return (
        <footer  className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Parts</span>
                    <a className="link link-hover">Engine</a>
                    <a className="link link-hover">Gearbox</a>
                    <a className="link link-hover">Front Glass</a>
                    <a className="link link-hover">Seat</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved By The AutoStore</p>
            </div>
        </footer>
    );
};

export default Footer;