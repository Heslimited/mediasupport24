import camera from '../assets/svg/camera.svg'
import phone from '../assets/svg/phone.svg'
import telegram from '../assets/svg/telegram.svg'
import lines from '../assets/svg/lines.svg'
import sololine from '../assets/svg/sololine.svg'

import '../css/blocks/Header.scss'

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