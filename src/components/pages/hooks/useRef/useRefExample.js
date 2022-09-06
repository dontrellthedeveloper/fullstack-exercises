import React, {useRef} from 'react';

const UseRefExample = () => {

    const inputRef = useRef(null);

    const onClick = () => {
       inputRef.current.focus();
    }

    return (
        <div>
            <h1>Dontrell</h1>
            <input type="text" ref={inputRef} placeholder='Ex...'/>
            <button onClick={onClick}>Change Name</button>
        </div>
    );
};

export default UseRefExample;
