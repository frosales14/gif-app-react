import { useState, useEffect } from "react"
import { getGif } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        console.log(category);
        getGif(category)
            .then( (imgs) => {
                setstate({
                    data: imgs,
                    loading: false
                });
            })
    }, [category])

    return state;

}