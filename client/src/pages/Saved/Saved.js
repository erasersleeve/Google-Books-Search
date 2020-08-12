import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";


function Saved() {

    const [books, setBooks] = useState({
        results: []
    })


    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getSavedBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    };

    return (
        <>

            <Nav />
            <Jumbotron>
                <h1>Saved Books</h1>
            </Jumbotron>

            {books.length ? (
                <List>
                    {books.map(book => {
                        return (
                            <ListItem key={book._id}>
                                <a href={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}
                                    </strong>
                                </a>
                                <button className="btn" onClick={() => console.log("!!!!!!!!!")}>Save Books!</button>

                            </ListItem>
                        );
                    })}
                </List>
            ) : (
                <div>
                      <h3>No Results to Display</h3>
                    <button className="btn" onClick={() => console.log("State Books: ", books)}>Save Books!</button>
                </div>
                  

            )}




        </>
    )
}

export default Saved