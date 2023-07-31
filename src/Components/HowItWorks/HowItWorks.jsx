import React from 'react'
import businessImage from '../../Assets/business.jpg'
import applicationsImage from '../../Assets/applications.jpg'
import companiesFindImage from '../../Assets/companies-find.jpg'
import acceptJobImage from '../../Assets/accept-job.webp'
import createProfileImage from '../../Assets/create-profile.jpg'

const HowItWorks = () => {
    return (
        <section className='primary-section'>
            <h3 className='color-main fw-bold text-center mb-5'>HOW IT WORKS</h3>

            <div className='d-flex justify-content-between' style={{ gap: 50 }}>
                <div className='flex-grow-1'>
                    <h4 className='color-secondary fw-bold mb-3'>For employers</h4>

                    <div className='d-flex steps-container'>
                        <img src={businessImage} alt='' width={75} height={75} className='me-3 rounded-circle how-it-works-images'></img>
                        <div>
                            <h5 className='color-secondary mb-1'>Step 1: Register with us as a recruiter</h5>
                            <div className='fs-small'>Tell us about your business needs for hiring people like type of business, mode of recruiting people, any certain study fields filter or anything necessary.</div>
                        </div>
                    </div>

                    <div className='d-flex steps-container my-5'>
                        <img src={companiesFindImage} alt='' width={75} height={75} className='me-3 rounded-circle how-it-works-images'></img>
                        <div>
                            <h5 className='color-secondary mb-1'>Step 2: Find people meeting your requirements</h5>
                            <div className='fs-small'>Find candidates best suitable for your business needs through our well designed job seekers portal.</div>
                        </div>
                    </div>

                    <div className='d-flex steps-container'>
                        <img src={acceptJobImage} alt='' width={75} height={75} className='me-3 rounded-circle how-it-works-images'></img>
                        <div>
                            <h5 className='color-secondary mb-1'>Step 3: Filter out the best candidate</h5>
                            <div className='fs-small'>Filter the best candidate out of the applications and get the best employee for your business needs instantly.</div>
                        </div>
                    </div>
                </div>

                <div className='flex-grow-1'>
                    <h4 className='color-secondary fw-bold mb-3'>For seekers</h4>

                    <div className='d-flex steps-container'>
                        <img src={createProfileImage} alt='' width={75} height={75} className='me-3 rounded-circle how-it-works-images'></img>
                        <div>
                            <h5 className='color-secondary mb-1'>Step 1: Register with us as job seeker</h5>
                            <div className='fs-small'>Create a complete profile for yourself so as to get noticed by top companies. Add necessary information like education, experience, skills to get hired immediately.</div>
                        </div>
                    </div>

                    <div className='d-flex steps-container my-5'>
                        <img src={applicationsImage} alt='' width={75} height={75} className='me-3 rounded-circle how-it-works-images'></img>
                        <div>
                            <h5 className='color-secondary mb-1'>Step 2: Get job applications from many recruiters</h5>
                            <div className='fs-small'>Get multiple job offers from top companies after completing the profile and decide to which job you wamt to proceed further.</div>
                        </div>
                    </div>

                    <div className='d-flex steps-container'>
                        <img src={acceptJobImage} alt='' width={75} height={75} className='me-3 rounded-circle how-it-works-images'></img>
                        <div>
                            <h5 className='color-secondary mb-1'>Step 3: Accept out the best job</h5>
                            <div className='fs-small'>Compare the jobs, filter out accept the best one.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks