import classes from './Alert.module.scss';
import { useDispatch,useSelector } from 'react-redux';
import { formAction } from '../../../store/slices/form';

const Alert=(props)=>{
  const dispatch=useDispatch();
  const Close=()=>{
    dispatch(formAction.setAlert())
  }
  return(<div>

<div className={`${classes.alert} ${classes.alertdanger}`} role="alert">
  <button type="button" className={classes.closealert} onClick={Close}>×</button>
  <i className={classes.materialicons}>error</i>
        <p> {props.text}</p> 
</div>
  </div>)
}

export default Alert;