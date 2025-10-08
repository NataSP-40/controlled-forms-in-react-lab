import { useState } from 'react'
import './Bookshelf.css'

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' }); // state just for the form

    const handleInputChange =(event) => {
        // creating the new version of the newBook
        const updatedBook = {...newBook, [event.target.name]: event.target.value }
            setNewBook(updatedBook);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newBook.title.trim() && !newBook.author.trim()) { // avoid adding emply records !OPTIONAL
            return; // if nothing typed don't add empty book
        }
        setBooks((prevBooks) => [...prevBooks, newBook]); //adding the new book to the books array
        // use the functional form of setBooks to reliably get the latest state
        // spread the previous books into a new array and append newBook
        setNewBook({ title: '', author: '' }); // reset the newBook state to clear inputs
    }

    return (

        <div className="bookshelfDiv">
            <div className="formDiv">
                {/* <h3>Add a Book</h3> */}
                {/* Form will go here */}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={newBook.title} onChange={handleInputChange} placeholder="Book Title" /> <br/>
                    <input type="text" name="author" value={newBook.author} onChange={handleInputChange} placeholder="Author" /> <br/>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        <div className="bookCardsDiv">
            {/* Book cards will display here */}
            <h3>Books:</h3>
            {books.map((book, i) => (
                <div key={i} className="bookCard">
                    <strong>{book.title}</strong> by {book.author}
                </div>
            ))}
        </div>
        </div>
    )
}

export default Bookshelf;