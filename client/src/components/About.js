import React from 'react';
import avatar from "../images/avatar.jpg"

function About() {
    return (
        <div className="about bg-white container mt-2 rounded shadow">
            
            <div className="row">

                <div className="col-md-4 p-5">
                    <div className="about__img">
                        <img src={ avatar} alt="avatar.jpg" />
                    </div>

                    <div className="about__more pt-2">
                        <p> Rohit Kumar Saini </p>
                        <p> Instagram </p>
                        <p> Youtube </p>
                        <p> Github </p>
                        <p> rohitsaini.codes </p>
                        <p> Figma </p>
                        <p> Full Stack Developer </p>
                    </div>
                </div>
                <div className="col-md-8">
                
                    <div className="about__content p-5">
                        <div className="about__top d-flex justify-content-between">
                            <div className="top__left">
                                <h1 className="text-primary"> Rohit Kumar Saini </h1>
                                <h5 className="text-secondary"> Full Stack Developer </h5>
                            </div>
                            <div className="top__right">
                                <button className="btn btn-light rounded"> Edit Profile </button>
                            </div>
                        </div>

                        <div className="about__bottom mt-5">
                            <h6> About </h6>
                            <div className="row mt-3">
                                <div className="col-md-6">User Id </div>
                                <div className="col-md-6"> 9639970146 </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">Name</div>
                                <div className="col-md-6">Rohit Kumar Saini</div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">Email</div>
                                <div className="col-md-6">rohitsaini789@gmail.com</div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">Phone</div>
                                <div className="col-md-6">9639970146</div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">Profession</div>
                                <div className="col-md-6">Full Stack Developer</div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default About;
