import axios from "axios";


//here is where the back-end routes can talk to the client side pages.


// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    let content = axios.get("/api/google", { params: { q: query } })
    // console.log("API API API");
    // console.log(content);
    // console.log(content.Promise);
    return axios.get("/api/google", { params: { q: query } });
  },

  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};

