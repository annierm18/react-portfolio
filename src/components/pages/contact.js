import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="envelope-square"/>
                        </div>

                        <div className="text">annie@example.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="map-marked-alt"/>
                        </div>

                        <div className="text">Phoenix, AZ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}