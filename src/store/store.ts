import { combineReducers, applyMiddleware, Store, createStore } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./reducer";
import { IConsumerGoodAction, IConsumerGoodState } from "./types";
import { DispatchType } from "./types";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";




export function Store() {

    return ;
  }

