import * as React from 'react';
import {RootStore} from "./RootStore";

export const StoreContext = React.createContext(new RootStore());

export const useStores = ()=> React.useContext(StoreContext);