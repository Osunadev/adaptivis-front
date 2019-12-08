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
  answers: [],
  selAnwser: -1
};

export const Section = {
  sectionTitle: '',
  sectionDescription: '',
  items: []
};
