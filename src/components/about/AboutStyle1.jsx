import Image from 'next/image';
import React from 'react';
import anim1Thumb from '@/assets/img/shape/anim-1.png'
import anim2Thumb from '@/assets/img/shape/anim-2.png'
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/anim-4.png'
import aboutThumb from "@/assets/img/about/ranggafasel.png"
import signatureThumb from "@/assets/img/signature.png"
import About1Card from './About1Card';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">LEARN, LEAD, GROW!</div>
                            <h2 className="title mb-25">Empowering Leaders, Transforming Futures</h2>
                            <p>
                            With years of experience in corporate training, team building, and personal development, we have collaborated with industry leaders and organizations to foster a culture of excellence and continuous learning. Our mission is simple: to inspire, educate, and transform individuals into future-ready leaders.
                            </p>
                            <div className="owner-info">
                                <div className="left-info">
                                    <h4>Ardian Rangga</h4>
                                    <span>CEO & Founder</span>
                                </div>
                                <div className="right-info">
                                    <Image src={signatureThumb} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image className="wow fadeInRight" src={aboutThumb} alt="Image Not Found" />
                                <About1Card />
                                <div className="thumb-shape-bottom wow fadeInDown" data-wow-delay="300ms">
                                    <Image src={anim3Thumb} alt="Image Not Found" />
                                    <Image src={anim4Thumb} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;