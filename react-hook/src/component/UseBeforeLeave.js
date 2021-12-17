import { useEffect } from 'react'

const useBeforeLeave = (event) => {
    const handler = () => {
        const { clientY } = event; // event안에서 clientY를 꺼냄
        if (clientY <= 0){
            event();
        }
    }
    
    window.addEventListener("mouseleave", handler);
    return () => {
        window.addEventListener("mouseleave", handler);
    }
}

const UseBeforeLeave = () => {
    const dontOut = console.log("가지망~!");
    useBeforeLeave(dontOut);
    return (
        <>
        <h1>Hello!</h1>
        </>
    )
} 

export default UseBeforeLeave;