import {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { formAction } from '../../../store/slices/form';
import Alert from '../Alert/Alert';
import Menu from '../Menu/Menu';
import classes from './Header.module.scss';

const Header =(props)=>{
  const dispatch=useDispatch();
  const alert =useSelector(state=>state.form.alert)
  useEffect(() => {
    dispatch(formAction.setAlert(false))
  }, []);

    return(
          <div>
            <Menu/>
             <div className={classes.header}>{props.title} </div>
             {alert  ?<Alert text={props.alertText} />:null} 
             {props.children}
          </div>
    )
};

export default Header;