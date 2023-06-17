import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

const useStore = create((set) => ({
  authUser: null,
  loading: false,
  message: null,
  showModal: false,

  // toggle modal
  setShowModal: () => set((state) => ({ ...state, showModal: !state.showModal })),

  setAuthUser: (user) =>
    set((state) => ({
      ...state,
      authUser: user,
    })),
  setLoading: (loading) => set((state) => ({ ...state, loading })),


  // get user from local storage
  getUser: () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  // get Donasi
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
