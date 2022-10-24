import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ExerciceForm() {
    const navigate = useNavigate();


    const [form, setForm] = useState({
        name: '',
        description: '',
        tags: []
    });


    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/exercices/create', form)
            .then(function (response) {
                console.log(response);
                navigate('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-container">

                <div>
                    <p>Nom de l'exercice</p>
                    <input id="name" type="text" onChange={e => {
                        setForm({
                            ...form,
                            name: e.target.value
                        });
                    }} />
                </div>

                <div>
                    <p>Nom de l'exercice</p>
                    <textarea id="description" onChange={e => {
                        setForm({
                            ...form,
                            description: e.target.value
                        });
                    }}></textarea>
                </div>

                <div>
                    <button className="button" type="submit">Ajouter</button>
                </div>

            </div>
        </form>

    )
}

export default ExerciceForm;
