import React from "react";

function Pic (props) {
 return (
    <div>
        <img src={props.imageFile} alt="puppies" />
    </div>
)
}

export default Pic;