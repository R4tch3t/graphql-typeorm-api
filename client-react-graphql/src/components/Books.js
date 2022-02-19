import React from 'react';
import '../App.css';
import { useBooksQuery } from '../graphql/generated.ts';


function Books() {
  const [booksResult] = useBooksQuery()
  const {books} = booksResult.data ? booksResult.data : []
  console.log("books: "+books)
  return (
    <>
        {books && <h2>  {books.map((v,i)=>{return <p><b>{`N°: ${i+1} - ID: ${v.id} Titulo: ${v.title}`}</b></p> })}  </h2>}
        
    </>
  );
}

export default Books;
