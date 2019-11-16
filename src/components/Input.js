import React, { useState, useEffect } from 'react';

const Input = () => {
    const [who, setwho] = useState("");
    useEffect(() => {
        const who = prompt('Name');
        setWriter(who);
    }, []);
    const [chatText, setchatText] = useState("");

    const [who, setwho] = useState("");
    useEffect(() => {
        const who = prompt('Name');
        setwho(who);
    }, []);

    return (
        <div>
            <input
                type="text"
                value={chatText}
                placeholder="내용을 입력하세요"
                onChange={e => {
                    setchatText(e.target.value);
                }}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        setchatText("");
                    }
                }}
            />
            <button
                onClick={() => {
                    setchatText("");
                }}
            >
                확인
        </button>
        </div>
    );
};

export default Input;