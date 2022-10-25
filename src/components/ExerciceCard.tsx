import React from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function ExerciceCard({ exercice }) {
	const navigate = useNavigate();

	function handleClick() {
		axios.get(`http://localhost:3001/exercices/delete/${exercice._id}`)
			.then(function (response) {
				navigate(0);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className="card">
			{/* IMAGE */}
			<div className="card-body">
				<p className="card-title"><b>{exercice.name}</b></p>
				<p className="card-description">{exercice.description}</p>
				<div className="card-tags">
					{exercice.tags.map((tag) => (
						<p key={tag._id} className="card-tag">{tag.name}</p>
					))}
				</div>
			</div>

			<div className="card-buttons">
				<button className="button" onClick={() => navigate(`/exercice/${exercice._id}`)}>Afficher</button>
				<button className="button" onClick={() => navigate(`/updateExercice/${exercice._id}`)}>Modifier</button>
				<button className="button" onClick={handleClick}>Supprimer</button>
			</div>
		</div>
	)
}

export default ExerciceCard