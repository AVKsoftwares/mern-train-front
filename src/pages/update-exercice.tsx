import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ExerciceUpdateForm from '../components/UpdateExerciceForm';

function UpdateExercice() {
    const { id } = useParams();

    const [exercice, setExercice] = useState({ name: '', description: '' })
    const getExercice = async () => {
        const res = await axios.get(`http://localhost:3001/exercices/${id}`)
        setExercice(res.data)
    }

    useEffect(() => {
        getExercice()
    })


    return (
        <div>
            <ExerciceUpdateForm exercice={exercice} />
        </div>
    );
}

export default UpdateExercice;