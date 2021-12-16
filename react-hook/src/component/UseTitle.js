import { useEffect, useState } from "react";

const useTitle = (initial) => {
    const [title, setTitle] = useState(initial);
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title
    return setTitle
}

const UseTitle = () => {
    const updater = useTitle("로딩중~~");
    setTimeout(() => updater("Home"), 3000);

    return (
        <>
            <div>Ho~!</div>
        </>
    )
}

export default UseTitle;