const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const protectOut = () => {
        window.addEventListener("beforeunload", listener);
    }
    const unprotectOut = () => {
        window.removeEventListener("beforeunload", listener);
    }
    return {protectOut, unprotectOut};
}

const UsePreventLeave = () => {
    const {protectOut, unprotectOut} = usePreventLeave();

    return (
        <>
            <button onClick={protectOut}>나가기 확인</button>
            <button onClick={unprotectOut}>그냥 나가기</button>
        </>
    )
}

export default UsePreventLeave;