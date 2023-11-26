import React from 'react';
import './App.css';

function App() {
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
            <li>+10 баллов - Strictly</li>
            <li>+20 баллов - Routine</li>
            <li>2 балла - вторая пятерка с конца (при наличии)</li>
            <li>+1 балл - каждая следующая пятерка после второй с конца (при наличии)</li>
          </ol>
        </div>
        <div className="results">
          <div>Тестовый пример</div>
          <table>
            <tr style={{backgroundColor:"orange"}}>
              <td rowSpan={5}>Огонь!</td>
              <td>Маша</td>
              <td>54</td>
            </tr>
            <tr style={{backgroundColor:"orange"}}>
              <td>Денис</td>
              <td>52</td>
            </tr>
            <tr style={{backgroundColor:"orange"}}>
              <td>Сергей</td>
              <td>51</td>
            </tr>
            <tr style={{backgroundColor:"orange"}}>
              <td>Света</td>
              <td>50</td>
            </tr>
            <tr style={{backgroundColor:"orange"}}>
              <td>Надежда</td>
              <td>50</td>
            </tr>

            <tr style={{backgroundColor:"#db8b00"}}>
              <td rowSpan={5}>Невероятно активные</td>
              <td>Данила</td>
              <td>48</td>
            </tr>
            <tr style={{backgroundColor:"#db8b00"}}>
              <td>Елена</td>
              <td>45</td>
            </tr>
            <tr style={{backgroundColor:"#db8b00"}}>
              <td>Сергей</td>
              <td>40</td>
            </tr>
            <tr style={{backgroundColor:"#db8b00"}}>
              <td>Дмитрий</td>
              <td>40</td>
            </tr>
            <tr style={{backgroundColor:"#db8b00"}}>
              <td>Федор</td>
              <td>40</td>
            </tr>

            <tr style={{backgroundColor:"#cc7810"}}>
              <td rowSpan={5}>Чрезвычайно активные</td>
              <td>Никита</td>
              <td>38</td>
            </tr>
            <tr style={{backgroundColor:"#cc7810"}}>
              <td>Валентина</td>
              <td>37</td>
            </tr>
            <tr style={{backgroundColor:"#cc7810"}}>
              <td>Арина</td>
              <td>35</td>
            </tr>
            <tr style={{backgroundColor:"#cc7810"}}>
              <td>Дмитрий</td>
              <td>30</td>
            </tr>
            <tr style={{backgroundColor:"#cc7810"}}>
              <td>Иван</td>
              <td>30</td>
            </tr>

            <tr style={{backgroundColor:"#b36424"}}>
              <td rowSpan={5}>Очень активные</td>
              <td>Наташа</td>
              <td>27</td>
            </tr>
            <tr style={{backgroundColor:"#b36424"}}>
              <td>Денис</td>
              <td>24</td>
            </tr>
            <tr style={{backgroundColor:"#b36424"}}>
              <td>Сергей</td>
              <td>21</td>
            </tr>
            <tr style={{backgroundColor:"#b36424"}}>
              <td>Дмитрий</td>
              <td>20</td>
            </tr>
            <tr style={{backgroundColor:"#b36424"}}>
              <td>Федор</td>
              <td>20</td>
            </tr>

            <tr style={{backgroundColor:"#7a4920"}}>
              <td rowSpan={5}>Весьма активные</td>
              <td>Настя</td>
              <td>13</td>
            </tr>
            <tr style={{backgroundColor:"#7a4920"}}>
              <td>Константин</td>
              <td>12</td>
            </tr>
            <tr style={{backgroundColor:"#7a4920"}}>
              <td>Мила</td>
              <td>11</td>
            </tr>
            <tr style={{backgroundColor:"#7a4920"}}>
              <td>Дмитрий</td>
              <td>10</td>
            </tr>
            <tr style={{backgroundColor:"#7a4920"}}>
              <td>Валерий</td>
              <td>10</td>
            </tr>
          </table>
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
      </div>
    </div>
  );
}

export default App;
