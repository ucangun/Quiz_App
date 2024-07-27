const quizData = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperText Markdown Language",
        "HyperTransfer Markup Language",
        "HyperText Machine Language",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<css>", "<script>", "<link>"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Which attribute is used to provide an alternative text for an image, if the image cannot be displayed?",
      options: ["title", "src", "alt", "href"],
      correctOption: 2,
      points: 10,
    },
    {
      question:
        "Which HTML element is used to specify a footer for a document or section?",
      options: ["<bottom>", "<footer>", "<section>", "<foot>"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        "<a href='http://example.com'>Example</a>",
        "<a>http://example.com</a>",
        "<link>http://example.com</link>",
        "<url>http://example.com</url>",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which element is used to create a number list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "What does the <iframe> tag do?",
      options: [
        "Embeds another document within the current HTML document",
        "Creates a new division",
        "Creates a form",
        "Defines an image",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which attribute is used to define inline styles?",
      options: ["font", "class", "styles", "style"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "Which HTML element defines the title of a document?",
      options: ["<meta>", "<head>", "<title>", "<header>"],
      correctOption: 2,
      points: 10,
    },
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: [".demo", "*demo", "#demo", "demo"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "Which property is used to change the background color?",
      options: ["background-color", "color", "bgcolor", "background"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["fgcolor", "text-color", "color", "font-color"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      options: [
        "h1 {background-color:#FFFFFF;}",
        "h1.all {background-color:#FFFFFF;}",
        "all.h1 {background-color:#FFFFFF;}",
        "h1 {color:#FFFFFF;}",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which CSS property controls the text alignment?",
      options: ["align", "text-align", "text", "font-align"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "How do you make each word in a text start with a capital letter?",
      options: [
        "text-transform:capitalize",
        "text-style:capitalize",
        "transform:capitalize",
        "You can't do that with CSS",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["font-family", "font-style", "font-weight", "font-size"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How do you make the text bold?",
      options: [
        "font-weight:bold;",
        "font:bold;",
        "font:boldweight;",
        "style:bold;",
      ],
      correctOption: 0,
      points: 10,
    },
  ],
  javascript: [
    {
      question: "Which is the most popular JavaScript framework?",
      options: ["Angular", "React", "Svelte", "Vue"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Mozilla", "Microsoft", "Sun Microsystems"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "<script href='script.js'>",
        "<script name='script.js'>",
        "<script src='script.js'>",
        "<script file='script.js'>",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "msg('Hello World');",
        "alertBox('Hello World');",
        "msgBox('Hello World');",
        "alert('Hello World');",
      ],
      correctOption: 3,
      points: 10,
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function = myFunction()",
        "function myFunction()",
        "function:myFunction()",
        "function => myFunction()",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: [
        "call myFunction()",
        "call function myFunction()",
        "myFunction()",
        "Call.myFunction()",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: ["if i == 5 then", "if (i == 5)", "if i = 5 then", "if i = 5"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "How does a FOR loop start?",
      options: [
        "for (i = 0; i <= 5)",
        "for i = 1 to 5",
        "for (i = 0; i <= 5; i++)",
        "for (i <= 5; i++)",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How can you add a comment in JavaScript?",
      options: [
        "<!--This is a comment-->",
        "//This is a comment",
        "'This is a comment",
        "!!This is a comment!!",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: [
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "var colors = ['red', 'green', 'blue']",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = 'red', 'green', 'blue'",
      ],
      correctOption: 1,
      points: 10,
    },
  ],
  react: [
    {
      question: "What is React?",
      options: [
        "A JavaScript framework",
        "A JavaScript library for building user interfaces",
        "A backend framework",
        "A database",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Who maintains React?",
      options: ["Google", "Microsoft", "Facebook", "Twitter"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A real DOM",
        "A copy of the actual DOM",
        "An API for creating DOM nodes",
        "A JavaScript representation of the real DOM",
      ],
      correctOption: 3,
      points: 10,
    },
    {
      question: "Which method is used to create components in React?",
      options: [
        "createComponent()",
        "React.create()",
        "React.createElement()",
        "createElement()",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How do you handle events in React?",
      options: [
        "Using the 'on' prefix",
        "Using addEventListener",
        "Using event binding",
        "Using event listeners",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What are the phases of the React component lifecycle?",
      options: [
        "Initialization, Mounting, Updating, Unmounting",
        "Initialization, Rendering, Updating, Destroying",
        "Setup, Mounting, Rendering, Destroying",
        "Mounting, Updating, Unmounting, Rendering",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How do you pass data to a child component in React?",
      options: [
        "Using states",
        "Using methods",
        "Using props",
        "Using context",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question: "What is a state in React?",
      options: [
        "An immutable object",
        "A mutable object",
        "A function",
        "A method",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Which hook is used to handle state in functional components?",
      options: ["useState", "useEffect", "useReducer", "useContext"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How do you update the state in a class component?",
      options: [
        "this.updateState()",
        "this.modifyState()",
        "this.setState()",
        "this.changeState()",
      ],
      correctOption: 2,
      points: 10,
    },
  ],
};

export default quizData;
