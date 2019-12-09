// Different types of items
// itemType could be 'description' or 'question'
export const Description = {
  itemType: 'description',
  title: '',
  text: ''
};

export const LikertQuestion = {
  itemType: 'question',
  questionType: 'likert',
  title: '',
  topScale: 7,
  leftText: '',
  rightText: '',
  selAnwser: -1
};

export const MultipleQuestion = {
  itemType: 'question',
  questionType: 'multiple',
  title: '',
  // answers array is an array of strings
  answers: [],
  selAnwser: -1
};

// A section could have multiple items, that could be 'description' or 'question'
export const Section = {
  sectionTitle: '',
  sectionDescription: '',
  items: []
};
