import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    const say = () => console.log("Hello");

    // useEffect 정의
    useEffect(() => {
        say();
    }, [number, aNumber])
    
    //useEffect(say, [number, aNumber]); //같은 결과

    return (
        <>
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber - 1)}>{aNumber}</button>
        </>
    )
}

export default UseEffect;