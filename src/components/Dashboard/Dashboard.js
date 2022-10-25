import Page from '../Core/Header/Page';
import classes from './Dashboard.module.scss';
import { useDispatch,useSelector } from 'react-redux';
import { formAction } from '../../store/slices/form';
import { useEffect } from 'react';


const Dashboard=()=>{
const dispatch=useDispatch();
 const recommendationTableData=useSelector(state=>state.form.responses)
const setDashboardForm=(name,value,id)=>{
      dispatch(formAction.setResponseForm({name:name,value:value,id:id}))
   }

const rows=recommendationTableData?.map(row=>{
   return(<tr key={row.id} >
            <td>{row.name}</td>
            <td>{row.recommendation}</td>
            <td> <textarea onChange={(e)=>setDashboardForm('adminResponse',e.target.value,row.id)} defaultValue={row.adminResponse}></textarea> </td>
   </tr>)
})
  
  const Submit=(event)=>{
   event.preventDefault();
   dispatch(formAction.setResponse());
  }
    return(
        <Page title='Dashboard'>
    <div className={classes.dashboard}>
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
            <form  className={classes.dashboardForm} onSubmit={Submit}>
            <button type='submit'>submit</button>
         </form>
      
         </div>
    </div>
    </Page>
    )
}

export default Dashboard;