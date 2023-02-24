import React from "react";
import "./Style/Scroll.css";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '700px'}} className="scrollBox">
            {props.children}
        </div>
    )
};

export default Scroll;