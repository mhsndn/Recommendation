import classes from './Login.module.scss';
import Page from './../Core/Header/Page';
import { useDispatch,useSelector } from 'react-redux';
import { formAction } from '../../store/slices/form';
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const dispatch=useDispatch();
  let navigate = useNavigate();
  const loginData=useSelector(state=>state.form.login)

  const setLoginForm=(name,value)=>{
    dispatch(formAction.setLoginForm({name:name,value:value}))
 }
  const Submit=(event)=>{
    event.preventDefault();
    if(loginData.username==='admin' && loginData.password==='admin' ){
      dispatch(formAction.setAuth(true));
      navigate(`/dashboard`);
    }
  }


  
    return(
    <div>
      <Page title='Admin'>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.colleft}>
              <div className={classes.logintext}>
                <h1>Welcome to </h1>
                <h2>Irancell Labs</h2>
              </div>
            </div>
            <div className={classes.colright}>
              <div className={classes.loginform}>
                <h2>Login</h2>
                <form onSubmit={Submit}>
                  <p>
                    <label>Username <span>*</span></label>
                    <input type="text" placeholder="Username" required  onChange={(e)=>setLoginForm('username',e.target.value)}/>
                  </p>
                  <p>
                    <label>Password<span>*</span></label>
                    <input type="password" placeholder="Password" required  onChange={(e)=>setLoginForm('password',e.target.value)}/>
                  </p>
                  <p>
                    <input type="submit" />
                  </p>
                </form>
              </div>
            </div>
          </div>
          </div>
    </Page>
 </div>);
}

export default Login;