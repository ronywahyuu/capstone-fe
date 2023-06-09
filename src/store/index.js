import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

const useStore = create((set) => ({
  authUser: null,
  loading: false,
  message: null,
  setAuthUser: (user) =>
    set((state) => ({
      ...state,
      authUser: user,
    })),
  setLoading: (loading) => set((state) => ({ ...state, loading })),
}));

export const usePersistedStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
export default useStore;
