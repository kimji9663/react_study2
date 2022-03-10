const useNotification = (title, options) => {
    if (!("Notification" in window)){
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted"){
            Notification.requestPermission().then(permission => {
                if(permission === "granted"){
                    new Notification(title, options);
                } else {
                    return;
                }
            })
        } else {
            new Notification(title, options);
        }
    }
    return fireNotif;
}

const UseNotification = () => {
    const triggerNotif = useNotification("푸사알림을 받을래요?", {body:"받아주세요...^^"})
    return (
        <>
            <button onClick={triggerNotif}>알리미☆</button>
        </>
    )
}

export default UseNotification;