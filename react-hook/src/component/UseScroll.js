import { useEffect, useState } from 'react'

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({y: window.scrollY, x: window.scrollX});
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })
    return state;
};

const UseScroll = () => {
    const {y} = useScroll();
    return (
        <div style={{height: "1000vh"}}>
        <h1 style={{position: 'fixed', color: y > 100 ? "blue" : "red"}}>Hi</h1>
        </div>
    )
}

export default UseScroll;