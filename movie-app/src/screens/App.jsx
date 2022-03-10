import * as React from 'react';
import {Row, Col, Divider, Button, Modal, Input, Rate} from 'antd';
import Card from '../components/Card';
import { useStores } from '../states/Context';

// const initCache = [
//     {
//         id: 1,
//         title: 'LOTR',
//         rate: 5
//     },
//     {
//         id: 2,
//         title: 'Harry Potter',
//         rate: 4
//     },
//     {
//         id: 3,
//         title: '창궐',
//         rate: 0
//     },
// ]

export default () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [newRate, setNewRate] = React.useState(0);
    const [newTitle, setNewTitle] = React.useState('');
    //const [cache, setCache] = React.useState(initCache);
    const {movieStore} = useStores();

    const onRateChange = (value) => {
        setNewRate(value);
    }

    const onModalOk = () => {
        setCache([
            ...cache,
            {
                id: cache[cache.length - 1].id,
                title: newTitle,
                rate: newRate,
            }
        ])
    }
}