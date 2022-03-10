import * as React from 'react';
import { RootStore } from './RootStore';

export const StoreContext = React.createContext(new RootStore());
export const StoreProvider = StoreContext.Provider; // 이거는 프로바이더로 쓸거고

export const useStores = () => React.useContext(StoreContext); // 이거는 나중에 훅으로 사용