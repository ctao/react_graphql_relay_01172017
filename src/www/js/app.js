import '../css/styles.scss';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {query} from './services';

class App extends Component {

    render() {
        return (
            <div>
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
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

class AppContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            books: [],
            authors: []
        };
    }

    componentDidMount() {
        query().then((results) => {
            console.log(results);
            this.setState({
                books: results.books,
                message: results.message,
                authors: results.authors
            });
        });
    }

    render() {
        return (
            <App
                message = {this.state.message}
                books = {this.state.books}
            />
        );
    }
}

App.propTypes = {
    message: PropTypes.string,
    books: PropTypes.array,
    authors: PropTypes.array
};

ReactDOM.render(<AppContainer />, document.querySelector('main'));
