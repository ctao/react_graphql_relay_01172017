import '../css/styles.scss';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {getBooks} from './services';

class App extends Component {

    render() {
        return (
            <div>
                <h1>{'Welcome to React/GraphQL/Relay!'}</h1>
                <h2>{this.props.message}</h2>
                <table className = "book-table">
                    {
                        this.props.books.map((book) => {
                            return (
                                <tr key = {book.id}>
                                    <td>
                                        {book.id}
                                    </td>
                                    <td>
                                        {book.title}
                                    </td>
                                    <td>
                                        {book.category}
                                    </td>
                                    <td>
                                        {book.price}
                                    </td>
                                </tr>
                            )
                        })
                    }
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
            books: []
        };
    }

    componentDidMount() {
        getBooks().then((results => {
            this.setState({
                books: results.books
            });
        }));
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
    books: PropTypes.array
};

ReactDOM.render(<AppContainer />, document.querySelector('main'));
