import React from 'react';

const Contact = () => {
    return (
        <div id="contactInfo" className="Contact">
            <h1>Get in Touch!</h1>
            <form action="">
                <input type="text" placeholder="Enter your Name" />
                <input type="text" placeholder="Enter your Email" />
                <textarea name="message" id="" cols="30" rows="5" placeholder="Enter your Message"></textarea>
                <div id="formBtn">
                    <button type="submit">Send</button>
                </div>

            </form>
        </div>
    );
};

export default Contact;