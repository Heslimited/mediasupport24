import monitor from '../assets/monitor.svg'
import rocket from '../assets/rocket.svg'
import diagram from '../assets/diagram.svg'
import cloud from '../assets/cloud.svg'
import fannel from '../assets/fannel.svg'
import SMM from '../assets/SMM.svg'
import '../css/blocks/Main.scss'

export default function MainPage () {
    return (
        <div>
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
            <div className="fourthcon">
                <div className="case-1">
                    <h3>Видеосъемка</h3>
                </div>
                <div className="case-2">
                    <h3>Фотосъемка</h3>
                </div>
                <div className="case-3">
                    <h3>Рекламные ролики</h3>
                </div>
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
        </div>
    )
}