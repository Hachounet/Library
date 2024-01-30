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
    let read = document.getElementById("read").value;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks();
}


function displayBooks() {
    document.getElementById("cardzone").innerHTML = ""

    myLibrary.forEach((Book) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card")

        const bookTitle = document.createElement("p");
        bookTitle.textContent = Book.title;
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
        bookRead.classList.add("data")
        newDiv.appendChild(bookRead);

        const selectDad = document.getElementById("cardzone");
        selectDad.appendChild(newDiv);

       
    })

}

function menuBook() {
    let menu = document.getElementById("menu");

    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "grid" : "none";

}
/*
function menubook() {
    const menu = document.createElement("div");
    menu.id = "menu"
    const cardZoneEle= document.getElementById("cardzone")
    cardZoneEle.appendChild(menu);
    
    const menuText = document.createElement("p")
    menuText.id = "menuText"
    menuText.innerHTML = "Hey you"
    menu.appendChild(menuText);

    const addTitle = document.createElement("input")
    addTitle.id = "title"
    addTitle.setAttribute("type", "text")
    addTitle.setAttribute("placeholder", "Title")
    addTitle.setAttribute("value", "Title" )
    menu.appendChild(addTitle);

    const addAuthor = document.createElement("input");
    addAuthor.id= "author";
    addAuthor.setAttribute("placeholder", "Author");
    addAuthor.innerHTML="Author";
    menu.appendChild(addAuthor);

    const addPages = document.createElement("input");
    addPages.id = "pages";
    addPages.setAttribute("placeholder", "Pages");
    addPages.innerHTML="Pages";
    menu.appendChild(addPages);

    const addRead = document.createElement("input");
    addRead.id = "read";
    addRead.setAttribute("placeholder", "Read ?");
    addRead.innerHTML="Read";
    menu.appendChild(addRead);

    const buttonsZone = document.createElement("div");
    buttonsZone.id = "buttonsZone";
    
    const addToLibrary = document.createElement("button");
    addToLibrary.id = "addToBtn";
    addToLibrary.textContent = "Add book";
    
    buttonsZone.appendChild(addToLibrary);
    menu.appendChild(buttonsZone);

    document.getElementById("addToBtn").addEventListener("click", addBooktoLibrary);
}
*/

document.getElementById("addbook").addEventListener("click", menuBook );
document.getElementById("addToBtn").addEventListener("click", addBooktoLibrary);