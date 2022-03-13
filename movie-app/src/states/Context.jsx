import * as React from 'react';
import {RootStore} from './RootStore';

// 괄호 안에는 기본 값을 넣어준다.
export const StoreContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoreContext);