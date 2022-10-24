import classes from './Login.module.scss';

const Login=()=>{
    return(<div>
<div className={classes.wrapper}>
  <div className={classes.container}>
    <div className={classes.colleft}>
      <div className={classes.logintext}>
        <h2>Welcome </h2>
        <h3>Irancell Labs</h3>
      </div>
    </div>
    <div className={classes.colright}>
      <div className={classes.loginform}>
        <h2>Login</h2>
        <form>
          <p>
            <label>Username or email address<span>*</span></label>
            <input type="text" placeholder="Username or Email" required/>
          </p>
          <p>
            <label>Password<span>*</span></label>
            <input type="password" placeholder="Password" required/>
          </p>
          <p>
            <input type="submit" value="Sing In" />
          </p>
        </form>
      </div>
    </div>
  </div>
  </div>
    </div>);
}

export default Login;