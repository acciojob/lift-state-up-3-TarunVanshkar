import React from "react";

const Child1 = ({setMessage}) => {
    return(
        <>
            <h2>
                Child Component 1
            </h2>
            <button onClick={() => setMessage('Option 1')}>Option 1</button>
        </>
    )
}

export default Child1;