import * as React from 'react';
import {Card, Avatar, Rate, Button} from "antd";
import { DeleteOutlined } from '@ant-design/icons';

export default({title, onChange, rate, onDelete}) => {
    return (
        <>
            <Card>
                <h4>{title}</h4>
                <div>
                    <Rate value={rate} onChange={onChange}></Rate>
                </div>
            </Card>
        </>
    )
}