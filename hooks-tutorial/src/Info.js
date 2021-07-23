import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // 랜더링 될 때마다 실행
    // useEffect(() => {
    //     console.log('랜더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    // 마운트 될 때마다 실행
    // useEffect(() => {
    //     console.log('마운트 될 때만 실행됩니다.');
    //     console.log({
    //         name,
    //         nickname
    //     }, []);
    // });

    // 업데이트 될 때마다 실행
    useEffect(() => {
        console.log(name);
    },[name]);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickName}></input>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;