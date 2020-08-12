import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Searched() {
  // Setting our component's initial state
  const [books, setBooks] = useState({
      results: []
})
  const [searchObject, setSearchObject] = useState({
    query: "",
  })







function saveBook (id) {
  
  function checkBook (book) {
    return book.id == id

  }
  let savedBook = books.filter(checkBook)
  console.log("Saved book: ", savedBook);
  API.saveBook({
    title: savedBook[0].volumeInfo.title,
    author: savedBook[0].volumeInfo.authors[0],
    synopsis: savedBook[0].volumeInfo.title,
    link: savedBook[0].volumeInfo.infoLink
    })
    .catch(err => console.log(err));
}

function searchBooks () {
  if (searchObject.query) {
    API.getBooks(searchObject.query
    )
      .then(res => {
        setBooks(res.data);
        console.log("getBooks Result: ", res.data);
        // console.log("Books State: ", books)
      }).then(console.log("Books State: ", books))
      .catch(err => console.log(err));
  }
}


  // Deletes a book from the database with a given id, then reloads books from the db


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(books.results)
    // console.log(formObject.title)
    setSearchObject({...searchObject, [name]: value})
    
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    console.log("handleFormSubmit");
    event.preventDefault();
    console.log("query: ", searchObject.query);
    searchBooks()
  };

    return (
      <Container >
        {/* <Row> */}
          {/* <Col size="md-6"> */}
          <Nav />
            <Jumbotron>
              <h1>Search Google Books' Database</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="query"
                placeholder="Search"
                value={searchObject.query}
              />
              {/* <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author"
                value={formObject.author}
              /> */}
              <FormBtn
                disabled={!searchObject.query}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
            <h3>Book Results</h3>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <div className={book.id}></div>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
                      </a>
                      {/* onClick needs the () => function() format so the function actally waits for the button click */}
                      <button className="btn" onClick={() => saveBook(book.id)}>Save Books!</button>
                      <button onClick={() => window.open(book.volumeInfo.infoLink)}>View Book</button>

                      
  
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      
      </Container>
    );
  }


export default Searched;
