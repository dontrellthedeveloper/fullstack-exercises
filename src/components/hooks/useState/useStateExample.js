import React, {useState} from 'react';

const UseStateExample = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
      setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const multiplyBy2 = () => {
        setCounter(counter * 2)
    }

    const divideBy2 = () => {
        setCounter(counter / 2)
    }


    return (
        <div>
            <div className='heading-text-lg'>
                {counter}

            </div>
            <div>
                <button onClick={increment} style={{ marginTop: '20px'}}>Increment</button>
            </div>
            <div>
                <button onClick={(counter > 0) && decrement} style={{ marginTop: '20px'}}>Decrement</button>
            </div>
            <div>
                <button onClick={multiplyBy2} style={{ marginTop: '20px'}}>Multiply By 2</button>
            </div>
            <div>
                <button onClick={divideBy2} style={{ marginTop: '20px'}}>Divide By 2</button>
            </div>
        </div>
    );
};

export default UseStateExample;
