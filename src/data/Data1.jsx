const dataForPython = [
    {
      question: "Python'da \"Merhaba Dünya\" çıktısı almak için doğru sentaks nedir?",
      incorrectAnswers: [
        "echo \"Hello World\"",
        "p(\"Hello World\")",
        "echo(\"Hello World\");",
      ],
      correctAnswer: "print(\"Hello World\")",
    },
  
    {
      question:
        "Hangisi geçerli bir değişken adı DEĞİLDİR?",
      incorrectAnswers: [
        "_myvar",
        "my_var",
        "Myvar",
      ],
      correctAnswer: "my-var",
    },
    {
      question: "Python dosyaları için doğru dosya uzantısı nedir?",
      incorrectAnswers: [
        ".pyt",
        ".pyth",
        ".pt"],
      correctAnswer: ".py",
    },
    {
      question: "Python'da bir değişkenin veya nesnenin türünü çıkarmak için doğru sentaks nedir?",
      incorrectAnswers: [
        "print(typeof(x))",
        "print(typeOf(x))",
        "print(typeof x)"],
      correctAnswer: "print(type(x))",
    },
    {
      question: "Bir döngüyü durdurmak için hangi ifade kullanılır?",
      incorrectAnswers: [
        "stop",
        "return",
        "exit",
      ],
      correctAnswer: "break",
    },
    {
      question: "How do you insert a comment in a CSS file?",
      incorrectAnswers: [
        "' this is a comment",
        "// this is a comment",
        "// this is a comment //",
      ],
      correctAnswer: "/* this is a comment */",
    },
    {
      question: "Python'da while döngüsü yazmaya nasıl başlarsınız?",
      incorrectAnswers: [
        "x > y while {",
        "while x > y {",
        "while (x > y)"],
      correctAnswer: "while x > y:",
    },
    {
      question: "İki değeri karşılaştırmak için hangi operatör kullanılabilir?",
      incorrectAnswers: [
        "=",
        "><",
        "<>",
      ],
      correctAnswer: "==",
    },
  ];
  
  export default dataForPython;