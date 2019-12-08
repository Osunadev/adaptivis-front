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

/*
 ** 'items' array is composed of questions or descriptions
 ** There are 2 item types: 'question' and 'description'
 ** type of questions: 'likert' and 'multiple'
 */

const section = {
  sectiontTitle: 'Motivation',
  sectionDescr:
    'The following questions are about your motivation and attitudes about this class. Remember that there are no right or wrong answers, just answer as accurately as possible. Use the scale below to answer the questions. If you think the statement is very true for you, circle the number 7; If a statement is not entirely true for you, circle the number 1. If the statement is more or less true for you, find the number between 1 and 7 that best describes you.',
  items: [
    {
      itemType: 'question',
      question: {
        type: 'likert',
        title:
          '1.- In a class like this, I prefer course learning materials that really challenges me so I can learn new things.',
        topScale: 7,
        leftText: 'NOT AT ALL TRUE OF ME',
        rightText: 'VERY TRUE OF ME',
        selAnwser: 5
      }
    },
    {
      itemType: 'question',
      question: {
        type: 'multiple',
        title: 'Este es el titulo',
        answers: ['a) Hello', 'b) Hi', 'c) Whats up'],
        selAnwser: 1
      }
    },
    {
      itemType: 'description',
      description: {
        title: 'Confidentiality',
        text:
          'The information obtained will be confidential, your name will not be made public by any means. No external person will have access to individual information. The analyzes will be individual or group, and only in this way will they be presented as a research report and will only be used for educational purposes only. In no case will personal data be used when publishing or using these materials.'
      }
    }
  ]
};
