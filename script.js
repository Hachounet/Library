const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        console.log(this.title, this.author, this.pages, this.read)
    }
}


function addBooktoLibrary() {

    let titleInput = document.getElementById("title");
    let authorInput = document.getElementById("author");
    let pagesInput = document.getElementById("pages");
    let readInput = document.getElementById("read");

    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
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


        const bookRead = document.createElement("div");
        bookRead.className = "bookRead";
        bookRead.classList.add("data")
        newDiv.appendChild(bookRead);

        const bookReadLabel = document.createElement("label");
        bookReadLabel.classList.add("toggle");
        bookRead.appendChild(bookReadLabel)

        const bookReadInput = document.createElement("input");
        bookReadInput.setAttribute("type", "checkbox");
        bookReadInput.checked = book.read;
        bookReadInput.id = "checkbox" + index;
        bookReadInput.addEventListener("click", () => {
            myLibrary[index].read = bookReadInput.checked;
        });
        bookReadLabel.appendChild(bookReadInput);

        const bookReadSpan = document.createElement("span");
        bookReadSpan.classList.add("slider");
        bookReadLabel.appendChild(bookReadSpan);

        const bookReadSpan2 = document.createElement("span");
        bookReadSpan2.classList.add("labels");
        bookReadSpan2.setAttribute("data-on", "READ")
        bookReadSpan2.setAttribute("data-off", "UNREAD")
        bookReadLabel.appendChild(bookReadSpan2);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.id = "deleteBtn"+ index;


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

document.getElementById("closeBtn").addEventListener("click", menuBook);
document.getElementById("addToBtn").addEventListener("click", addBooktoLibrary);
