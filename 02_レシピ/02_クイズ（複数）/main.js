// 登場人物たち
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const div1 = document.getElementById("div1")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

// 裏方さんたち
let quizNumber = 0
const quizzes = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        isCorrect: false,
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        isCorrect: false,
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        isCorrect: true,
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        isCorrect: false,
        feedback: "残念！ひとつ少ないよ。",
      },
      {
        text: "２",
        isCorrect: true,
        feedback: "正解！１でも３でもないよ！",
      },
      {
        text: "３",
        isCorrect: false,
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choices: [
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        isCorrect: true,
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },
      {
        text: "丸子城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
    ],
  },
]

// 共通の処理①
// quizNumber番目の問題を画面に表示する
const reloadQuiz = function (quizNumber) {
  // quizzes[quizNumber] は使いまわすので、定数に入れておく
  const quiz = quizzes[quizNumber]

  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  div1.textContent = ""

  for (let i = 0; i < quiz.choices.length; i++) {
    const newDiv = document.createElement("div")
    const newBt = document.createElement("button")
    newBt.innerHTML = "choice" + i + 1
    newBt.id = "choice" + [i + 1]
    // 選択肢（ボタン）の中身を表示
    newBt.textContent = quiz.choices[i].text
    newDiv.appendChild(newBt)
    div1.appendChild(newDiv)
    newBt.onclick = function () {
      const choice = quizzes[quizNumber].choices[i]
      feedback.textContent = choice.feedback
      if (choice.isCorrect) {
        if (quizNumber < quizzes.length - 1) {
          // 次の問題があれば、次の問題ボタンを表示
          nextQuizButton.classList.remove("hidden")
        } else {
          // 次の問題がなければ、結果を表示
        }
      }
    }
  }

  // フィードバックを削除
  feedback.textContent = ""

  // 次の問題ボタンを隠す
  nextQuizButton.classList.add("hidden")
}

// 共通の処理②

// 次の問題ボタンを押したら
nextQuizButton.onclick = function () {
  // 問題番号を１増やす
  quizNumber += 1
  // quizNumber番目の問題を読み込む
  reloadQuiz(quizNumber)
}

// 0番目のクイズを表示
reloadQuiz(0)
