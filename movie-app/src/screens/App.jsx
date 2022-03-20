import * as React from 'react';
import {Row, Col, Divider, Button, Modal, Input, Rate} from 'antd';
import Card from "../components/Card";
import {useStores} from "../states/Context";
import {observer} from "mobx-react";

export default observer(() => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const {newRate, setNewRate} = React.useState(0);
    const {newTitle, setNewTitle} = React.useState('');
    const {movieStore} = useStores();

    const onModalOk = () => {
        setIsModalVisible(false);
        movieStore.createMovie(newTitle, newRate);
        setNewRate(0);
        setNewTitle('');
    }

    const onExistingRateChange = (id, value) => {
        movieStore.changeRate(id, value);
    }

    return (
        <>
            <Row justify='center'>
                <Button type='primary' danger onClick={() => setIsModalVisible(true)}>추가</Button>
            </Row>
            <Divider></Divider>
            {
                movieStore.movies.map(
                    (x) => (
                        <>
                            <Row justify='center'>
                                <Card key={x.id} title={x.title} rate={x.rate}
                                onChange={(value) => onExistingRateChange(x.id, value)} />
                            </Row>
                        </>
                    )
                )
            }
            
            <Modal title="Basic Modal" visible={isModalVisible} onOk={onModalOk} onCancel={() => setIsModalVisible(false)}>
                <Input placeholder='제목을 입력해주세요.'></Input>
                <Rate></Rate>
            </Modal>

        </>
    )
})