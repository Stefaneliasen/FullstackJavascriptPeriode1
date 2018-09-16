interface IBook{
    title: string;
    readonly author: string;
    published?: string;
    pages?: number;
}

function bookInfo(ibook: IBook): void{
    console.log("Title: " + ibook.title + " the author is: " +ibook.author + " it was published " + ibook.published + " and is " + ibook.pages +" long");
}

var theBook = {
    title: "Life of Stefan",
    author: "Mathias Bartels Jensenius",
    published: "10-09-2018",
    pages: 2
}
var theBook2 = {
    title: "Life of Stefan",
    author: "Mathias Bartels Jensenius",
    pages: 2
}
var theBook3 = {
    title: "Life of Stefan",
    author: "Mathias Bartels Jensenius",
    published: "10-09-2018",
    
}
theBook.author = "Jimmy";
bookInfo(theBook);
bookInfo(theBook2);
bookInfo(theBook3);