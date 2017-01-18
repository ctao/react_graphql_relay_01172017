import '../../css/styles.scss';

import React, {Component, PropTypes} from 'react';

import {BookForm} from './BookForm';

export class App extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.props.onDelete(event.target.value);
    }

    render() {
        return (
            <div className="app-container">
                <h1>{'Welcome to React/GraphQL/Relay!'}</h1>
                <h2>{this.props.message}</h2>
                <table className = 'book-table'>
                    <tbody>
                        <tr>
                            <th>{'Book ID'}</th>
                            <th>{'Title'}</th>
                            <th>{'Category'}</th>
                            <th>{'Price'}</th>
                            <th>{'Author'}</th>
                        </tr>
                        {
                            this.props.books.map((book) => {
                                return (
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.category}</td>
                                        <td>{book.price}</td>
                                        <td>{book.author.fullName}</td>
                                        <button onClick = {this.onClick} value={book.id}>{'Delete'}</button>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <BookForm onSave = {this.props.onSave}/>
            </div>
        );
    }

}

App.propTypes = {
    message: PropTypes.string,
    books: PropTypes.array,
    authors: PropTypes.array,
    onSave: PropTypes.func,
    onDelete: PropTypes.func
};
