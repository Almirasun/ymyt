import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import * as Components from './components';

function App() {
  return (
    <main className="App">
      <section className="first-section">
        <header className="header">          
            <div className="logo">Логотип
              {/* <img src="logo.svg"></img> */}
            </div>
            <div>
              <nav>
                <ul className="menu">
                  <li className="menu-item">RU</li>
                  <li className="menu-item">KG</li>
                  <li className="menu-item">EN</li>
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
          <div className="social-icons__area">
            <p>Следите за нами:</p>
            <Components.SocialIcons /> 
          </div>        
      </section>

      <section className="second-section">
        <div className="second-section__area">
          <p className="second-section__title">Кто мы?</p>
          <p className="second-section__description">
              Общественный фонд "Умут булагы" под инициативой первой леди
              Кыргызской Республики Айгуль Жапаровой работает по всей стране.
              "Мы стремимся в первую очередь помогать детям и матерям. Улучшать 
              их жизни, защищать и развивать их потенциал. Умут булагы – опора для 
              матери и ребенка." –  А. Жапарова.
            </p>
        </div>
      </section>

      <section className="third-section">  
        <div className="third-section__area">
          <p className="third-section__title">Что мы делаем?</p>
          <p className="third-section__description">
            Мы помогаем матерям-одиночкам, детям-сиротам и иным уязвимым 
            группам населения по всему Кыргызстану.  Семь приоритетных 
            направлений нашей деятельности. 
          </p>
        </div>
        <div className="activities">

        </div>
      </section>

      <footer></footer>
    </main>
  )  
}

ReactDOM.render((
    <App />
),  document.getElementById('root'));

