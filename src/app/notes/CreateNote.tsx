// so that next doesn't render it on server
'use client';
import { useState } from "react";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const create = async () => {
        
        await fetch(`http://127.0.0.1:8090/api/collections/sampleApp/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        setContent('');
        setTitle('');
    }


    return (
        <form onSubmit={create}>
            <h3>Create a new Note</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">
                Create note
            </button>
        </form>
    );
}