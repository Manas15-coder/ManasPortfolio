import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section id='projects'>
                <div className='container'>
                    <div className='row'>
                        <div className='slider'>
                            <h4 className='display-4' style={{ textAlign: 'center',color:'#ffff',fontWeight:'bold' }}>Projects</h4>
                            <Slider {...settings}>
                            <div>
                                    <a href="https://resilient-manatee-cbdf5e.netlify.app/">
                                        <img src="https://i.postimg.cc/jSgkfjDd/Screenshot-2023-10-29-201838.png" className="img-fluid" alt="" />

                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Smart Watch Landing Page</h3>
                                </div>
                                <div>
                                    <a href="https://jovial-kulfi-4a889a.netlify.app/">
                                        <img src="https://i.postimg.cc/1tm2nhKW/Screenshot-2023-10-31-204623.png" className="img-fluid" alt="" />

                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Qr Code Generator</h3>
                                </div>
                                <div>
                                    <a href="https://precious-starlight-18c761.netlify.app/">
                                        <img src="https://i.postimg.cc/KYxctQx8/Screenshot-2023-11-09-204545.png" className="project project img-fluid" alt="" />
                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>CryptoZone : Cyrptocurrency Price Tracker</h3>
                                </div>
                                <div>
                                    <a href="https://mellow-phoenix-6932ba.netlify.app/">
                                        <img src="https://i.postimg.cc/Kc3Kyz85/countryapi.png" className="project img-fluid" alt="" />
                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Explore The World !</h3>
                                </div>
                                <div>
                                    <a href="https://cvip-todolist.vercel.app/">
                                        <img src="https://i.postimg.cc/bY2DT17W/todo.png" className="img-fluid" alt="" />

                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Task Manager Using React.Js and Material UI</h3>
                                </div>
                                <div>
                                    <a href="https://regal-dango-eb43f3.netlify.app/">
                                        <img src="https://i.postimg.cc/YSw-q6zF7/Screenshot-2023-10-11-191337.png" className="img-fluid" alt="" />

                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Blog App Using MERN Stack</h3>
                                </div>
                                <div>
                                    <a href="https://flourishing-bublanina-f566ea.netlify.app/">
                                        <img src="https://i.postimg.cc/2SGyxL0C/jobportal.png" className="img-fluid" alt="" />

                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Job Aspire: MERN Stack Job Portal</h3>
                                </div>
                                <div>
                                    <a href="https://attracthr-l6vw.vercel.app/">
                                        <img src="https://i.postimg.cc/8kqWQZdT/attract.png" className="img-fluid" alt="" />
                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Attract HR: AI Tools for HR</h3>
                                </div>
                                <div>
                                    <a href="https://online-html-css-js-editor.netlify.app/">
                                        <img src="https://i.postimg.cc/mrXzdj2f/editor.png" className="project img-fluid" alt="" />
                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Online Code Editor</h3>
                                </div>
                                <div>
                                    <a href="https://temp-convert-online.netlify.app/">
                                        <img src="https://i.postimg.cc/1zjP57pg/Screenshot-2023-11-09-220303.png" className="project img-fluid" alt="" />
                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Online Code Editor</h3>
                                </div>
                                <div>
                                    <a href="https://startling-blini-b12e3e.netlify.app/">
                                        <img src="https://i.postimg.cc/3JYM7QPS/Screenshot-2023-11-09-220443.png" className="project img-fluid" alt="" />
                                    </a>
                                    <h3 style={{ textAlign: 'center' }}>Online Code Editor</h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
