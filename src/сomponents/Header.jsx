import camera from '../assets/camera.svg'
import phone from '../assets/phone.svg'
import telegram from '../assets/telegram.svg'
import lines from '../assets/lines.svg'
import sololine from '../assets/sololine.svg'


export default function Header() {
    return (
        <header className="header">
            <div className="media">
                <a className="photo">
                    <img src={camera}/>
                </a>
                <a className="sololine">
                    <img src={sololine} />
                </a>
                <span>MEDIA SUPPORT24</span>
            </div>
            <div className="text">
                <p>Услуги</p>
                <p>Кейсы</p>
            </div>
            <div className="phone">
                <a>
                    <img src={phone} />
                </a>
                <b>8(495)109-02-55</b>
            </div>
            
            <a>
                <img src={telegram}/>
            </a>
            <div className="burger">
                <img src={lines}/>
            </div>
        </header>
    )
} 