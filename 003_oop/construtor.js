function CreateBook(title, author, pages) {

    this.bookTitle = title;
    this.bookAuthor =author;
    this.bookPages = pages;
}

const book1 = new CreateBook("Vendedor de sonhos", "Augusto", 300);
console.log(book1)

const book2 = new CreateBook("mar azul", "felipe", 82);
console.log(book2)
