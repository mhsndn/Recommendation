import classes from './Login.module.scss';
import Page from './../Core/Header/Page';

const Login=()=>{

  const Submit=()=>{

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
                    <input type="text" placeholder="Username" required/>
                  </p>
                  <p>
                    <label>Password<span>*</span></label>
                    <input type="password" placeholder="Password" required/>
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