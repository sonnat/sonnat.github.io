import createStore, { State } from "zustand";
import { persist } from "zustand/middleware";

interface IState extends State {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useStore = createStore<IState>(
  persist(
    set => ({
      isDarkMode: false,
      toggleDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode }))
    }),
    { name: "theme-mode-storage", whitelist: ["isDarkMode"] }
  )
);

export default useStore;
