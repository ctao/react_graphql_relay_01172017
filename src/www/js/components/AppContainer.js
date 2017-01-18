import '../../css/styles.scss';

import React, {Component} from 'react';

import {query, insertBook, deleteBook} from '../services';

import {App} from './App';

export class AppContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            books: [],
            authors: []
        };

        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        query().then((results) => {
            console.log(results);
            this.setState({
                books: results.books,
                message: results.message,
                authors: results.authors
            });
        });
    }

    onSave(bookForm) {
        insertBook(
            bookForm.title,
            bookForm.category,
            parseFloat(bookForm.price),
            parseInt(bookForm.authorId)
        ).then(() => {
            this.getData();
        });
    }

    onDelete(bookId) {
        console.log('Deleting ' + bookId);
        deleteBook(bookId).then(() => {
            console.log('Delete success');
            this.getData();
        });
    }

    render() {
        return (
            <App
                message = {this.state.message}
                books = {this.state.books}
                onSave = {this.onSave}
                onDelete = {this.onDelete}
            />
        );
    }
}
