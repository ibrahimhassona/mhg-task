import { configureStore } from "@reduxjs/toolkit";
import Urlvalid from "./urlSlice/urlValid";
import moduleState from "./moduleState/moduleState";
import personData from "./personData/personData";
import dataLinks from "./datalinks/dataLinks";

export const store = configureStore({
    reducer:{
        url:Urlvalid,
        dataLinks:dataLinks,
        module:moduleState,
        person:personData
    }
})

export const RootState = store.getState;
export const AppDispatch = store.dispatch;