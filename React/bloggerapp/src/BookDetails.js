function BookDetails() {
  const books = [
    {
      id: 1,
      name: "The Alchemist",
      author: "Paulo Coelho",
      price: 399
    },
    {
      id: 2,
      name: "Atomic Habits",
      author: "James Clear",
      price: 499
    },
    {
      id: 3,
      name: "Clean Code",
      author: "Robert C. Martin",
      price: 699
    }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map(book => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>Author : {book.author}</p>
          <p>Price : ₹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;