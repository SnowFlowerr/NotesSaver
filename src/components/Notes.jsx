import React, { useState } from 'react'
import styles from './Notes.module.css'
import { jsPDF } from "jspdf";

export default function Notes() {
    const [notes,setNotes]=useState("");
    const [title,setTitle]=useState("");
    function handleSave() {
        if(title.trim()!==""){
            const doc = new jsPDF();
            doc.text(notes, 10, 10);
            doc.save(`${title}.pdf`);
        }
        else{
            alert("Enter the Title First")
        }
    }
    function clearALl(e){
        e.preventDefault();
        setNotes("")
        setTitle("")
    }
    function handleNotes(e){
        e.preventDefault();
        setNotes(e.target.value)
    }
    function handleTitle(e){
        e.preventDefault();
        setTitle(e.target.value)
    }
    return (
        <div className={styles.box}>
            <form action="">
                <input type="text" className={styles.inp} placeholder='Write Your Title Here' value={title} onChange={handleTitle}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Write Your Notes Here' className={styles.textarea} value={notes} onChange={handleNotes}></textarea>
            </form>
            <div className={styles.btns}>
                <button className={styles.btn} onClick={clearALl}>Clear All</button>
                <button className={styles.btn} onClick={handleSave}>Save Notes</button>
            </div>
        </div>
    )
}
