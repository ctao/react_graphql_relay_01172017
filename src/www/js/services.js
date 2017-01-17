
export const getMessage = () => {
    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: '{"query":"query {message}", "variables":null}'
    })
    .then((res) => res.json())
    .then((results) => {
        return results.data.message;
    });
};

export const getBooks = () => {
    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: '{"query":"query {books {id, title, category, price}}", "variables":null}'
    })
    .then((res) => res.json())
    .then((results) => {
        return results.data;
    });
};
