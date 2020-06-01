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
  selOption: -1 // Means that there's no selected anwser
};

export const MultipleQuestion = {
  itemType: 'question',
  questionType: 'multiple',
  title: '',
  // options array is an array of strings containing the multiple answer options
  options: [],
  selOption: -1
};

export const CheckboxGridQuestion = {
  itemType: 'question',
  questionType: 'checkboxgrid',
  title: '',
  // options array is an array of objects
  // [ { optionText: '', selColumn: -1 }, ...]
  // selColumn: -1 , means that there's no column box selected (nor left or right)
  options: [],
  leftColumnText: 'Sí',
  rightColumnText: 'No'
};

export const OpenQuestion = {
  itemType: 'question',
  questionType: 'open',
  title: '',
  answer: ''
};
