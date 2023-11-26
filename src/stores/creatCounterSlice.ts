import type { StateCreator } from 'zustand';

import type { MyState } from './useStore';

export interface ICounterSlice {
  count: number;
  increment: () => void;
}
export const createCounterSlice: StateCreator<
  MyState,
  [],
  [],
  ICounterSlice
> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ ...state, count: state.count + 1 })),
});
