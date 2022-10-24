import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateExerciceForm({ exercice }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        setTimeout(
            () =>
                setForm({
                    name: exercice.name,
                    description: exercice.description
                }),
            150,
        )
    })

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`http://localhost:3001/exercices/update/${exercice._id}`, form)
            .then(function (response) {
                console.log(response);
                navigate(`/exercice/${exercice._id}`);
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
                    <input value={form.name} id="name" type="text" onChange={e => {
                        setForm({
                            ...form,
                            name: e.target.value
                        });
                    }} />
                </div>

                <div>
                    <p>Nom de l'exercice</p>
                    <textarea value={form.description} id="description" onChange={e => {
                        setForm({
                            ...form,
                            description: e.target.value
                        });
                    }}></textarea>
                </div>

                <div>
                    <button className="button" type="submit">Modifier</button>
                </div>

            </div>
        </form>





    )
}

export default UpdateExerciceForm;
