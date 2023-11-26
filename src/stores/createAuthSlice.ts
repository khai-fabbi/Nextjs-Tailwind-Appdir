import type { StateCreator } from 'zustand';

import { getToken } from '@/lib/utils';

import type { MyState } from './useStore';

export interface IAuthSlice {
  authenticated: boolean; // a boolean value indicating whether the user is authenticated or not
  setAuthentication: (val: boolean) => void;
  user: any | null;
  setUser: (user: any) => void;
}
export const createAuthSlice: StateCreator<MyState, [], [], IAuthSlice> = (
  set
) => ({
  authenticated: !!getToken().access_token, // initial value of authenticated property
  user: null, // initial value of user property
  setAuthentication: (val) =>
    set((state) => ({ ...state, authenticated: val })),
  setUser: (user) => set((state) => ({ ...state, user })),
});
