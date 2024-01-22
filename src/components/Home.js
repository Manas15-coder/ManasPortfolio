import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Home() {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-md-12'>
                    {/*Banner*/}
                    <section id="about">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5">

                                    <img src="https://i.postimg.cc/FKgcsq5x/image-be5326e1d9b93f285348.png"
                                        className="image"
                                        alt=""
                                    />

                                </div>
                                <div className="col-md-7">
                                    <h4 className="desc-text">HI THERE <img src='https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png' className='wave' /> I'M</h4>
                                    <h1 className="heading">Manas</h1><br />
                                    <h2 >🚀 Full-stack Web Developer + Google Cloud Digital Leader</h2><br /><br />
                                    <p className="desc-text">

                                        <h6>I'm a dedicated Full Stack Web Developer with internship experience and a robust project portfolio. Proficient in HTML, CSS, JavaScript, Bootstrap, React.js, Next.js, Tailwind, Express, Node.js, and MongoDB.</h6><br />

                                    </p>
                                    <div className="btn-class">
                                        <a href={''} download="">
                                            <button className="btn-download" disabled>Download CV</button>
                                        </a>
                                        <Link to="/Contact">
                                            <button className="btn-contact">Contact</button>
                                        </Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                </div>

            </div>



        </div>
    )
}

export default Home
