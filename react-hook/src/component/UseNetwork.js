import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        // 타입체크 시
        // if (typeof onChange === "function"){
        //     onChange(navigator.onLine);
        // }
        setStatus(navigator.onLine);
        onChange(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, []);
    return status;
}

const UseNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "온라인이에요" : "오프라인이에요");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
        <>
        <h1>{onLine ? "Online" : "Offline"}</h1>
        </>
    )
}

export default UseNetwork;