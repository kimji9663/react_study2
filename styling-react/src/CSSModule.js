import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

// 미리 styles에서  클래스를 받아오도록 설정
const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        //<div className={[styles.wrapper, styles.inverted].join(' ')}> 템플릿 리터럴을 사용하지 않는 방식
        // 템플릿 리터럴 사용
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;