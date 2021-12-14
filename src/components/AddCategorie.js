import React from 'react'
import { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategorie = ( {setCategories} ) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cat => [inputValue, ...cat] );
            setinputValue('');
        }
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

