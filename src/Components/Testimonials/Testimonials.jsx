import React from 'react'
import person1Image from '../../Assets/People/person1.jpg'
import person2Image from '../../Assets/People/person2.jpg'
import person3Image from '../../Assets/People/person3.jpg'
import person4Image from '../../Assets/People/person4.jpg'

const Testimonials = () => {
    return (
        <section className='testimonial-section' style={{ margin: '0 20rem', borderRadius: 20, padding: '5rem 0' }}>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <h4 className='color-main fw-bold text-center mb-5'>WHAT OUR USERS HAVE TO SAY ABOUT US</h4>

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-main" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='bg-main'></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='bg-main'></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className='bg-main'></button>
                </div>
                <div className="carousel-inner" style={{ borderRadius: 10 }}>
                    <div className="carousel-item active bg-light">
                        <div className='d-flex px-4 py-4 caraousel-d-block' style={{ gap: 50 }}>
                            <div>
                                <img src={person1Image} className="rounded-circle people-images" alt="..." width={200} height={200} />
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <h5 className='fw-bolder color-main mb-0'>Alex Carey</h5>
                                    <div style={{ color: 'GrayText' }}>Lorem ipsum dolor sit amet consectetur.</div>
                                </div>

                                <div className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nulla delectus, sunt veritatis ducimus quos aspernatur est soluta natus fugit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptas fugiat porro asperiores accusantium illum explicabo sit iure adipisci odit ducimus eius amet, tenetur dignissimos, assumenda nihil quasi eligendi placeat totam quia corporis itaque. Tenetur voluptates dicta quasi laboriosam, voluptate debitis. Recusandae placeat minima nesciunt id quaerat repellat perferendis dolores?</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item bg-light">
                        <div className='d-flex px-4 py-4 caraousel-d-block' style={{ gap: 50 }}>
                            <div>
                                <img src={person2Image} className="rounded-circle people-images" alt="..." width={200} height={200} />
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <h5 className='fw-bolder color-main mb-0'>John Doe</h5>
                                    <div style={{ color: 'GrayText' }}>Lorem ipsum dolor sit amet consectetur.</div>
                                </div>

                                <div className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nulla delectus, sunt veritatis ducimus quos aspernatur est soluta natus fugit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptas fugiat porro asperiores accusantium illum explicabo sit iure adipisci odit ducimus eius amet, tenetur dignissimos, assumenda nihil quasi eligendi placeat totam quia corporis itaque. Tenetur voluptates dicta quasi laboriosam, voluptate debitis. Recusandae placeat minima nesciunt id quaerat repellat perferendis dolores?</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item bg-light">
                        <div className='d-flex px-4 py-4 caraousel-d-block' style={{ gap: 50 }}>
                            <div>
                                <img src={person3Image} className="rounded-circle people-images" alt="..." width={200} height={200} />
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <h5 className='fw-bolder color-main mb-0'>Michael Smith</h5>
                                    <div style={{ color: 'GrayText' }}>Lorem ipsum dolor sit amet consectetur.</div>
                                </div>

                                <div className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nulla delectus, sunt veritatis ducimus quos aspernatur est soluta natus fugit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptas fugiat porro asperiores accusantium illum explicabo sit iure adipisci odit ducimus eius amet, tenetur dignissimos, assumenda nihil quasi eligendi placeat totam quia corporis itaque. Tenetur voluptates dicta quasi laboriosam, voluptate debitis. Recusandae placeat minima nesciunt id quaerat repellat perferendis dolores?</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item bg-light">
                        <div className='d-flex px-4 py-4 caraousel-d-block' style={{ gap: 50 }}>
                            <div>
                                <img src={person4Image} className="rounded-circle people-images" alt="..." width={200} height={200} />
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <h5 className='fw-bolder color-main mb-0'>Emma Stone</h5>
                                    <div style={{ color: 'GrayText' }}>Lorem ipsum dolor sit amet consectetur.</div>
                                </div>

                                <div className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nulla delectus, sunt veritatis ducimus quos aspernatur est soluta natus fugit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptas fugiat porro asperiores accusantium illum explicabo sit iure adipisci odit ducimus eius amet, tenetur dignissimos, assumenda nihil quasi eligendi placeat totam quia corporis itaque. Tenetur voluptates dicta quasi laboriosam, voluptate debitis. Recusandae placeat minima nesciunt id quaerat repellat perferendis dolores?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials