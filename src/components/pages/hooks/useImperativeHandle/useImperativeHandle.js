import React, {useRef} from 'react';
import Button from "./Button";

const UseImperativeHandleExample = () => {
    const buttonRef = useRef(null)

    return (
        <>
            <div>
                <button onClick={() => {buttonRef.current.alterToggle()}} >Button From Parent</button>
            </div>
            <div>
                <Button ref={buttonRef} />
            </div>
        </>

    );
};

export default UseImperativeHandleExample;
