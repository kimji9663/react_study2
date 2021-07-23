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

    // 마운트 될 때마다 실행(빈 배열)
    // useEffect(() => {
    //     console.log('마운트 될 때만 실행됩니다.');
    //     console.log({
    //         name,
    //         nickname
    //     }, []);
    // });

    // 업데이트 될 때마다 실행(배열안에 검사값)
    // useEffect(() => {
    //     console.log(name);
    // },[name]);

    // 기본적으로는 랜더링 직후 실행, 
    // 두번째 파라미터 배열[]에 무엇을 넣느냐에 따라 실행조건이 달라진다.

    // 언마운트 전이나 업데이트 전에 어떤 작업을 수행하고 싶으면 cleanup 함수를 반환해줘야 한다.
    useEffect(() => {
        console.log('effect');
        console.log(name);

        // cleanup 함수
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, []); // 빈 배열 추가 (언마운트 될 때만 cleanup 함수 호출)

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