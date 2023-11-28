import React from 'react';
import './App.css';

function App() {

  const participants: any = [];

  rating.forEach((participant) => {
    const dancer = {
      name: "",
      points: 0,
    };
    dancer.name = participant.firstName

    participant.result.forEach((res) => {
      const nominationType = res.nomination[0].type.code;
      switch (nominationType) {
        case "JNJ_NOVICE":
          dancer.points += 10;
          break;
        case "STRICTLY_NOVICE":
          dancer.points += 20;
          break;
        default:
      }
    })
    participants.push(dancer)
  })
  const compare = (a: any, b: any) => {
    if (a.points <= b.points) return 1;
    return -1;
  };
  participants.sort(compare);

  console.log("rating - ", participants)

  return (
    <div className="App">
      <div className="logoBlock">
        <div className="logo"><span className="color1">Fun</span> <span className="color2">Fan</span> <span
          className="color3">WCS</span></div>
        <div className="slogan">индикатор вовлеченности</div>
      </div>
      <div className="status">status: разработка концепции</div>
      <div className="descriptionBlock">
        <div>
          <h1>Концепт</h1>
          <div>
            <ol>
              <li>Баллы получают все</li>
              <li>В приоритете именно участие, а не выход в призы/финалы</li>
              <li>Баллы обнуляются ежегодно (с сохранением истории и занесением в зал и т.п...)</li>
            </ol>
          </div>
          <h1>Реализация (в разработке)</h1>
          <div>
            <ol>
              <li>Баллы начисляются за каждую НОМИНАЦИЮ</li>
              <li>Участвуют номинации всех более или менее значимых конкурсов</li>
              <li>Учитываются конкурсы как с рейтингами WSDC, MSA, так без рейтинга</li>
              <li>Критерии значимости конкурса на данный момент не определены</li>
            </ol>
          </div>
          <h1>Цели</h1>
          <div>
            <ol>
              <li>Стимулировать участие в большем кол-ве номинаций</li>
              <li>Стимулировать участие танцоров с наименьшим кол-вом баллов на текущий момент</li>
            </ol>
          </div>
          <h1>Начисляемые баллы</h1>
          <ol>
            <li>10 баллов - JnJ</li>
            <li>20 баллов - Strictly</li>
            <li>50 баллов - Routine</li>
            {/*<li>2 балла - вторая пятерка с конца (при наличии)</li>*/}
            {/*<li>+1 балл - каждая следующая пятерка после второй с конца (при наличии)</li>*/}
          </ol>
        </div>
        <div className="results">
          <div>Учтены: Westie Fest JnJ-Novice, Strictly Novice*</div>
          <table>
          {
            participants.map((participant: any) => {
              return (
                <tr style={{backgroundColor:"#7a2073"}}>
                  <td>{participant.name}</td>
                  <td>{participant.points}</td>
                </tr>
              )
            })
          }
          </table>
          <div>
            * Данные берутся из открытых источников. В данных могут содержаться ошибки.<br />
            Если нет данных по конкретному танцору: либо данные скрыты, либо ошибка.
          </div>


          {/*</table><table>*/}
          {/*  <tr style={{backgroundColor:"orange"}}>*/}
          {/*    <td rowSpan={5}>Огонь!</td>*/}
          {/*    <td>Маша</td>*/}
          {/*    <td>54</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"orange"}}>*/}
          {/*    <td>Денис</td>*/}
          {/*    <td>52</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"orange"}}>*/}
          {/*    <td>Сергей</td>*/}
          {/*    <td>51</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"orange"}}>*/}
          {/*    <td>Света</td>*/}
          {/*    <td>50</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"orange"}}>*/}
          {/*    <td>Надежда</td>*/}
          {/*    <td>50</td>*/}
          {/*  </tr>*/}

          {/*  <tr style={{backgroundColor:"#db8b00"}}>*/}
          {/*    <td rowSpan={5}>Невероятно активные</td>*/}
          {/*    <td>Данила</td>*/}
          {/*    <td>48</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#db8b00"}}>*/}
          {/*    <td>Елена</td>*/}
          {/*    <td>45</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#db8b00"}}>*/}
          {/*    <td>Сергей</td>*/}
          {/*    <td>40</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#db8b00"}}>*/}
          {/*    <td>Дмитрий</td>*/}
          {/*    <td>40</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#db8b00"}}>*/}
          {/*    <td>Федор</td>*/}
          {/*    <td>40</td>*/}
          {/*  </tr>*/}

          {/*  <tr style={{backgroundColor:"#cc7810"}}>*/}
          {/*    <td rowSpan={5}>Чрезвычайно активные</td>*/}
          {/*    <td>Никита</td>*/}
          {/*    <td>38</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#cc7810"}}>*/}
          {/*    <td>Валентина</td>*/}
          {/*    <td>37</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#cc7810"}}>*/}
          {/*    <td>Арина</td>*/}
          {/*    <td>35</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#cc7810"}}>*/}
          {/*    <td>Дмитрий</td>*/}
          {/*    <td>30</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#cc7810"}}>*/}
          {/*    <td>Иван</td>*/}
          {/*    <td>30</td>*/}
          {/*  </tr>*/}

          {/*  <tr style={{backgroundColor:"#b36424"}}>*/}
          {/*    <td rowSpan={5}>Очень активные</td>*/}
          {/*    <td>Наташа</td>*/}
          {/*    <td>27</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#b36424"}}>*/}
          {/*    <td>Денис</td>*/}
          {/*    <td>24</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#b36424"}}>*/}
          {/*    <td>Сергей</td>*/}
          {/*    <td>21</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#b36424"}}>*/}
          {/*    <td>Дмитрий</td>*/}
          {/*    <td>20</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#b36424"}}>*/}
          {/*    <td>Федор</td>*/}
          {/*    <td>20</td>*/}
          {/*  </tr>*/}

          {/*  <tr style={{backgroundColor:"#7a2073"}}>*/}
          {/*    <td rowSpan={5}>Весьма активные</td>*/}
          {/*    <td>Настя</td>*/}
          {/*    <td>13</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#7a2073"}}>*/}
          {/*    <td>Константин</td>*/}
          {/*    <td>12</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#7a2073"}}>*/}
          {/*    <td>Мила</td>*/}
          {/*    <td>11</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#7a2073"}}>*/}
          {/*    <td>Дмитрий</td>*/}
          {/*    <td>10</td>*/}
          {/*  </tr>*/}
          {/*  <tr style={{backgroundColor:"#7a2073"}}>*/}
          {/*    <td>Валерий</td>*/}
          {/*    <td>10</td>*/}
          {/*  </tr>*/}
          {/*</table>*/}
          {/*<h1>Манифест</h1>*/}
          {/*<div>*/}
          {/*  <ol>*/}
          {/*    <li>Каждый участник сообщества уделяет занятию танцами столько времени и сил,*/}
          {/*      сколько позволяют субъективные и объективные обстоятельства*/}
          {/*    </li>*/}
          {/*    <li>Каждый участник может желать получить оценку своих занятий относительно своих возможностей</li>*/}
          {/*    <li>Любой из существующих инструментов оценки прогресса, лишь частично учитывает обстоятельства*/}
          {/*      конкретного участника*/}
          {/*    </li>*/}
          {/*    <li>Данный индикатор только один из инструментов</li>*/}
          {/*  </ol>*/}
          {/*</div>*/}
        </div>
        <div className="results-legenda">
          <div>Легенда</div>
          <table>
            <tr style={{backgroundColor:"orange"}}>
              <td>Огонь!</td>
              <td>150 баллов и более</td>
            </tr>

            <tr style={{backgroundColor:"#db8b00"}}>
              <td>Невероятно активные</td>
              <td>70-150 баллов</td>
            </tr>

            <tr style={{backgroundColor:"#cc7810"}}>
              <td>Чрезвычайно активные</td>
              <td>50-70 баллов</td>
            </tr>

            <tr style={{backgroundColor:"#b36424"}}>
              <td>Очень активные</td>
              <td>30-50 баллов</td>
            </tr>
            <tr style={{backgroundColor:"#7a2073"}}>
              <td>Весьма активные</td>
              <td>До 30 баллов</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

const rating = [
  {
    "id": 1,
    "firstName": "Анастасия",
    "lastName": "Адамова",
    "result": [
      {
        "id": 1,
        "place": 1,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Федор",
    "lastName": "Майборода",
    "result": [
      {
        "id": 3,
        "place": 5,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      },
      {
        "id": 2,
        "place": 2,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Валерия",
    "lastName": "Захарчук",
    "result": [
      {
        "id": 4,
        "place": 2,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 91,
        "place": 7,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Evgeniy",
    "lastName": "Kutekin",
    "result": [
      {
        "id": 5,
        "place": 3,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Дениза",
    "lastName": "Онищенко",
    "result": [
      {
        "id": 6,
        "place": 3,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 103,
        "place": 14,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "firstName": "Олег",
    "lastName": "Фабрицкий",
    "result": [
      {
        "id": 7,
        "place": 4,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 102,
        "place": 14,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "firstName": "Natalia",
    "lastName": "Fomina",
    "result": [
      {
        "id": 8,
        "place": 4,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "firstName": "Дмитрий",
    "lastName": "Панов",
    "result": [
      {
        "id": 9,
        "place": 5,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 81,
        "place": 1,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "firstName": "Татьяна",
    "lastName": "Лопатникова",
    "result": [
      {
        "id": 10,
        "place": 5,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 99,
        "place": 12,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "firstName": "Антон",
    "lastName": "Герасимов",
    "result": [
      {
        "id": 11,
        "place": 6,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 94,
        "place": 9,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "firstName": "Михаил",
    "lastName": "Шуфер",
    "result": [
      {
        "id": 12,
        "place": 7,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 83,
        "place": 3,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "firstName": "Анна",
    "lastName": "Лиокумович",
    "result": [
      {
        "id": 13,
        "place": 7,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 105,
        "place": 15,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "firstName": "Илья",
    "lastName": "Заливако",
    "result": [
      {
        "id": 14,
        "place": 8,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 114,
        "place": 21,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "firstName": "Евгения",
    "lastName": "Романенкова",
    "result": [
      {
        "id": 15,
        "place": 8,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "firstName": "Григорий",
    "lastName": "Кочнев",
    "result": [
      {
        "id": 16,
        "place": 9,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 30,
        "place": 16,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "firstName": "Марина",
    "lastName": "Кондратьева",
    "result": [
      {
        "id": 17,
        "place": 9,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 101,
        "place": 12,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "firstName": "Нина",
    "lastName": "Бондарь",
    "result": [
      {
        "id": 19,
        "place": 10,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 86,
        "place": 4,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "firstName": "Алексей",
    "lastName": "Суслов",
    "result": [
      {
        "id": 18,
        "place": 10,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 96,
        "place": 10,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "firstName": "Игорь",
    "lastName": "Городничев",
    "result": [
      {
        "id": 20,
        "place": 11,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 85,
        "place": 4,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "firstName": "Елизавета",
    "lastName": "Дмитриева",
    "result": [
      {
        "id": 21,
        "place": 11,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 21,
    "firstName": "Сергей",
    "lastName": "Гизатуллин",
    "result": [
      {
        "id": 22,
        "place": 12,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 116,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 22,
    "firstName": "Полина",
    "lastName": "Герасименко",
    "result": [
      {
        "id": 23,
        "place": 12,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 89,
        "place": 6,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 24,
    "firstName": "Андрей",
    "lastName": "Ушаков",
    "result": [
      {
        "id": 24,
        "place": 13,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 23,
    "firstName": "Зарина",
    "lastName": "Бабаева",
    "result": [
      {
        "id": 25,
        "place": 13,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 84,
        "place": 3,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 25,
    "firstName": "Владимир",
    "lastName": "Шиков",
    "result": [
      {
        "id": 26,
        "place": 14,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 88,
        "place": 6,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 26,
    "firstName": "Светлана",
    "lastName": "Александрова",
    "result": [
      {
        "id": 27,
        "place": 14,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 27,
    "firstName": "Svetlana",
    "lastName": "Boychenko",
    "result": [
      {
        "id": 28,
        "place": 15,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 28,
    "firstName": "Евгения",
    "lastName": "Ахмадеева",
    "result": [
      {
        "id": 29,
        "place": 16,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 29,
    "firstName": "Артур",
    "lastName": "Ахметов",
    "result": [
      {
        "id": 30,
        "place": 16,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 30,
    "firstName": "Кирилл",
    "lastName": "Карп",
    "result": [
      {
        "id": 31,
        "place": 18,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 31,
    "firstName": "Клим",
    "lastName": "Борисов",
    "result": [
      {
        "id": 32,
        "place": 19,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 32,
    "firstName": "Кристина",
    "lastName": "Якубова",
    "result": [
      {
        "id": 33,
        "place": 20,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 108,
        "place": 16,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 33,
    "firstName": "Андрей",
    "lastName": "Кокорев",
    "result": [
      {
        "id": 34,
        "place": 21,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 34,
    "firstName": "Константин",
    "lastName": "Салин",
    "result": [
      {
        "id": 35,
        "place": 22,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 115,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 35,
    "firstName": "Максим",
    "lastName": "Зайченко",
    "result": [
      {
        "id": 36,
        "place": 22,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 36,
    "firstName": "Maxim",
    "lastName": "Yatskovskiy",
    "result": [
      {
        "id": 37,
        "place": 22,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 110,
        "place": 16,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 37,
    "firstName": "Михаил",
    "lastName": "Виноградов",
    "result": [
      {
        "id": 38,
        "place": 25,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 119,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 38,
    "firstName": "Евгений",
    "lastName": "Талаев",
    "result": [
      {
        "id": 39,
        "place": 25,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 112,
        "place": 20,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 39,
    "firstName": "Всеволод",
    "lastName": "Серебряный",
    "result": [
      {
        "id": 40,
        "place": 27,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 106,
        "place": 16,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 40,
    "firstName": "Василий",
    "lastName": "Мороко",
    "result": [
      {
        "id": 41,
        "place": 28,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 41,
    "firstName": "Мария",
    "lastName": "Казакова",
    "result": [
      {
        "id": 42,
        "place": 16,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 42,
    "firstName": "Татьяна",
    "lastName": "Красногорская",
    "result": [
      {
        "id": 43,
        "place": 17,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 43,
    "firstName": "Анна",
    "lastName": "Влади",
    "result": [
      {
        "id": 44,
        "place": 18,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 117,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 44,
    "firstName": "Ольга",
    "lastName": "Ким",
    "result": [
      {
        "id": 45,
        "place": 18,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 45,
    "firstName": "Татьяна",
    "lastName": "Иванова",
    "result": [
      {
        "id": 46,
        "place": 18,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 46,
    "firstName": "Марина",
    "lastName": "Вахненко",
    "result": [
      {
        "id": 47,
        "place": 21,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 87,
        "place": 5,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 47,
    "firstName": "Янна",
    "lastName": "Жданкина",
    "result": [
      {
        "id": 48,
        "place": 22,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 48,
    "firstName": "Елена",
    "lastName": "Малоросиянцева",
    "result": [
      {
        "id": 49,
        "place": 23,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 97,
        "place": 10,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 49,
    "firstName": "Наталья",
    "lastName": "Лякина",
    "result": [
      {
        "id": 50,
        "place": 23,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 50,
    "firstName": "Тамара",
    "lastName": "Батталова",
    "result": [
      {
        "id": 51,
        "place": 26,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 120,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 51,
    "firstName": "Диана",
    "lastName": "Кожевникова",
    "result": [
      {
        "id": 52,
        "place": 27,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 52,
    "firstName": "Екатерина",
    "lastName": "Сахарова",
    "result": [
      {
        "id": 53,
        "place": 28,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 53,
    "firstName": "Алексей",
    "lastName": "Зарубин",
    "result": [
      {
        "id": 54,
        "place": 30,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 121,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 54,
    "firstName": "Roman",
    "lastName": "Stepanov",
    "result": [
      {
        "id": 56,
        "place": 30,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 55,
    "firstName": "Александр",
    "lastName": "Шокуров",
    "result": [
      {
        "id": 58,
        "place": 30,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 56,
    "firstName": "Ян",
    "lastName": "Ашенкампф",
    "result": [
      {
        "id": 60,
        "place": 33,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 100,
        "place": 12,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 57,
    "firstName": "Данис",
    "lastName": "Гумеров",
    "result": [
      {
        "id": 62,
        "place": 34,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 58,
    "firstName": "Андрей",
    "lastName": "Бустеряков",
    "result": [
      {
        "id": 64,
        "place": 35,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 59,
    "firstName": "Андрей",
    "lastName": "Курятников",
    "result": [
      {
        "id": 66,
        "place": 36,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 60,
    "firstName": "Dmitry",
    "lastName": "Dmitriev",
    "result": [
      {
        "id": 68,
        "place": 36,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 61,
    "firstName": "Алена",
    "lastName": "Максенкова",
    "result": [
      {
        "id": 55,
        "place": 30,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 107,
        "place": 16,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 62,
    "firstName": "Наталья",
    "lastName": "Понпа",
    "result": [
      {
        "id": 57,
        "place": 30,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 63,
    "firstName": "Наталья",
    "lastName": "Арюкова",
    "result": [
      {
        "id": 59,
        "place": 30,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 64,
    "firstName": "Mariia",
    "lastName": "Sokolova",
    "result": [
      {
        "id": 61,
        "place": 33,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 65,
    "firstName": "Татьяна",
    "lastName": "Москвичева",
    "result": [
      {
        "id": 63,
        "place": 34,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 66,
    "firstName": "Арина",
    "lastName": "Апетян",
    "result": [
      {
        "id": 65,
        "place": 35,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 109,
        "place": 16,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 67,
    "firstName": "Екатерина",
    "lastName": "Шувалова",
    "result": [
      {
        "id": 67,
        "place": 36,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 111,
        "place": 16,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 68,
    "firstName": "Елена",
    "lastName": "Повторейко",
    "result": [
      {
        "id": 69,
        "place": 36,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 69,
    "firstName": "Дарья",
    "lastName": "Крамаренко",
    "result": [
      {
        "id": 70,
        "place": 38,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 70,
    "firstName": "Александра",
    "lastName": "Сучкова",
    "result": [
      {
        "id": 71,
        "place": 39,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 71,
    "firstName": "Anastasia",
    "lastName": "Larionova",
    "result": [
      {
        "id": 72,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 72,
    "firstName": "Elena",
    "lastName": "Lebedeva",
    "result": [
      {
        "id": 73,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 73,
    "firstName": "Марина",
    "lastName": "Суслова",
    "result": [
      {
        "id": 74,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 74,
    "firstName": "Ольга",
    "lastName": "Феофилатова",
    "result": [
      {
        "id": 75,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 75,
    "firstName": "Светлана",
    "lastName": "Просина",
    "result": [
      {
        "id": 76,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      },
      {
        "id": 122,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 76,
    "firstName": "Ирина",
    "lastName": "Герасимова",
    "result": [
      {
        "id": 77,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 77,
    "firstName": "Екатерина",
    "lastName": "Коровкина",
    "result": [
      {
        "id": 78,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 78,
    "firstName": "Мария",
    "lastName": "Сахно",
    "result": [
      {
        "id": 79,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 79,
    "firstName": "Лиля",
    "lastName": "Чеснова",
    "result": [
      {
        "id": 80,
        "place": 40,
        "nomination": [
          {
            "id": 1,
            "contestId": 1,
            "title": "JnJ Novice",
            "typeId": 1,
            "type": {
              "id": 1,
              "code": "JNJ_NOVICE",
              "description": "Jack and Jill Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 81,
    "firstName": "Анна",
    "lastName": "Жукова",
    "result": [
      {
        "id": 82,
        "place": 1,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 83,
    "firstName": "Сергей",
    "lastName": "Ефремов",
    "result": [
      {
        "id": 90,
        "place": 7,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 84,
    "firstName": "Дмитрий",
    "lastName": "Кудлай",
    "result": [
      {
        "id": 92,
        "place": 8,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 85,
    "firstName": "Alina",
    "lastName": "Latypova",
    "result": [
      {
        "id": 93,
        "place": 8,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 86,
    "firstName": "Надежда",
    "lastName": "Ехилевская",
    "result": [
      {
        "id": 95,
        "place": 9,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 87,
    "firstName": "Олег",
    "lastName": "Фомин",
    "result": [
      {
        "id": 98,
        "place": 11,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 88,
    "firstName": "Татьяна",
    "lastName": "Бойкова",
    "result": [
      {
        "id": 104,
        "place": 15,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 89,
    "firstName": "Юлия",
    "lastName": "Орлова",
    "result": [
      {
        "id": 113,
        "place": 20,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 90,
    "firstName": "Борис",
    "lastName": "Оводов",
    "result": [
      {
        "id": 118,
        "place": 22,
        "nomination": [
          {
            "id": 2,
            "contestId": 1,
            "title": "Strictly Novice",
            "typeId": 2,
            "type": {
              "id": 2,
              "code": "STRICTLY_NOVICE",
              "description": "Strictly Novice"
            }
          }
        ]
      }
    ]
  }
]

export default App;
