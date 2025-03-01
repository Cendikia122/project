import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126829.29180934886!2d106.70948903171829!3d-6.595186739249475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5b7ad0f824b%3A0x4c71fd1b0b8ae76d!2sBogor%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1740572866349!5m2!1sen!2sid"></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;