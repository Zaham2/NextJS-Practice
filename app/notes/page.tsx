
async function getNotes(){
    try{
        console.log('start fetch');
        const res = await fetch('http://localhost:8090/api/collections/notes/records');
        console.log('end fetch')
        const data = await res.json();
        console.log('returning json');
        return data?.items as any[];
    }  catch (e) {
        console.log(e);
    }

}

export default async function NotesPage() {

    console.log('starting get notes');
    const notes = await getNotes();
    console.log('finished getting notes')

    console.log('in notes route')
    return(
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                    </>
                })}
            </div>
        </div>
    )

}