const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const booksGrid = document.querySelector(".books-grid");
  booksGrid.innerHTML = ""; // Clear existing books
  console.log("myLibrary", myLibrary);
  myLibrary.forEach((book, index) => {
    console.log("book", book);
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
        `;
    bookCard.dataset.index = index; // Set data attribute for reference
    booksGrid.appendChild(bookCard);
  });
}

document.getElementById("new-book-btn").addEventListener("click", () => {
  document.getElementById("book-form").style.display = "block";
});

document
  .getElementById("book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    this.reset();
    this.style.display = "none"; // Hide form after submission
  });

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

// Manually add a few books for initial display
addBookToLibrary("Sample Book", "Author Name", 123, false);
addBookToLibrary("Sample Book 2", "Author Name 2", 123, false);

displayBooks();
