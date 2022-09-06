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

    const multiplyBy22 = () => {
        setCounter(counter * 22)
    }

    const multiplyBy1022 = () => {
        setCounter(counter * 1022)
    }

    const multiplyBy1000022 = () => {
        setCounter(counter * 1000022)
    }


    const divideBy2 = () => {
        setCounter(counter / 2)
    }

    const divideBy25 = () => {
        setCounter(counter / 25)
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
                <button onClick={(counter > 0) ? decrement : null} style={{ marginTop: '20px'}}>Decrement</button>
            </div>
            <hr/>
            <div>
                <button onClick={multiplyBy2} style={{ marginTop: '20px'}}>Multiply By 2</button>
            </div>
            <div>
                <button onClick={multiplyBy22} style={{ marginTop: '20px'}}>Multiply By 22</button>
            </div>
            <div>
                <button onClick={multiplyBy1022} style={{ marginTop: '20px'}}>Multiply By 1,022</button>
            </div>
            <div>
                <button onClick={multiplyBy1000022} style={{ marginTop: '20px'}}>Multiply By 1,000,022</button>
            </div>
            <hr/>
            <div>
                <button onClick={divideBy2} style={{ marginTop: '20px'}}>Divide By 2</button>
            </div>
        </div>
    );
};

export default UseStateExample;
