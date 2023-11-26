import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ICounterSlice } from './creatCounterSlice';
import { createCounterSlice } from './creatCounterSlice';
import { createAuthSlice, IAuthSlice } from './createAuthSlice';
export type MyState = IAuthSlice & ICounterSlice;

export const useStore = create<MyState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createCounterSlice(...a),
    }),
    {
      name: 'zustand-store',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ['authenticated', 'user'].includes(key)
          )
        ),
    }
  )
);
