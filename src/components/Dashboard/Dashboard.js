import Page from '../Core/Header/Page';
import classes from './Dashboard.module.scss';
import { useDispatch,useSelector } from 'react-redux';
import { formAction } from '../../store/slices/form';
import { useEffect } from 'react';


const Dashboard=()=>{
const dispatch=useDispatch();
 const recommendationTableData=useSelector(state=>state.form.recommendations)
// const setForm=(name,value)=>{
//       dispatch(formAction.setRecommendation({name:name,value:value}))
//    }

useEffect(()=>{

},[])
const rows=recommendationTableData?.map(row=>{
   return(<tr key={row.name} >
      <td>{row.name}</td>
      <td>{row.recommendation}</td>
      <td>{row.adminResponse} </td>
   </tr>)
})
  
  const Submit=(event)=>{
   event.preventDefault();
   // dispatch(formAction.setRow())
  }
    return(
        <Page title='Dashboard'>
    <div className={classes.dashboard}>
        <form  className={classes.dashboardForm} onSubmit={Submit}>
        </form>
         <div className={classes.tableUsers}>
            <h1 className={classes.header}>All Recommendations:</h1>
            <table cellSpacing="0" className={classes.dashboardtable}>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Recommendation</th>
                  <th width="230">Admin’s Response</th>
               </tr>
               </thead>
               <tbody>
               {rows}
               </tbody>
            
            </table>
         </div>
    </div>
    </Page>
    )
}

export default Dashboard;