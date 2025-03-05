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

                <label> Director: </label>
                <input type="text" />
                
                <label> Genre: </label>
                <select id="genre" name="genre">
                    <option value="volvo"> Action </option>
                    <option value="saab"> Fantasy </option>
                    <option value="fiat"> Drama </option>
                    <option value="audi"> Fiction </option>
                </select>
                
                <label> Date of Release: </label>
                <input type="number" />
                
                <label> Title: </label>
                <textarea />
                
                <label> Poster Image: </label>
                <input type="url" />
                
                <button> Submit </button>
                <button onClick={() => navigate("/")}> Cancel </button>
            </div>
        </>
    )
}

export default AddBook
