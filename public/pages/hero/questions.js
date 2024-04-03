const QUESTIONS = [
    [
        {
            question: "На двух руках 10 пальцев. А сколько пальцев на пяти руках?",
            cases: ["10", "20", "25", "50"],
            answer: 2,
        },
        {
            question: "Петух, стоя на одной ноге весит 3 кг. Сколько он весит стоя на двух ногах?",
            cases: ["1,5 кг", "3 кг", "4.5 кг", "6 кг"],
            answer: 1,
        },
        {
            question: "В каждом из 4 углов сидит кошка, потив кошки еще по 3 кошки. Сколько всего кошек?",
            cases: ["4", "7", "12", "16"],
            answer: 0,
        },
        {
            question: "Двое играли в шашки 4 часа. Сколько играл один?",
            cases: ["1", "2", "3", "4"],
            answer: 3,
        },
    ],
    [
        {
            question: "<math><mrow><mo>Среди значений переменной</mo><mi>x</mi><mo>, равных</mo></mrow></math><br><math><mrow><mfrac><mn>1</mn><mi>64</mi></mfrac><mo>;</mo><mfrac><mn>1</mn><mi>64</mi></mfrac><mo>;</mo><mfrac><mn>1</mn><mi>2</mi></mfrac><mo>;</mo><mfrac><mn>1</mn><mi>45</mi></mfrac><mo>;</mo><mfrac><mn>1</mn><mi>12</mi></mfrac><mo>;</mo><mfrac><mn>1</mn><mi>81</mi></mfrac></mrow><mrow><mo>укажите то, при котором</mo></math><br><math><mo>значение функции</mo><mi>f(x)=</mi><mroot><msup><mi>x</mi><mnstyle=\"color:transparent;\">1</mn></msup><mn></mn></mroot><mo>меньше</mo><mfrac><mn>1</mn><mi>8</mi></mfrac></mrow></math>",
            cases: [
                "<math><mfrac><mn>1</mn><mi>64</mi></mfrac></math>",
                "<math><mfrac><mn>1</mn><mi>8</mi></mfrac></math>",
                "<math><mfrac><mn>1</mn><mi>2</mi></mfrac></math>",
                "<math><mfrac><mn>1</mn><mi>16</mi></mfrac></math>",
            ],
            answer: 1,
        },
        {
            question: "Результат упрощения выражения |a-13|-|-6| при а<13 имеет вид:",
            cases: ["a-7", "19-a", "a-19", "7-a"],
            answer: 3,
        },
        {
            question: "Среди выражений укажите то, значение которого равно 6",
            cases: [
                "<math><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mi>6</mi></mfrac><mo>)</mo></mrow><mn>-1</mn></msup></math>",
                "<math><msup><mrow><mo>(</mo><mi>-1</mi><mo>)</mo>)</mrow><mi>6</mi></msup></math>",
                "<math><msup><mn>6</mn><mi>0</mi></msup></math>",
                "<math><msup><mn>12</mn><mfrac><mn>1</mn><mi>2</mi></mfrac></msup></math>",
                "<math><msup><mn>(0,6)</mn><mi>-1</mi></msup></math>",
            ],
            answer: 0,
        },
        {
            question: "Определите, при котором из значений x, верно неравенству <math><mfrac><mn>280</mn><mi>x</mi></mfrac><mo> < 50</mo></math>",
            cases: ["0,1", "4", "7", "1", "5"],
            answer: 2,
        },
    ],
    [
        {
            question: "Велосипедист за 5 ч проехал 52км. За какое время (в минутах) велосипедист преодолеет в полтора раза больший путь, если будет двигаться с той же скоростью?",
            cases: ["675 мин", "450 мин", "104 мин", "800 мин"],
            answer: 1,
        },
        {
            question: "На рынке килограмм клубники стоит 6 рублей. Покупатель купил 1 кг 450г клубники. Чему равна (в копейках) сдача, которую получил покупатель, если он расплатился 10 рублевой купюрой?",
            cases: ["100 копеек", "160 копеек", "260 копеек", "130 копеек"],
            answer: 3,
        },
        {
            question: "Найдите расстояние (в километрах) между поселками, если <math><mfrac><mn>4</mn><mi>9</mi></mfrac></math> этого расстояния на 10 км меньше всего расстояния между ними",
            cases: ["12 км", "18 км", "16 км", "9 км"],
            answer: 1,
        },
        {
            question: "Семь рабочих могут выполнить работу за 18 дней. За сколько дней могут выполнить эту же работу 9 рабочих?",
            cases: ["14 дней", "18 дней", "9 дней", "32 дня"],
            answer: 0,
        },
    ],
    [
        {
            question: "Решите уравнение <math><mo>1 - </mo><mfrac><mn>x+1</mn><mi>4</mi></mfrac><mo>=</mo><mfrac><mn>x</mn><mi>2</mi></mfrac></math>",
            cases: ["2", "1", "4", "<math><mfrac><mn>1</mn><mi>2</mi></mfrac></math>"],
            answer: 1,
        },
        {
            question: "Сумма корней квадратного уравнения <math><msup><mn>2x</mn><mi>2</mi></msup><mo> - 8x - 3 = 0</mo></math> равна",
            cases: ["4", "2", "0", "6"],
            answer: 0,
        },
        {
            question: "Произведение наибольшего целого отрицательного и наименьшего целого положительного решения неравенства <math><msup><mn>x</mn><mi>2</mi></msup><mo> < 9</mo></math>",
            cases: ["3", "+-3", "1", "0", "хуйня, надо переделать"],
            answer: 4,
        },
        {
            question: "Решить уравнение <math><mroot><mrow><mn>x + </mn><msup><mn>2</mn><mi style=\"color: transparent;\">2</mi></msup></mrow><mi></mi></mroot><mo> = -x</mo></math>",
            cases: ["0", "-1", "2", "1"],
            answer: 1,
        },
    ],
    [
        {
            question: "Вычислить <math><mfrac><mn>18</mn><mi>&Pi;</mi></mfrac><mo>arccos</mo><mo>(</mo><mfrac><mn>-1</mn><mi>2</mi></mfrac><mo>)</mo></math>",
            cases: ["6", "2", "4", "12"],
            answer: 3,
        },
        {
            question: "Вычислить <math><mo>15</mo><msqrt><msup><mn>3</mn><mi style=\"color: transparent;\">1</mi></msup></msqrt><mo>tg</mo><mfrac><mn>8&Pi;</mn><mi>3</mi></mfrac></math>",
            cases: ["-45", "30", "0", "60"],
            answer: 0,
        },
        {
            question: "Вычислить <math><msup><mn>4sin75</mn><mi>0</mi></msup><msup><mn>cos75</mn><mi>0</mi></msup></math>",
            cases: ["0", "-1", "<math><mfrac><mn>1</mn><mi>2</mi></mfrac></math>", "1"],
            answer: 1,
        },
        {
            question: "Вычислить <math><msup><mn>5</mn><mrow><mo>1+2</mo><msub><mi>log</mi><mi>5</mi></msub><mo>8</mo></mrow></msup></math>",
            cases: ["160", "230", "320", "140"],
            answer: 2,
        },
    ]
];