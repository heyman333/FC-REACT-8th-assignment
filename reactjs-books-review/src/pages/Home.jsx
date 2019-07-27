import React from "react";
import axios from "axios";

const Book = props => {};

const Home = ({ token }) => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await axios.get("https://api.marktube.tv/v1/book", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(books.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, [token]);

  return (
    <div>
      <h1>Home</h1>
      {books.map(book => (
        <Book />
      ))}
    </div>
  );
};

export default Home;
