import React from "react";
import "./Gallery.css";

const Gallery = ({ title, description, icon, image, isActive, toggleActive }) => {
    return (
        <div
            className={`gallery-section ${isActive ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={toggleActive}
        >
            <div className="shadow"></div>
            <div className={`icon ${isActive ? "active" : ""}`}>
                <img src={icon} alt="gallery-icon" className="gallery-icon"/>
            </div>
        </div>
    );
};

export default Gallery;