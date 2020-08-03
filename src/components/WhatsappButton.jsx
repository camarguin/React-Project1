import React from 'react';

const WhatsappButton = () => {
    return (
        <div>
            <a href="https://api.whatsapp.com/send?phone=553484273551&text=Hello!."
                class="float" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>

        </div>
    );
};

export default WhatsappButton;