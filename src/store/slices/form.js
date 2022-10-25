import { createSlice } from '@reduxjs/toolkit'
import Recommendation from '../../components/Recommendation/Recommendation'
import { v4 as uuidv4 } from 'uuid';
const initialState= {
  auth:false,
  login:{
    username:'',
    password:''
  },
  recommendation:{
    id:null,
    name:'',
    recommendation:'',
    adminResponse:''

  },
  recommendations:[],
  responses:[]
}

export const Form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setRecommendationForm(state,action){
      state.recommendation[action.payload.name]=action.payload.value;
      state.recommendation.id= uuidv4();
    },
     setsetRecommendation(state){
      state.recommendations= [
        ...state.recommendations,
        state.recommendation,
      ]
      state.responses= [...state.recommendations]

    },
    setResponseForm(state,action){
      state.responses.filter(item=>item.id===action.payload.id?item.adminResponse=action.payload.value:'')

    },
    setResponse(state){
      state.recommendations= [...state.responses]
    },
    setLoginForm(state,action){
      state.login[action.payload.name]=action.payload.value;
    },
    setAuth(state,action){
      state.auth=action.payload;
    }

  },
})
export const formAction = Form.actions
export default Form; 