const myLibrary = [];

function Book (name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(this.nameandauthor, this.pages, this.read)
    }
}

function addBooktoLibrary() {

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    const newBook = new Book(title.value, author.value, pages.value, isRead.value);
    myLibrary.push(newBook);

    displayBooks();
}


function displayBooks() {
    document.getElementById("cardzone").innerHTML = ""

    myLibrary.forEach((Book) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card")

        const bookTitle = document.createElement("p");
        bookTitle.textContent = Book.name;
        bookTitle.classList.add("data")
        newDiv.appendChild(bookTitle)

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = Book.author;
        bookAuthor.classList.add("data")
        newDiv.appendChild(bookAuthor);

        const bookPages = document.createElement("p");
        bookPages.textContent = Book.pages
        bookPages.classList.add("data")
        newDiv.appendChild(bookPages);

        const bookRead = document.createElement("p")
        bookRead.textContent = Book.read;
        bookPages.classList.add("data")
        newDiv.appendChild(bookRead);

        const selectDad = document.getElementById("cardzone");
        selectDad.appendChild(newDiv);

       
    })

}

function menubook() {
    const menu = document.createElement("div");
    menu.id = "menu"
    menu.innerHTML="Test";
    const cardZoneEle= document.getElementById("cardzone")
    cardZoneEle.appendChild(menu);
}

document.getElementById("addbook").addEventListener("click", menubook )