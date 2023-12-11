import { IConsumerGood } from "../service/api"
import { IConsumerGoodAction, IConsumerGoodState, DispatchType } from "./types"

export const ADD_CONSUMERGOOD = "ADD_CONSUMERGOOD"
export const REMOVE_CONSUMERGOOD = "REMOVE_CONSUMERGOOD"

export function addConsumerGood(consumerGood: IConsumerGood) {
    const action: IConsumerGoodAction = {
      type: ADD_CONSUMERGOOD,
      consumerGood,
    }
  
    return simulateHttpRequest(action)
  }
  
  export function removeConsumerGood(consumerGood: IConsumerGood) {
    const action: IConsumerGoodAction = {
      type: REMOVE_CONSUMERGOOD,
      consumerGood,
    }
    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(action: IConsumerGoodAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }