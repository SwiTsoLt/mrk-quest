const socket = io();
let id = null;

const wrapper = document.getElementById("wrapper");
const avatar_name = document.getElementById("avatar-name");
const avatar_image = document.getElementById("avatar-image");
const avatar_selector = document.getElementById("avatar-selector");
const spell_buttons = document.getElementById("spell-buttons");

// Question DOM

const question = document.getElementById("question");
const question_title = document.getElementById("question-title");
const answers = document.getElementById("answers");
const result = document.getElementById("result");
const close_button = document.getElementById("close");

const AVATAR_LIST = [
    "../../image/creature/hero/0.png",
    "../../image/creature/hero/1.png",
    "../../image/creature/hero/2.png",
    "../../image/creature/hero/3.png",
];

class Hero {
    #name = "Герой";
    #avatar = 0;

    setAvatar(index) {
        this.#avatar = +index;
    }

    setName(name) {
        this.#name = name;
    }

    updateDOMElements() {
        avatar_name.innerText = this.#name;
        avatar_image.src = AVATAR_LIST[this.#avatar];
    }

    getJSON() {
        return { name: this.#name, avatar: this.#avatar };
    }
}

const hero = new Hero();

const name = prompt("Воин, как ваше имя?")?.trim() ?? "Герой";
hero.setName(name);
hero.updateDOMElements();

avatar_selector.addEventListener("change", event => {
    hero.setAvatar(event.target.value);
    hero.updateDOMElements();
    socket.emit("update-hero", hero.getJSON());
});

// Question

function onAnswer(event, level, answer) {
    if (event.target.value.toString() === answer.toString()) {
        result.innerHTML = "<p style='color:#15d118;'>Верно!</p>";
        closeQuestion();
        spell_buttons.querySelector(`button[value="${level}"]`).disabled = true;
        window.navigator.vibrate([20, 20, 20]);
        socket.emit("hero-attack", { level: +level });
    } else {
        result.innerHTML = "<p style='color:#bf3621;'>Неверно!</p>";
        window.navigator.vibrate(150);
        socket.emit("enemy-attack");
    }
}

function setQuestion(level) {
    result.innerHTML = "";

    const random_question = Math.round(Math.random() * (QUESTIONS[level].length - 1));
    question_title.innerHTML = QUESTIONS[level][random_question].question;

    const answer_cases = QUESTIONS[level][random_question].cases;

    answers.innerHTML = "";
    answer_cases.forEach((answer_case, index) => {
        const answer_button = document.createElement("button");
        answer_button.value = index;
        answer_button.innerHTML = answer_case;
        answer_button.addEventListener("click", event => {
            onAnswer(event, level, QUESTIONS[level][random_question].answer);
        });
        answers.appendChild(answer_button);
    });
}

spell_buttons.childNodes.forEach(button => {
    button.addEventListener("click", event => {
        openQuestion();
        setQuestion(event.target.value);
    });
});

function openQuestion() {
    wrapper.classList.add("hidden");
    question.classList.remove("hidden");
}

function closeQuestion() {
    wrapper.classList.remove("hidden");
    question.classList.add("hidden");
}

close_button.addEventListener("click", closeQuestion)

// Socket

socket.on("connect", () => {
    socket.emit("join-hero", hero.getJSON());
});