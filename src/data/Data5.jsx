const dataForJs = [
    {
      question: "JavaScript'i hangi HTML öğesinin içine koyuyoruz?"
     ,
      incorrectAnswers: [
        "<js>",
        "<scripting>",
        "<javascript>",
      ],
      correctAnswer: "<script>",
    },
  
    {
      question:
        "Bir uyarı kutusuna \"Hello World\" nasıl yazılır?",
      incorrectAnswers: [
        "msgBox(\"Hello World\");",
        "alertBox(\"Hello World\");",
        "msg(\"Hello World\");",
      ],
      correctAnswer: "alert(\"Hello World\");",
    },
    {
      question: "JavaScript'te bir IF ifadesi nasıl yazılır?",
      incorrectAnswers: [
        "if i == 5 then",
        "if i = 5 then",
        "if i = 5"],
      correctAnswer: "if (i == 5)",
    },
    {
      question: "FOR döngüsü nasıl başlar?",
      incorrectAnswers: [
        "for (i <= 5; i++)",
        "for i = 1 to 5",
        "for (i = 0; i <= 5)"],
      correctAnswer: "for (i = 0; i <= 5; i++)",
    },
    {
      question: "Bir JavaScript dizisi yazmanın doğru yolu nedir?",
      incorrectAnswers: [
        "var colors = \"red\", \"green\", \"blue\"",
        "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
        "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
      ],
      correctAnswer: "var colors = [\"red\", \"green\", \"blue\"]",
    },
    {
      question: "7.25 sayısını en yakın tamsayıya nasıl yuvarlarsınız?",
      incorrectAnswers: [
        "Math.rnd(7.25) ",
        "rnd(7.25)",
        "round(7.25)",
      ],
      correctAnswer: "Math.round(7.25) ",
    },
    {
      question: "Kullanıcı bir HTML öğesini tıkladığında hangi event gerçekleşir?",
      incorrectAnswers: [
        "onmouseclick",
        "onmouseover",
        "onchange"],
      correctAnswer: "onclick",
    },
    {
      question: "Bir JavaScript değişkenini nasıl bildirirsiniz?",
      incorrectAnswers: [
        "variable carName;",
        "v carName;",
        "int carName",
      ],
      correctAnswer: "var carName;",
    },
  ];
  
  export default dataForJs;