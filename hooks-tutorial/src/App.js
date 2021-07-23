import React, { useState } from 'react';
import Info from './Info';

const App = () => {
    // 최초 마운트 시 안보이기 - false
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '숨기기' : '보이기'}  {/* 조건 ? 'true' : 'fase' */}
            </button>
            <hr />
            {visible && <Info />}
        </div>
    );
};

export default App;
