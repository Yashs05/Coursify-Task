import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='bg-main text-white'>
            <div className='d-flex flex-wrap justify-content-center footer-main' style={{ gap: 125, padding: '5rem 0' }}>
                <div className='footer-items'>
                    <h6 className='color-light'>Jobs by loaction</h6>

                    <ul className='list-unstyled fs-xs'>
                        <li className='footer-list-items my-2'><a href='/'>Jobs in Bangalore</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Jobs in Delhi/NCR</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Jobs in Mumbai</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Jobs in Hyderabad</a></li>
                    </ul>
                </div>

                <div className='footer-items'>
                    <h6 className='color-light'>Jobs by functions</h6>

                    <ul className='list-unstyled fs-xs'>
                        <li className='footer-list-items my-2'><a href='/'>Software engeering jobs</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Product management jobs</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Data science jobs</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Marketing jobs</a></li>
                    </ul>
                </div>

                <div className='footer-items'>
                    <h6 className='color-light'>For employers</h6>

                    <ul className='list-unstyled fs-xs'>
                        <li className='footer-list-items my-2'><a href='/'>Post your jobs</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Employers FAQ</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Business resources</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Pricing</a></li>
                    </ul>
                </div>

                <div className='footer-items'>
                    <h6 className='color-light'>About Us</h6>

                    <ul className='list-unstyled fs-xs'>
                        <li className='footer-list-items my-2'><a href='/'>What are we?</a></li>
                        <li className='footer-list-items my-2'><a href='/'>How we started?</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Privacy policy</a></li>
                        <li className='footer-list-items my-2'><a href='/'>Careers</a></li>
                    </ul>
                </div>
            </div>

            <div className='text-center bg-secondary fs-xs'>2023 @ Coursify. All rights reserved.</div>
        </footer>
    )
}

export default Footer