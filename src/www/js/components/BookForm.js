import '../../css/styles.scss';

import React, {Component, PropTypes} from 'react';

export class BookForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            category: 'Romance',
            price: 0,
            authorId: 1
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onClick() {
        console.log(this.state);

        this.props.onSave(this.state);
    }

    render() {
        return (
            <form>
                <div className = "book-form">
                    <label htmlFor="book-title">{'Title'}</label>
                    <input type="text" id="book-title" name="title"
                        value={this.state.title} onChange={this.onChange} />

                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" value={this.state.category} onChange={this.onChange}>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Inspirational">Inspirational</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Humor">Humor</option>
                    </select>

                    <label htmlFor="author">Author Id</label>
                    <select id="author-id" name="authorId" value={this.state.authorId} onChange={this.onChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>

                    <label htmlFor="price">{'Price'}</label>
                    <input type="text" id="price" name="price"
                        value={this.state.price} onChange={this.onChange} />

                    <button type="button" onClick={this.onClick}>{'Save'}</button>
                </div>
            </form>
        );
    }
}

BookForm.propTypes = {
    onSave: PropTypes.func
};
