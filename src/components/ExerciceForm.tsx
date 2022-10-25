import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ExerciceForm() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        description: '',
        tags: []
    });

    const [tags, setTags] = useState([])
    const getTags = async () => {
        const res = await axios.get('http://localhost:3001/tags')
        setTags(res.data)
    }

    useEffect(() => {
        getTags()
    }, [])

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

    function addTag(tag) {
        var updatedTags = form.tags;
        updatedTags.push(tag);
        setForm({
            ...form,
            tags: updatedTags
        });
    }

    function removeTag(tag) {
        var updatedTags = form.tags;
        updatedTags.splice(updatedTags.map(x => {
            return x._id;
        }).indexOf(tag._id), 1);
        setForm({
            ...form,
            tags: updatedTags
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


                <div className="form-tags-container">
                    {tags.map((tag) => (
                        <div>
                            <input onChange={(e: any) => {
                                e.target.checked
                                    ? addTag(tag)
                                    : removeTag(tag)
                            }} className="card-tag" type="checkbox" name="tags" id={tag.name} />
                            <label htmlFor={tag.name}>{tag.name}</label>
                        </div>
                    ))}
                </div>

                <div>
                    <button className="button" type="submit">Ajouter</button>
                </div>

            </div>
        </form>

    )
}

export default ExerciceForm;
