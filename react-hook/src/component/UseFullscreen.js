import { useRef } from "react";

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function"){
            callback(isFull);
        }
    }
    const triggerFull = () => {
        if (element.current){
            if (element.current.requestFullscreen){
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullscreen){
                element.current.mozRequestFullscreen();
            } else if (element.current.webkitRequestFullscreen){
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen){
                element.current.msRequestFullscreen();
            };
            runCb(true);
            document.getElementById('btnExit').style.display='block';
        }
    }
    const exitFull = () => {
        document.exitFullscreen();
        if (document.exitFullscreen){
            document.exitFullscreen();
        } else if (document.mozCancelFullscreen){
            document.mozCancelFullscreen();
        } else if (document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen){
            document.msExitFullscreen();
        };
        runCb(false);
        document.getElementById('btnExit').style.display='none';
    };
    return {element, triggerFull, exitFull};
}

const UseFullscreen = () => {
    const onFullscreen = (isFull) => {
        console.log( isFull ? "풀스크린상태" : "아닌상태");
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFullscreen);
    return(
        <>
            <div ref={element}>
                <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="tree"
                />
                <button id="btnExit" onClick={exitFull} style={{display: 'none'}}>풀스크린 나가기</button>
            </div>
            <button onClick={triggerFull}>풀스크린으로 전환</button>
        </>
    )
}

export default UseFullscreen;