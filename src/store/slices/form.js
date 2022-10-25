import { createSlice } from '@reduxjs/toolkit'
import Recommendation from '../../components/Recommendation/Recommendation'

const initialState= {
  auth:false,
  login:{
      name:'',
      password:''
  },
  // recommendation:{
  //   name:'',
  //   recommendation:'',
  //   adminResponse:''

  // }
  recommendations:[]
}

export const Form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setRecommendation(state,action){
      // state.recommendation[action.payload.name]=action.payload.value;
      let recommendation = action.payload || []
      recommendation = [
          ...recommendation,
          { name: '', recommendation: '', adminResponse: ''},
        ]
        state.recommendations=  recommendation
       },

  },
})
export const formAction = Form.actions
export default Form; 