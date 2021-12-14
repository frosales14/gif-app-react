import React, {useState} from 'react'
import {AddCategorie} from './components/AddCategorie';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {
    
    
    const [categories, setcategories] = useState(['One Punch Man']); 

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategorie setCategories = {setcategories}/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category} 
                            category = {category}/>
                    ))
                }
            </ol>
            
        </>
    );
}
