const questions = [
  { category: "Лёгкие", text: "Какой маленький ритуал делает твой обычный день заметно лучше?" },
  { category: "Лёгкие", text: "Если бы у твоей недели был саундтрек, какая песня звучала бы сейчас?" },
  { category: "Лёгкие", text: "Какое блюдо ты мог бы есть чаще, чем принято считать нормальным?" },
  { category: "Лёгкие", text: "Какое место в городе кажется тебе уютным, хотя там ничего особенного нет?" },
  { category: "Лёгкие", text: "Какой навык ты бы освоил за один вечер, если бы это было возможно?" },
  { category: "Лёгкие", text: "Что из детства до сих пор умеет мгновенно поднять тебе настроение?" },
  { category: "Лёгкие", text: "Какой самый нелепый повод заставил тебя недавно рассмеяться?" },
  { category: "Лёгкие", text: "Какое животное лучше всего передаёт твоё настроение по утрам?" },
  { category: "Лёгкие", text: "Какую вещь ты неожиданно полюбил, хотя раньше не понимал её?" },
  { category: "Лёгкие", text: "Как выглядел бы твой идеальный свободный час без планов и обязательств?" },
  { category: "Лёгкие", text: "Какой запах для тебя пахнет ощущением «я дома»?" },
  { category: "Лёгкие", text: "Какую выдуманную традицию ты бы добавил в компанию друзей?" },
  { category: "Лёгкие", text: "Что ты умеешь делать удивительно хорошо, но редко вспоминаешь об этом?" },
  { category: "Лёгкие", text: "Какой самый спонтанный план оказался лучше тщательно продуманного?" },
  { category: "Лёгкие", text: "Какую мелочь ты коллекционировал бы, если бы дома было бесконечно много места?" },
  { category: "Лёгкие", text: "На какой безобидный вопрос ты всегда готов ответить слишком подробно?" },
  { category: "Лёгкие", text: "Какой фильм или книга стали бы отличным названием для твоего сегодняшнего дня?" },
  { category: "Лёгкие", text: "Какой комплимент о твоём характере тебе особенно приятно было бы услышать?" },

  { category: "Глубокие", text: "Какое своё решение ты понял только спустя годы?" },
  { category: "Глубокие", text: "В какой момент жизни ты почувствовал, что стал больше похож на себя?" },
  { category: "Глубокие", text: "Что тебе сейчас труднее всего просить у близких?" },
  { category: "Глубокие", text: "Какую часть себя ты научился принимать не сразу?" },
  { category: "Глубокие", text: "Когда ты в последний раз изменил мнение о чём-то важном — и что на это повлияло?" },
  { category: "Глубокие", text: "Что для тебя значит быть рядом с человеком, не пытаясь его исправить?" },
  { category: "Глубокие", text: "Какое воспоминание возвращает тебе чувство устойчивости в трудный день?" },
  { category: "Глубокие", text: "Какой страх стал меньше, когда ты однажды решился посмотреть на него прямо?" },
  { category: "Глубокие", text: "По каким признакам ты понимаешь, что живёшь в согласии со своими ценностями?" },
  { category: "Глубокие", text: "Что тебе хотелось бы простить себе из прошлого?" },
  { category: "Глубокие", text: "Какую правду о себе ты узнал благодаря отношениям с другими людьми?" },
  { category: "Глубокие", text: "Что помогает тебе отличать собственные желания от чужих ожиданий?" },
  { category: "Глубокие", text: "Какой разговор изменил то, как ты смотришь на близость или доверие?" },
  { category: "Глубокие", text: "Какая потеря или перемена неожиданно открыла для тебя что-то ценное?" },
  { category: "Глубокие", text: "Что ты хотел бы, чтобы близкие понимали о твоём способе переживать трудности?" },
  { category: "Глубокие", text: "В чём ты стал мягче к себе, а в чём — смелее?" },
  { category: "Глубокие", text: "Как выглядит забота о себе, которая действительно работает именно для тебя?" },
  { category: "Глубокие", text: "Какое качество ты особенно ценишь в людях и стараешься развивать в себе?" },

  { category: "Для знакомства", text: "Какое впечатление о тебе обычно оказывается первым — и насколько оно точное?" },
  { category: "Для знакомства", text: "О чём ты можешь говорить часами, если собеседник действительно слушает?" },
  { category: "Для знакомства", text: "Какой опыт научил тебя чему-то важному о людях?" },
  { category: "Для знакомства", text: "Как ты обычно понимаешь, что с человеком можно быть собой?" },
  { category: "Для знакомства", text: "Какие три вещи дают тебе ощущение хорошего, прожитого дня?" },
  { category: "Для знакомства", text: "Какая тема или занятие увлекают тебя сильнее, чем это заметно со стороны?" },
  { category: "Для знакомства", text: "Какой человек повлиял на тебя, даже если вы давно не общаетесь?" },
  { category: "Для знакомства", text: "Что тебе важно узнать о человеке, прежде чем назвать его близким?" },
  { category: "Для знакомства", text: "В какой обстановке тебе легче всего раскрыться?" },
  { category: "Для знакомства", text: "Какая мечта у тебя есть, о которой ты редко рассказываешь?" },
  { category: "Для знакомства", text: "Чему новому ты хотел бы научиться в ближайший год — и почему именно этому?" },
  { category: "Для знакомства", text: "Какая черта характера помогает тебе в жизни больше всего?" },
  { category: "Для знакомства", text: "Какой поступок другого человека однажды особенно много для тебя значил?" },
  { category: "Для знакомства", text: "Что для тебя важнее всего в дружбе, когда проходит первое впечатление?" },
  { category: "Для знакомства", text: "Каким своим выбором ты гордишься, хотя со стороны он мог казаться обычным?" },
  { category: "Для знакомства", text: "Что ты обычно замечаешь в людях раньше, чем они замечают это в себе?" },
  { category: "Для знакомства", text: "Какое место ты мечтаешь показать человеку, который тебе дорог?" },
  { category: "Для знакомства", text: "Какой вопрос тебе самому хотелось бы чаще слышать при знакомстве?" },
];

const categoryButtons = [...document.querySelectorAll(".category-button")];
const questionCard = document.querySelector("#question-card");
const questionText = document.querySelector("#question-text");
const questionCategory = document.querySelector("#question-category");
const questionNumber = document.querySelector("#question-number");
const questionCount = document.querySelector("#question-count");
const nextButton = document.querySelector("#next-question");

let activeCategory = "Все";
let previousQuestion = null;
let askedCount = 0;

function showNextQuestion() {
  const availableQuestions = questions.filter((question) => (
    activeCategory === "Все" || question.category === activeCategory
  ));
  const candidates = availableQuestions.filter((question) => question !== previousQuestion);
  const question = candidates[Math.floor(Math.random() * candidates.length)];

  previousQuestion = question;
  askedCount += 1;

  questionText.textContent = question.text;
  questionCategory.textContent = question.category.toLocaleUpperCase("ru-RU");
  questionNumber.textContent = String(askedCount).padStart(2, "0");
  questionCount.textContent = String(askedCount);

  questionCard.classList.remove("is-changing");
  void questionCard.offsetWidth;
  questionCard.classList.add("is-changing");
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((categoryButton) => {
      const isActive = categoryButton === button;
      categoryButton.classList.toggle("is-active", isActive);
      categoryButton.setAttribute("aria-pressed", String(isActive));
    });
  });
});

nextButton.addEventListener("click", showNextQuestion);
