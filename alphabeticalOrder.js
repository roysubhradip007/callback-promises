function arrangeBooks(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles);
}
function logTitlesInOrder(titles) {
    const sortedTitles = titles.sort();
    console.log(sortedTitles);
}