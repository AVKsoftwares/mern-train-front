import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Tag from '../components/Tag';
import TagForm from '../components/TagForm';

function Tags() {
    const [tags, setTags] = useState([])

    const getTags = async () => {
        const res = await axios.get(`http://localhost:3001/tags`)
        setTags(res.data)
    }

    useEffect(() => {
        getTags()
    })

    return (
        <div className='tags-container'>

            {tags.map((tag) => (
                <Tag key={tag._id} tag={tag} />
            ))}

            <TagForm />

        </div >
    );
}

export default Tags;