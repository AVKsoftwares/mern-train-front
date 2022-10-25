import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TagForm() {
	const navigate = useNavigate();

	const [form, setForm] = useState({ name: '' })

	function handleSubmit(e) {
		e.preventDefault();
		axios.post('http://localhost:3001/tags/create', form)
			.then(function (response) {
				console.log(response);
				setForm({ name: '' })
				navigate('/tags');
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	

	return (
		<form className='tags-form' onSubmit={handleSubmit}>
			<input type="text" value={form.name} onChange={e => {
				setForm({
					name: e.target.value
				});
			}} />
			<button type='submit' className='button'> Ajouter</button>
		</form>
	)
}

export default TagForm