import React from 'react';
import './App.css';

const active1Color = "active1Color";
const active2Color = "active2Color";
const active3Color = "active3Color";
const active4Color = "active4Color";
const active5Color = "active5Color";

function App() {

  const participants: any = [];

  rating.forEach((participant) => {
    const dancer = {
      name: "",
      surname: "",
      points: 0,
    };
    dancer.name = participant.firstName;
    dancer.surname = participant.lastName;

    participant.result.forEach((res) => {
      const nomination = res.nomination[0];
      if (!nomination || !nomination.type) return;
      const code = nomination.type.code;
      switch (code) {
        case "JNJ_NEWCOMER":
        case "JNJ_NOVICE":
        case "JNJ_INTERMEDIATE":
        case "JNJ_ADVANCED":
        case "JNJ_ALLSTAR":
        case "JNJ_SOPHISTICATED":
        case "JNJ_AMPRO":
        case "JNJ_PROAM":
        case "JNJ_JACKPOT":
          dancer.points += 10;
          break;
        case "STRICTLY_NOVICE":
        case "STRICTLY_INTERMEDIATE":
        case "STRICTLY_OPEN":
          dancer.points += 20;
          break;
        case "CABARET":
          dancer.points += 30;
          break;
        case "ROUTINE":
          dancer.points += 50;
          break;
        case "SHOW":
          dancer.points += 60;
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
              <li>Нет разделений на дивизионы. Нет разделений на роли: ученик/преподаватель, фоловер/лидер</li>
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
            <li>30 баллов - Cabaret</li>
            <li>50 баллов - Routine</li>
            <li>60 баллов - Show</li>
          </ol>
        </div>
        <div className="results">
          <div>Учтены:<br />
            Westie Fest Gala 2023,<br />
            WCS Утренник 2023, <br />
            Шуба Дуба Свинг 2023 (Кабаре частично)*</div>
          <table>
          {
            participants.map((participant: any) => {
              let color = "";
              const { points, name } = participant;
              if (points <= 30) {
                color = active1Color;
              } else if (points > 30 && points <= 100) {
                color = active2Color;
              } else if (points > 100 && points <= 250) {
                color = active3Color;
              } else if (points > 250 && points <= 400) {
                color = active4Color;
              } else {
                color = active5Color;
              }
              return (
                <tr className={color}>
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
        </div>
        <div className="results-legenda">
          <div><br /><br /><br />Легенда</div>
          <table>
            <tr style={{backgroundColor:"orange"}}>
              <td>Огонь!</td>
              <td>400 баллов и более</td>
            </tr>

            <tr style={{backgroundColor:"#db8b00"}}>
              <td>Невероятно активные</td>
              <td>до 400 баллов</td>
            </tr>

            <tr style={{backgroundColor:"#cc7810"}}>
              <td>Чрезвычайно активные</td>
              <td>до 250 баллов</td>
            </tr>

            <tr style={{backgroundColor:"#b36424"}}>
              <td>Очень активные</td>
              <td>до 100 баллов</td>
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

const rating = []

export default App;
