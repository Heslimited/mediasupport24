import mail from '../assets/svg/mail.svg'
import phone from '../assets/svg/phone.svg'
import facebook from '../assets/svg/facebook.svg'
import vk from '../assets/svg/vk.svg'
import youtube from '../assets/svg/youtube.svg'
import tgfooter from '../assets/svg/tgfooter.svg'
import instagram from '../assets/svg/instagram.svg'

import '../css/blocks/Footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__contacts">
                <div>
                    <img src={mail}/>
                    <p>info@sportmedia.news</p>
                </div>
                <div>
                    <img src={phone}/>
                    <p>8(495)109-02-55</p>
                </div>
            </div>
            <div className="footer__media">
                <div className="footer__media-con">
                    <a><img src={facebook}/></a>
                    <a><img src={vk}/></a>
                    <a><img src={instagram}/></a>
                    <a><img src={youtube}/></a>
                    <a><img src={tgfooter}/></a>
                </div>
            </div>
            <div className="footer__address">
                <p>г. Москва, Селезневская, 11а ст2,<br></br> 422 офис</p>
            </div>
        </footer>
    )
} 