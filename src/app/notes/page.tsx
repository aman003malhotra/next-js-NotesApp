import Link from "next/link";
import CreateNote from "./CreateNote";
import styles from './Notes.module.css'; 

async function getNotes(){
    const res = await fetch("http://127.0.0.1:8090/api/collections/sampleApp/records", { cache: 'no-store' });
    const data = await res.json();
    console.log(data);
    return data?.items as any[];
}
export default async function NotesPage(){
    console.log("inside notes page");
    
    const notes: any[] = await getNotes();
    
    return(
        <div>
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes.map((note) => {
                    return <Note key={note.id} note={note}/>
                })}
            </div>
            <CreateNote />
        </div>
    )
}

function Note({note} : any){
    const {id, title, content, created} = note || {}
    return(
        <Link href={`/notes/${id}`}>
            <div className={styles.note}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}