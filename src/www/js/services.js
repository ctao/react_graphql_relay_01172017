
export const query = () => {
    const query = `
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

    const variables = null;

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
