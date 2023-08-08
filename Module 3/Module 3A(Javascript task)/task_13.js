const book = {
    title: 'Harry Potter',
    description: 'Fantacy',
    numberOfPages: 103,
    author: 'Tolkien',
    reading: true,
    toggleReadingStatus: function() {
        if(book.reading === true) {
            book.reading = false
        } else {
            book.reading = true
        }
    }
}

book.reading = false;
book.toggleReadingStatus();
console.log(book.reading);
