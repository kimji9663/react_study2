import * as React from 'react';
import {Row, Col, Divider, Button, Modal, Input, Rate} from 'antd';
import Card from "../components/Card";
import {useStores} from "../states/Context";
import {observer} from "mobx-react";

export default observer(() => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [newRate, setNewRate] = React.useState(0);
    const [newTitle, setNewTitle] = React.useState('');
    const {movieStore} = useStores();

    const onRateChange = (value) => {
        setNewRate(value);
    }
    const onChangeTitle = (e) => {
        setNewTitle(e.target.value);
    }
    const onModalOk = () => {
        movieStore.createMovie(newTitle, newRate);
        setNewRate(0);
        setNewTitle('');
        setIsModalOpen(false);
    }

    const onExistingRateChange = (id, value) => {
        movieStore.changeRate(id, value);
    }

    const onDelete = (id) => {
        movieStore.deleteMovie(id);
    }

    return (
        <>
            <Row justify='center'>
                <Button type='primary' danger onClick={() => setIsModalOpen(true)}>추가</Button>
            </Row>
            <Divider></Divider>
            {
                movieStore.movies.map( 
                    (x) => (
                        <>
                            <Row justify='center'>
                                <Card key={x.id} title={x.title} rate={x.rate}
                                    onChange={(value) => onExistingRateChange(x.id, value)} 
                                    onDelete={() => onDelete(x.id)}
                                />
                            </Row>
                        </>
                    )
                )
            }
            <Modal title="추가하기" visible={isModalOpen} onOk={onModalOk} onCancel={() => setIsModalOpen(false)}>
                <Input placeholder="영화의 이름을 입력 해주세요." value={newTitle} onChange={onChangeTitle}/>
                <Rate onChange={onRateChange} value={newRate}/>
            </Modal>
        </>
    )
})