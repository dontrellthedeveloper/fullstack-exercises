import React, {useState} from 'react';

const UseStateExample = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
      setCounter(counter + 1)
    }


    return (
        <div style={{marginTop: '100px'}}>
        <div className='heading-text-lg'>
            {counter}

        </div>
            <button onClick={increment} style={{ marginTop: '20px'}}>Increment</button>
        </div>
    );
};

export default UseStateExample;
