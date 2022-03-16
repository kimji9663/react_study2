import * as React from 'react';
import {Row, Col, Divider, Button, Modal, Input, Rate} from 'antd';
import Card from "../components/Card";
import {useStores} from "../states/Context";
import {observer} from "mobx-react";

export default observer(() => {
    const {movieStore} = useStores();

    return (
        <>
            <Row justify='center'>
                <Button type='primary' danger>추가</Button>
            </Row>
            <Divider></Divider>
            <Row justify='center'>
                <Card>card</Card>
            </Row>
            <Modal>
                <Input placeholder='제목을 입력해주세요.'></Input>
                <Rate></Rate>
            </Modal>
        </>
    )
})