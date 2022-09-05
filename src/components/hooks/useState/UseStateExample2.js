import React, {useState} from 'react';

const UseStateExample = () => {
    const [inputValue, setInputValue] = useState("Dontrell")

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }

    return (
        <>
            <div className='heading-text-lg'>
                <input placeholder='enter something...' onChange={onChange}/>
            </div>
            <div className='heading-text-lg' style={{marginTop: '30px'}}>
                {inputValue}
            </div>

        </>
    );
};

export default UseStateExample;
