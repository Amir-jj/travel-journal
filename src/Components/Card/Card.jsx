import { ImLocation } from 'react-icons/Im';
import './Card.css'



export default function Card(props){
    return(
        <div  className="card">
            <img src={props.coverimg} alt="Ja" />
            <div  className="container">
                <div style={{display:'flex'}}>
                    <span className='location' ><ImLocation style={{color:'#F55A5A'}}/>{props.location}</span>
                    <a  className='google-loc' target={'_blank'} href={props.GoogleMap}>View on Google Maps</a>
                </div>  
                <h3>{props.title}</h3>
                <p className='date'>{props.date}</p>
                <p className='caption'>{props.caption}</p>
            </div>
           
        </div>
    )
}