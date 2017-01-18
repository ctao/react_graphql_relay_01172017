
export const query = () => {
    const
        variables = null,
        query = `
            query {
                message,
                books {
                    id
                    title
                    category
                    price
                    author {
                        id
                        firstName
                        lastName
                        fullName
                    }
                },
                authors {
                    id
                    lastName
                    firstName
                    fullName
                    books {
                        id
                        title
                        category
                        price
                    }
                }
            }
        `;

    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({query, variables})
    })
    .then((res) => res.json())
    .then((results) => {
        console.log(results);
        if (results.error) {
            console.log(results.error);
            return;
        }

        return {
            message: results.data.message,
            books: results.data.books,
            authors: results.data.authors
        };
    });
};
/*

mutation insertBook($book: InsertBookType) {
  insertBook(book: $book) {
  	id
    title
  }
}

 */
export const insertBook = (title, category, price, authorId) => {
    const
        query = `
            mutation insertBook($book: InsertBookType) {
                insertBook(book: $book) {
                    id
                    title
                    category
                    price
                    author {
                        id
                        fullName
                    }
                }
            }
        `,
        variables = {
            book: {
                title,
                category,
                price,
                authorId
            }
        };

    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({query, variables, operationName: 'insertBook'})
    })
    .then((res) => res.json())
    .then((results) => {
        console.log(results);
        if (results.error) {
            console.log(results.error);
            throw results.error;
        }

        return results.data.insertBook;
    });
};

export const deleteBook = (bookId) => {
    const
        query = `
            mutation deleteBook($bookId: ID) {
                deleteBook(bookId: $bookId)
            }
        `,
        variables = {
            bookId
        };

    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({query, variables, operationName: 'deleteBook'})
    })
    .then((res) => res.json())
    .then((results) => {
        console.log(results);
        if (results.error) {
            console.log(results.error);
            throw results.error;
        }

        return results.data;
    });
};
