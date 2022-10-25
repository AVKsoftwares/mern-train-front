import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Tag({ tag }) {
	const navigate = useNavigate();

	function deleteTag() {
		axios.get(`http://localhost:3001/tags/delete/${tag._id}`)
			.then(function (response) {
				console.log(response);
				navigate('/tags');
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	

	return (
		<div className="tag-container">
			<p className="tag-title"><b>{tag.name}</b></p>
			<div onClick={deleteTag} className="tag-delete">
				X
			</div>
		</div>
	)
}

export default Tag