function createBook(title,author,pages){
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        
        /*
        bookChapters: {
            chap1:"fundamentals",
            chap2: "1st law",
        },
        */

        printBook: function(){
            console.log("printing book...");
        }
    }
    return book;
}

const book1 = createBook("Vendedor de sonhos", "Augusto", 300);
console.log(book1)
book1.color = "white";
console.log(book1)

const book2 = createBook("mar azul", "felipe", 82);
console.log(book2)
