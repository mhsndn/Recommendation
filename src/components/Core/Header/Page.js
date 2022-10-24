import classes from './Page.module.scss';

const Page =(props)=>{
    return(<div>
            <div className={classes.header}>{props.title} </div>
            {props.children}
    </div>)
}

export default Page;