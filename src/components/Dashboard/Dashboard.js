import { useDispatch,useSelector } from 'react-redux';
import { formAction } from '../../store/slices/form';

import Header from '../Core/Header/Header';
import classes from './Dashboard.module.scss';

const Dashboard=()=>{
   const dispatch=useDispatch();
   const responseTableData=useSelector(state=>state.form.responses);

   const setDashboardForm=(name,value,id)=>{
         dispatch(formAction.setResponseForm({name:name,value:value,id:id}));
      };
   const rows=responseTableData?.map(row=>{
         return(<tr key={row.id} >
                  <td>{row.name}</td>
                  <td>{row.recommendation}</td>
                  <td> <textarea className={classes.textArea} onChange={(e)=>setDashboardForm('adminResponse',e.target.value,row.id)} defaultValue={row.adminResponse}></textarea> </td>
         </tr>)
      });
   const Submit=(event)=>{
         event.preventDefault();
         dispatch(formAction.setResponse());
        };

 return(
    <Header title='Dashboard'>
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
                  <button type='submit'>Save</button>
               </form>
               </div>
         </div>
    </Header>
    )
}

export default Dashboard;