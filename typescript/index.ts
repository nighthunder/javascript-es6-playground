interface Book{
    title: string
    pages: number
    publicationDate: Date
}

function printTitle(publication: Book) {
    console.log(publication.title);
}

let myBook: Book = {
    title: "Jumanji",
    pages: 684,
    publicationDate: new Date("2023-14-05")
}

printTitle(myBook);

