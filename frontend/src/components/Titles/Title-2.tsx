import './title.css';

interface Title2Props{
    text : string,
    center: boolean,
}

export function Title2({text, center}:Title2Props){
    return (<h2 className={`title-2${center ? '-centered' : ''}`}>{text}</h2>)
}

export default Title2;