const useConfirm = (message, yes, no) => {
    const confirmAction = () => {
        if(window.confirm(message)){
            yes();
        } else {
            no();
        }
    }
    return confirmAction;
}


const UseConfirm = () => {
    const deleted = () => console.log("삭제되었습니다.");
    const aborted = () => console.log("취소취소~! 실수^^");
    const clickDelete = useConfirm("정말로??", deleted, aborted); // 확인하고 어떤 함수를 실행할건지
    return (
        <>
            <button onClick={clickDelete}>삭제</button>
        </>
    )
}

export default UseConfirm;