const questions = [
    {
      q: "Quando tem trabalho em grupo você:",
      a: [
        { text: "Faz tudo", score: 2 },
        { text: "Ajuda um pouco", score: 1 },
        { text: "Deixa pra depois", score: 0 }
      ]
    },
    {
      q: "Seu nível de foco é:",
      a: [
        { text: "Altíssimo", score: 2 },
        { text: "Médio", score: 1 },
        { text: "Inexistente", score: 0 }
      ]
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function startQuiz() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
  
  function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = q.q;
  
    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
  
    q.a.forEach(answer => {
      let btn = document.createElement("button");
      btn.innerText = answer.text;
      btn.onclick = () => {
        score += answer.score;
        current++;
  
        if (current < questions.length) {
          loadQuestion();
        } else {
          showResult();
        }
      };
  
      answersDiv.appendChild(btn);
    });
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  
    let text = "";
  
    if (score <= 1) {
      text = "💀 Nenhuma mente funcionando";
    } else if (score <= 3) {
      text = "😂 Duas mentes funcionando (milagre)";
    } else {
      text = "👑 Todas funcionando (raro!)";
    }
  
    document.getElementById("resultText").innerText = text;
  }
  
  function restart() {
    current = 0;
    score = 0;
  
    document.getElementById("result").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
  }