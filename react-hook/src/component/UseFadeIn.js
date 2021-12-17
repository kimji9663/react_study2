import { useEffect, useRef } from "react";

// 컴포넌트가 마운트 되었을 때
// element에서 current를 찾아 호출

const useFadeIn = (opacity, delay) => {
    const element = useRef();
    useEffect(() => {
        if(element.current) {
            const { current } = element;
            current.style.transition = `opacity 2s ease-in-out ${delay}s`
            current.style.opacity = `${opacity}`;
        }
    }, []);
    return { ref: element};
}

const UseFadeIn = () => {
    const fadeInH1 = useFadeIn(1, 1);
    const fadeInH2 = useFadeIn(0, 2);
    //console.log(fadeInH1);
    return (
        <>
        <h1 {...fadeInH1} style={{opacity: '0'}}>Hello!</h1>
        <h2 {...fadeInH2} style={{opacity: '1'}}>Bye~!</h2>
        </>
    )
}

export default UseFadeIn;