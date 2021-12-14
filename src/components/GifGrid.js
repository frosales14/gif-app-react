
import React from 'react';
import {GifGridItem} from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:imgs, loading} = useFetchGifs(category);


    return (
        <>
            <h3 className='animate__animated animate__fadeInLeft animate__fast'>{category}</h3>
            { loading && <p className='animate__animated animate__flash animate__fast'>Loading</p>  }

            <div className="card-grid">
                {
                    imgs.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )


}

