import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.saveHandler}>
      <input 
        onChange={props.handleChangeComment} 
        value={props.comment}
        className="comment-input-text" 
        type="text" 
        placeholder="Add comment... "
        />
    </form>
  );
};

export default CommentInput;
