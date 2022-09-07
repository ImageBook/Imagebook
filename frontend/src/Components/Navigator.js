import styles from './Navigator.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TuneIcon from '@mui/icons-material/Tune';
import ShareIcon from '@mui/icons-material/Share';

const Navigator = (props)=>{

    const backHandler = ()=>{
        props.backHandler();
    }
    return(
        <div className={styles.navigation} style={{
            position: props.type==='overlay'? 'absolute':'',
            color: props.type==='overlay'?'white':'black'
            
        }}>
            <div className={styles.left}>
                <div onClick={backHandler}><ArrowBackIcon/></div>
                <h3 className='text-xl font-semibold'>{props.heading}</h3>
            </div>
            {props.icon==='share' && <ShareIcon/>}
            
        </div>
    )
}
export default Navigator;