/* DIFFERENT ITEM TYPES DATA STRUCTURES */

// A section could have multiple items, that could be 'description' or 'question'
export const Section = {
  sectionTitle: '',
  sectionDescription: '',
  items: []
};

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
  selAnwser: -1 // Means that there's no selected anwser
};

export const MultipleQuestion = {
  itemType: 'question',
  questionType: 'multiple',
  title: '',
  // answers array is an array of strings
  answers: [],
  selAnwser: -1
};
