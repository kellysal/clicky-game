
import React from "react";
import "./Row.css";

function Row(props) {
    return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;