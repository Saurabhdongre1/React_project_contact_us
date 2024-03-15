
import styles from './botton.module.css'
function Botton(props) {
    const {isOutline,icon,text,...rest}=props;
  return (
    <button {...rest}
    className={isOutline ? styles.Outline_btn : styles.primary_btn}>
      {icon}
      {text}
      
    </button>
  )
}

export default Botton
