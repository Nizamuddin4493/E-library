/* eslint-disable camelcase */

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const Book = ({ item_id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="singlBook">
        <div>
          <p>Title</p>
          <h2>{title}</h2>
        </div>
        <div>
          <p>Auther</p>
          <h2>{author}</h2>
        </div>
        <div className="rBtn">
          <button type="button" onClick={() => { dispatch(removeBookFromApi(item_id)); }}>Remove</button>
        </div>
      </div>
    </>
  );
};
Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
