import React from "react";

const Child2 = ({setMessage}) => {
    return (
        <>
            <h2>
                Child Component 2
            </h2>
            <button onClick={() => setMessage('Option 2')} >Option 2</button>
        </>
    )
}

export default Child2;