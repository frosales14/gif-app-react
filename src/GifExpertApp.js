import React, {useState} from 'react'
import AddCategorie from './components/AddCategorie';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    
    
    const [categories, setcategories] = useState(['One Punch Man']); 
    
    const handleAdd = () =>{
        setcategories( cat => [...cat] );
    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategorie setCategories = {setcategories}/>
            <hr />

            <button onClick= {handleAdd} >Agregar</button>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category} 
                            category = {category}/>
                    ))
                }
            </ol>
            {/* <ol>
                {
                    categories.map( categorie => {
                        return <li key={ categorie } >{categorie}</li>
                    })
                }
            </ol> */}
        </>
    );
}

export default GifExpertApp
