import React, {useEffect, useLayoutEffect} from 'react';

const UseLayoutEffectExample = () => {

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    },[]);


    useEffect(() => {
        console.log('useEffect')
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default UseLayoutEffectExample;
