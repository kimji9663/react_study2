import React, { useState } from 'react';

/**
 * 배열 비구조화 할당
 * 
 * (기존방식)
 * const array = [1, 2];
 * const one = array[0];
 * const one = array[1];
 *        ↓ ↓
 * (비구조화 할당)  
 * const array = [1, 2];
 * const [one, two] = array;
 */

const Say = () => {
    const [message, setMessage] = useState(''); // [현재상태, 상태를 바꾸어주는 함수]
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');
    
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    )
}

export default Say;