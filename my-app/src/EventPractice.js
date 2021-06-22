import React, { useState } from 'react';

/*
 * input이 많아졌을 때 
 * e.target.name을 활용하는 방법
 */
const EventPractice = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    //useState에 문자열이 아닌 객체를 넣는다.
    const [form, setForm] = useState({ 
        username: '',
        message: ''
    });
    const {username, message} = form;

    //const onChangeUsername = e => setUsername(e.target.value);
    //const onChangeMessage = e => setMessage(e.target.value);
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ': ' + message);
        //setUsername('');
        //setMessage('');
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            ></input>
            
            <br/>

            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            ></input>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;