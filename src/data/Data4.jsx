const dataforcpp = [
    {
      question: "C++'da \"Merhaba Dünya\" çıktısı almak için doğru sentaks nedir?",
      incorrectAnswers: [
        "Console.WriteLine(\"Hello World\");",
        "print (\"Hello World\");",
        "System.out.println(\"Hello World\");",
      ],
      correctAnswer: "cout << \"Hello World\"; ",
    },
  
    {
      question:
        "Metni depolaması gereken bir değişken oluşturmak için hangi veri türü kullanılır?",
      incorrectAnswers: [
        "String",
        "myString",
        "Txt",
      ],
      correctAnswer: "string ",
    },
    {
      question: "Sayısal değeri 5 olan bir değişkeni nasıl yaratırsınız?",
      incorrectAnswers: [
        "double x = 5;",
         "num x = 5",
          "x = 5;"],
      correctAnswer: "int x = 5;",
    },
    {
      question: "Sayısal değeri 2.8 olan bir float değişkenini nasıl yaratırsınız?",
      incorrectAnswers: [
        "int x=2.8",
         "x=2.8",
         "byte x=2.8"],
      correctAnswer: "double x = 2.8; ",
    },
    {
      question: "Bir stringin uzunluğunu bulmak için hangi metot kullanılabilir?",
      incorrectAnswers: [
        "getLength()",
        "getSize()",
        "len()",
      ],
      correctAnswer: "length()",
    },
    {
      question: "Hangi başlık dosyası girdi ve çıktı nesneleri ile çalışmamızı sağlar?",
      incorrectAnswers: [
        "#include <iosstring>",
        "#include <stream>",
        "#include <inputstr>",
      ],
      correctAnswer: "#include <iostream>",
    },
    {
      question: "C++'da sınıf oluşturmak için hangi anahtar kelime kullanılır?",
      incorrectAnswers: [
        "className",
        "class()",
        "MyClass"],
      correctAnswer: "class",
    },
    {
      question: "C++'da bir fonksiyonu nasıl yaratırsınız?",
      incorrectAnswers: [
        "functionName[]",
        "functionName.",
        "(functionName)",
      ],
      correctAnswer: "functionName()",
    },
  ];
  
  export default dataforcpp;