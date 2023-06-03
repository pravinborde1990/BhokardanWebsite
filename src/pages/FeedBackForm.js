import React, { useState } from 'react';

const FeedBackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any further action with the rating and comment
    // e.g., submit the feedback to an API or store it in a database

    // Reset the form
    setRating(0);
    setComment('');
  };

  const StarRating = () => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div className="star-rating">
        <label htmlFor="rating">Rating:</label>
        {stars.map((value) => (
          <span
            key={value}
            className={value <= rating ? 'star selected' : 'star'}
            onClick={() => handleRatingChange(value)}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <StarRating />
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedBackForm;
