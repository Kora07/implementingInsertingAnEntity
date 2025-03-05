import React from 'react'
import "./AddBook.css"
import { useNavigate } from 'react-router-dom'

// - **Form Fields:** Develop a form that includes the following input fields:
//   - **Title** (Text Input)
//   - **Director** (Text Input)
//   - **Genre** (Select Dropdown)
//   - **Release Year** (Number Input)
//   - **Synopsis** (Textarea)
//   - **Poster Image URL** (URL Input)
// - **Buttons:**


function AddBook() {

    const navigate = useNavigate();

    return (
        <>
            <div className="addBookContainer">
                <label> Title: </label>
                <input type="text" />

                <label> Author: </label>
                <input type="text" />
                
                <label> Description: </label>
                <textarea />
                
                <label> Cover Image: </label>
                <input type="url" />
                
                <button> Submit </button>
            </div>
        </>
    )
}

export default AddBook
