import React from 'react';

const MyComponet = ({ name, children }) => {
    //const { name, children } = props;
    return (
        <div>
            안녕하세요 제이름은 {name}입니다. <br />
            children 값은 {children} 입니다.
        </div>
    );
};

MyComponet.defaultProps = {
    name: '기본이름',
    children: 'fldosada'
};

export default MyComponet;