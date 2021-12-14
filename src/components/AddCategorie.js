import React from 'react'
import { useState } from 'react/cjs/react.development';
import PropTypes from "prop-types";

function AddCategorie( {setCategories} ) {
    const [inputValue, setinputValue] = useState('Hola Mundo');

    const handleInputChange = (e) => {
        setinputValue(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cat => [inputValue, ...cat] );
        setinputValue('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                value = {inputValue}
                onChange = {handleInputChange}
                type="text"/>
        </form>
    )
}

AddCategorie.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategorie
