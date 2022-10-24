import Page from '../Core/Header/Page';
import classes from './Recommendation.module.scss';

const Recommendation=()=>{
    return(
        <Page title='Recommendation'>
    <div className={classes.recommendation}>
        <form  className={classes.recommendationForm}>
          <div>
            <label>Name:</label>
            <input type="text" placeholder=" name " required/>
          </div>
          <div>
            <label>Recommendation:</label>
            <textarea className={classes.textArea} placeholder="Enter your note here..."></textarea>
          <button>submit</button>
          </div> 
        </form>
<div className={classes.tableUsers}>
   <h1 className={classes.header}>All Recommendations:</h1>
   
   <table cellspacing="0">
      <tr>
         
         <th>Name</th>
         <th>Recommendation</th>
         <th width="230">Admin’s Response</th>
      </tr>

      <tr>
    
         <td>Jane Doe</td>
         <td>01 800 2000</td>
         <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </td>
      </tr>


   </table>
</div>

    </div>
    </Page>
    )
}

export default Recommendation;