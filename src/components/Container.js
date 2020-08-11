import React from "react";


const Container = (props) => {
    return (
        <div className="reacto-container">
            <div className="reacto-container-header">
                <h4>{props.title}</h4>
            </div>
            <div className="reacto-container-body">
                {props.children}
            </div>
        </div>
    )
};

export default Container;