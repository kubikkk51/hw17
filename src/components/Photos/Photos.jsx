import Ceb from './img/cebbb.png';
import Notail from './img/nono.png';
import Saksa from './img/saksa-1.png';
import Sumail from './img/sumail1.png';
import Topson from './img/topson.png';
import './styles.css';

export default function Photos() {
    return (
        <div className="photo-container">
            <img src={Ceb} className="img" alt=""/>
            <img src={Notail} className="img" alt=""/>
            <img src={Saksa} className="img" alt=""/>
            <img src={Sumail} className="img" alt=""/>
            <img src={Topson} className="img" alt=""/>

        </div>
    )
}