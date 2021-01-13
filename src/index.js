import React, { Component } from "react";
import ReactDOM from "react-dom";

import Cover from "./components/cover/cover";
import Navbar from "./components/navbar/navbar";

import "./index.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <section className="first-section">
          <header className="header">
            <div className="logo">
              Логотип
              {/* <img src="logo.svg"></img> */}
            </div>
            <div>
              <nav>
                <ul class="menu">
                  <li class="menu-item">RU</li>
                  <li class="menu-item">KG</li>
                  <li class="menu-item">EN</li>
                </ul>
              </nav>
              <menu>Меню</menu>
            </div>
          </header>
          <div className="main-text">
            <p className="main-text__headline">Үмүт булагы</p>
            <p className="main-text__caption">Эне-балага тирек</p>
          </div>
          <button className="contact-us">Связаться с нами</button>
          <div>
            <p>Следите за нами:</p>
            <ul class="icons">
              <li class="icons-item">Facebook</li>
              <li class="icons-item">Twitter</li>
              <li class="icons-item">Instagram</li>
            </ul>
          </div>
          {/* <img src={kids} alt=""/>   */}
        </section>

        <section className="second-section">
          <div>
            <p className="second-section__title">Кто мы?</p>
            <div className="">
              <p className="second-section__description">
                Общественный фонд "Умут булагы" под инициативой первой леди
                Кыргызской Республики Айгуль Жапаровой работает по всей стране.
                "Мы стремимся в первую очередь помогать детям и матерям.
                Улучшать их жизни, защищать и развивать их потенциал. Умут
                булагы – опора для матери и ребенка." – А. Жапарова.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3>Что мы делаем?</h3>
            <p>
              Мы помогаем матерям-одиночкам, детям-сиротам и иным уязвимым
              группам населения по всему Кыргызстану. Семь приоритетных
              направлений нашей деятельности.
            </p>
          </div>
          <div className="activities"></div>
        </section>
        <footer></footer>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
