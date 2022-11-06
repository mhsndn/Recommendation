import { useDispatch,useSelector } from 'react-redux';
import { formAction } from '../../store/slices/form';
import {useRef,useEffect } from 'react';

import Header from '../Core/Header/Header';
import classes from './Recommendation.module.scss';

const Recommendation=()=>{
   const dispatch=useDispatch();
   const formRef = useRef();
   const recommendationTableData=useSelector(state=>state.form.recommendations);
   const recommendationInputData=useSelector(state=>state.form.recommendation);

   useEffect(() => {
      dispatch(formAction.setResetRecommendation());
   }, []);

   const SetForm=(name,value)=>{
               dispatch(formAction.setRecommendationForm({name:name,value:value}))
         };

   const rows=recommendationTableData?.map(row=>{
      return(<tr key={row.id} >
               <td>{row.name}</td>
               <td>{row.recommendation}</td>
               <td>{row.adminResponse} </td>
            </tr>)
         });

      const Submit=(event)=>{
         event.preventDefault();
         if(
            recommendationInputData.name.length ===0 
            ||
            recommendationInputData.name.length>=100 
            ||
            recommendationInputData.recommendation.length===0
            ||
            recommendationInputData.recommendation.length>=100
         ){
            dispatch(formAction.setAlert(true));
         }else{
            dispatch(formAction.setsetRecommendation());
            dispatch(formAction.setResetRecommendation());
         }
      
         formRef.current.reset();
      }
  return(
     <Header title='Recommendation' alertText='name or recommendation are empty or they are too long'>
            <div className={classes.recommendation}>
               <form  className={classes.recommendationForm} onSubmit={Submit} ref={formRef}>
                  <div>
                     <label>Name:</label>
                     <input type="text" placeholder=" name "  onChange={(e)=>SetForm('name',e.target.value.trim())}/>
                  </div>
                  <div>
                     <label>Recommendation:</label>
                     <textarea className={classes.textArea} placeholder="Enter your note here..." onChange={(e)=>SetForm('recommendation',e.target.value.trim())}></textarea>
                     <button type='submit'>submit</button>
                  </div> 
               </form >
                  <div className={classes.tableUsers}>
                     <h1 className={classes.header}>All Recommendations:</h1>
                     <table cellSpacing="0">
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
     </Header>
    )
}

export default Recommendation;