import defaultAxios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now())
    }
    useEffect(() => {
        if(!opts.url){
            return;
        }
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            }).catch(error => {
                setState({ ...state, loading: false, error});
            });
        });
    }, [trigger]);
    return {...state, refetch};
}

const UseAxios = () => {
    const { loading, error, data, refetch } = useAxios({ url: "https://cors-anywhere.herokuapp.com/https://yts.mx/api/v2/list_movies.json"})
    console.log(`loading:${loading}\nerror:${error}\ndata:${JSON.stringify(data)}`);
    return(
        <>
            <h2>{data && data.status}</h2>
            <h3>{loading && "Loading"}</h3>
            <button onClick={refetch}>패치</button>
        </>
    );
}
export default UseAxios;