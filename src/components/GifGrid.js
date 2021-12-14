
import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

function GifGrid({category}) {

    const {data:imgs, loading} = useFetchGifs(category);


    return (
        <>
            <h3 className='animate__animated animate__fadeInLeft animate__fast'>{category}</h3>
            <p className='animate__animated animate__flash animate__fast'>{ loading && 'Cargando' }</p>

            <div className="card-grid">
                {
                    imgs.map( imgs => (
                        <GifGridItem 
                            key = {imgs.id}
                            {...imgs}
                        />
                    ))
                }
            </div>
        </>
    )


}

export default GifGrid

