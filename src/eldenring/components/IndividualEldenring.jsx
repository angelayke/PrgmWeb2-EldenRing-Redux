import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import EldenService from '../service/EldenService';
import EldenCard from './EldenCard';

const eS =  new EldenService();

const IndividualEldenring = () => {
    const [eldenring, setEldenring] = useState(null);
    const params = useParams();

    const getEldenringById = async () => {
        if (params.id) {
            setEldenring(await eS.getEldenringById(params.id));
        }
    }

    useEffect(() => {
        getEldenringById();
    }, [params]);

    if (!eldenring) {
        return null;
    }

    return (
        <EldenCard eldenring={eldenring}></EldenCard>
    )

}

export default IndividualEldenring;