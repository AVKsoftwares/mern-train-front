import React from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function ExerciceCard({ exercice }) {
	const navigate = useNavigate();

	function handleClick() {
		axios.get(`http://localhost:3001/exercices/delete/${exercice._id}`)
			.then(function (response) {
				navigate('/');
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
					<ul className="tags">
						{exercice.tags.map((tag) => (
							<li key={tag._id}><a><b>{tag.name}</b></a></li>
						))}
					</ul>
				</div>
			</div>

			<div className="card-buttons">
				<button className="round-button" onClick={() => navigate(`/exercice/${exercice._id}`)}>Afficher</button>
				<button className="round-button" onClick={() => navigate(`/updateExercice/${exercice._id}`)}>Modifier</button>
				<button className="round-button" onClick={handleClick}>Supprimer</button>
			</div>
		</div>
	)
}

export default ExerciceCard