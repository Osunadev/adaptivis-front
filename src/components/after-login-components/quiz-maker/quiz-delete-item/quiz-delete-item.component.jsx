import React from 'react';

import { DeleteItemContainer, RemoveTextSpan } from './quiz-delete-item.styles';

const QuizDeleteItem = ({ title, itemId, onItemClick }) => (
  <DeleteItemContainer>
    <RemoveTextSpan id={itemId} onClick={onItemClick}>
      {title}
    </RemoveTextSpan>
  </DeleteItemContainer>
);

export default QuizDeleteItem;
