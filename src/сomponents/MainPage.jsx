import monitor from '../assets/monitor.svg'
import rocket from '../assets/rocket.svg'
import diagram from '../assets/diagram.svg'
import cloud from '../assets/cloud.svg'
import fannel from '../assets/fannel.svg'
import SMM from '../assets/SMM.svg'

import AlexFitness from '../assets/Alex-Fitness.svg'
import LogoACB from '../assets/logo-acb.svg'
import LogoAKB from '../assets/logoakb.svg'
import LogoXS from '../assets/logo-xs.svg'

import VectorLeft from '../assets/VectorLeft.svg'
import VectorRight from '../assets/VectorRight.svg'

import '../css/blocks/Main.scss'

export default function MainPage () {
    return (
        <div className="mainpage">
            <div className="firstcon">
                <h1>MEDIA SUPPORT 24</h1>
                <h2>Мы предлагаем комплексные и индивидуальные <br>
                </br>решения для продвижения товаров и услуг любой<br></br>сферы бизнеса</h2>
                <button>УЗНАТЬ БОЛЬШЕ</button>
            </div>
            <h2 className="title">Услуги</h2>
            <div className="secondcon">
                <div className="services-1">
                    <div>
                        <img src={monitor} alt="Monitor Logo"/>
                        <p>СОЗДАНИЕ САЙТОВ</p>
                    </div>
                    <div>
                        <img src={cloud} alt="Cloud Logo" />
                        <p>ВНЕДРЕНИЕ CRM</p>
                    </div>
                    <div>
                        <img src={diagram}  alt="Diagram Logo" />
                        <p>СКВОЗНАЯ АНАЛИТИКА</p>
                    </div>
                </div>
                <div className="services-2">
                    <div>
                        <img src={rocket} alt="Rocket Logo" />
                        <p>ТАРГЕТИНГОВАЯ РЕКЛАМА</p>
                    </div>
                    <div>
                        <img src={SMM}  alt="SMM Logo" />
                        <p>SMM</p>
                    </div>
                    <div>
                        <img src={fannel}  alt="Fannel Logo" />
                        <p>НАСТРОЙКА <br></br> ВОРОНОК ПРОДАЖ</p>
                    </div>
                </div>
            </div>
            <h2 className="title">КЕЙСЫ ПОД КЛЮЧ</h2>
            <div className="thirdcon">
                <div>
                    <div className="upfirstcase">
                        <h4>IRON</h4>
                        <p>WARRIORS</p>
                    </div>
                    <div className="downfirstcase">
                        <h4>Iron warrios:</h4>
                        <h5>Фото и видеосъемка</h5>
                        <p>Quis qui labore irure ut ad Lorem culpa eu proident id nisi. Occaecat commodo sunt non excepteur culpa laborum labore amet commodo sint nostrud adipisicing id.</p>
                        <a>Смотреть кейс</a>
                    </div>
                </div>
                <div>
                    <div className="upsecondcase">
                        <p>BRUSENSKY LANGUAGE SCHOOL</p>
                    </div>
                    <div className="downsecondcase">
                        <h4>Brusensky language school:</h4>
                        <h5>Брендинг, сайт</h5>
                        <p>Quis qui labore irure ut ad Lorem culpa eu proident id nisi. Occaecat commodo sunt non excepteur culpa laborum labore amet commodo sint nostrud adipisicing id.</p>
                        <a>Смотреть кейс</a>
                    </div>
                </div>
                <div>
                    <div className="upthirdcase">
                        <p>PRADD TATTOO</p>
                    </div>
                    <div className="downthirdcase">
                        <h4>Pradd Tattoo:</h4>
                        <h5>Сайт</h5>
                        <p>Quis qui labore irure ut ad Lorem culpa eu proident id nisi. Occaecat commodo sunt non excepteur culpa laborum labore amet commodo sint nostrud adipisicing id.</p>
                        <a>Смотреть кейс</a>
                    </div>
                </div>
            </div>
            <h2 className="title">КЕЙСЫ</h2>
            <div className="fourthcon-1">
                <div className="case-1">
                    <h3>Видеосъемка</h3>
                </div>
                <div className="case-2">
                    <h3>Фотосъемка</h3>
                </div>
                <div className="case-3">
                    <h3>Рекламные ролики</h3>
                </div>
            </div>
            <div className="fourthcon-2">
                <div className="case-4">
                    <h3>Таргетинг</h3>
                </div>
                <div className="case-5">
                    <h3>SMM</h3>
                </div>
                <div className="case-6">
                    <h3>Сайт</h3>                    
                </div>
            </div>
            <h2 className="title">НАШ БЛОГ</h2>
            <div className="fifthcon">
                <div className="blog-1">
                    <div className="fifthcon-1">
                        <h3>ХУДОЖНИКИ, <br></br>КОТОРЫЕ ЗАДАЮТ <br></br>ТОН ИНДУСТРИИ</h3>
                    </div>
                    <div>
                        <p>Лучшие современные графические <br></br>дизайнеры</p>
                    </div>
                </div>
                <div className="blog-2">
                    <div className="fifthcon-2">
                        <h3>ХУДОЖЕСТВЕННАЯ <br></br>РЕТУШЬ</h3>
                    </div>
                    <div>
                        <p>Принципы хорошей рекламы <br></br>не меняются – дизайнерам лишь </p>
                    </div>
                </div>
                <div className="blog-3">
                    <div className="fifthcon-3">
                        <h3>КРЕАТИВНАЯ КОМПЬЮТЕРНАЯ ГРАФИКА В РЕКЛАМЕ</h3>
                    </div>
                    <div> 
                        <p>Верите в чудеса?<br></br>Думаете, что Ваше фото с ужасным  </p>
                    </div>
                </div>
            </div>
            <h2 className="title">НАШИ ПАРТНЕРЫ</h2>
            <div className="sixthcon">
                <div className="partners">
                    <img src={AlexFitness} alt="Alex Fitness logo" />
                    <img src={LogoACB} alt="ACB logo" />
                    <img src={LogoAKB} alt="AKB logo" />
                    <img src={LogoXS} alt="XS logo" />
                </div>
                <div className="review">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dolor risus purus, id massa aenean. Amet eget ornare ut urna accumsan tellus. Lorem commodo enim facilisi a. Pellentesque pharetra pretium vestibulum, non scelerisque tempus amet sollicitudin.</p>
                    <div>
                        <img src></img>
                        <h2>Руководитель сервиса Шишкин Лес</h2>
                    </div>
                </div>
            </div>
            <h2 className="title">НАШИ ПАРТНЕРЫ</h2>
        </div>
    )
}