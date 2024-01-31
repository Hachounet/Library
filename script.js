const myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(this.title, this.author, this.pages, this.read)
    }
}


function addBooktoLibrary() {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks();
}


function displayBooks() {
    document.getElementById("cardzone").innerHTML = "";

    myLibrary.forEach((book, index) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card");
        newDiv.dataset.number = index;

        const bookTitle = document.createElement("p");
        bookTitle.textContent = book.title;
        bookTitle.classList.add("data", "bookTitle");
        newDiv.appendChild(bookTitle);

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = book.author;
        bookAuthor.classList.add("data", "bookAuthor");
        newDiv.appendChild(bookAuthor);

        const bookPages = document.createElement("p");
        bookPages.textContent = book.pages;
        bookPages.classList.add("data", "bookPages");
        newDiv.appendChild(bookPages);

        const bookRead = document.createElement("input");
        bookRead.setAttribute("type", "checkbox");
        bookRead.checked = book.read;
        bookRead.id = "checkbox" + index;
        bookRead.className = "bookRead";
        bookRead.addEventListener("click", () => {
            myLibrary[index].read = bookRead.checked;
        });
        newDiv.appendChild(bookRead);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
        newDiv.appendChild(deleteBtn);

        const selectDad = document.getElementById("cardzone");
        selectDad.appendChild(newDiv);
    });
}

function menuBook() {
    let menu = document.getElementById("menu");

    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "grid" : "none";

}


document.getElementById("addbook").addEventListener("click", menuBook );
document.getElementById("addToBtn").addEventListener("click", addBooktoLibrary);