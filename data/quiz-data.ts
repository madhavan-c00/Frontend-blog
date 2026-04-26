export interface Choice {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  choices: Choice[];
  correctAnswerId: string;
  explanation: string;
}

export interface TechQuiz {
  techId: string;
  questions: QuizQuestion[];
}

export const quizData: Record<string, TechQuiz> = {
  javascript: {
    techId: 'javascript',
    questions: [
      {
        id: 'js-1',
        question: 'Which of the following is not a primitive data type in JavaScript?',
        choices: [
          { id: 'a', text: 'String' },
          { id: 'b', text: 'Number' },
          { id: 'c', text: 'Object' },
          { id: 'd', text: 'Boolean' },
        ],
        correctAnswerId: 'c',
        explanation: 'In JavaScript, primitives include String, Number, Boolean, Undefined, Null, Symbol, and BigInt. Object and Array are non-primitive types.',
      },
      {
        id: 'js-2',
        question: 'What is the output of `typeof null`?',
        choices: [
          { id: 'a', text: '"null"' },
          { id: 'b', text: '"undefined"' },
          { id: 'c', text: '"object"' },
          { id: 'd', text: '"number"' },
        ],
        correctAnswerId: 'c',
        explanation: 'This is a long-standing bug in JavaScript where `typeof null` returns "object".',
      },
      {
        id: 'js-3',
        question: 'Which keyword is used to declare a block-scoped variable?',
        choices: [
          { id: 'a', text: 'var' },
          { id: 'b', text: 'let' },
          { id: 'c', text: 'const' },
          { id: 'd', text: 'Both let and const' },
        ],
        correctAnswerId: 'd',
        explanation: 'Both `let` and `const` provide block scoping, while `var` provides function scoping.',
      },
    ],
  },
  react: {
    techId: 'react',
    questions: [
      {
        id: 'react-1',
        question: 'What hook is used to handle side effects in a functional component?',
        choices: [
          { id: 'a', text: 'useState' },
          { id: 'b', text: 'useContext' },
          { id: 'c', text: 'useEffect' },
          { id: 'd', text: 'useReducer' },
        ],
        correctAnswerId: 'c',
        explanation: '`useEffect` is designed for side effects like data fetching, subscriptions, and DOM manual changes.',
      },
      {
        id: 'react-2',
        question: 'How many elements can a React component return?',
        choices: [
          { id: 'a', text: 'Single element' },
          { id: 'b', text: 'Multiple elements' },
          { id: 'c', text: 'Exactly two' },
          { id: 'd', text: 'It depends on the props' },
        ],
        correctAnswerId: 'a',
        explanation: 'React components must return a single root element (which can contain many children) or a fragment `<>...</>`.',
      },
    ],
  },
  mongodb: {
    techId: 'mongodb',
    questions: [
      {
        id: 'mongo-1',
        question: 'What format does MongoDB use to store data internally?',
        choices: [
          { id: 'a', text: 'JSON' },
          { id: 'b', text: 'XML' },
          { id: 'c', text: 'BSON' },
          { id: 'd', text: 'CSV' },
        ],
        correctAnswerId: 'c',
        explanation: 'MongoDB stores data internally as BSON (Binary JSON), which allows for more data types than standard JSON.',
      },
    ],
  },
};
