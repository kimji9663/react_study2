import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "violet"];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: "flex" }}>
                        {colors.map((color) => (
                            <div
                                key = {color}
                                style = {{
                                    background: color,
                                    width: "24px",
                                    height: "24px",
                                    cursor: "pointer"
                                }}
                                // 마우스 왼쪽 버튼 클릭 시
                                onClick={() => actions.setColor(color)}
                                // 마우스 오른쪽 버튼 클릭 시
                                onContextMenu={(e) => {
                                    e.preventDefault(); // 메뉴 뜨는 동작 막기
                                    actions.setSubcolor(color);
                                }}
                            ></div>
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColors;