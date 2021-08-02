import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        //<div className={[styles.wrapper, styles.inverted].join(' ')}> 템플릿 리터럴을 사용하지 않는 방식
        // 템플릿 리터럴 사용
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;