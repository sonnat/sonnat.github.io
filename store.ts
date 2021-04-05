import createStore, { State } from "zustand";
import { persist } from "zustand/middleware";

interface IState extends State {
  isDarkMode: boolean;
  isBurgerMenuOpen: boolean;
  isPageLoading: boolean;
  toggleDarkMode: () => void;
  setPageLoading: (isLoading: boolean) => void;
  setBurgerMenuOpen: (isOpen: boolean) => void;
}

const useStore = createStore<IState>(
  persist(
    set => ({
      isDarkMode: false,
      isBurgerMenuOpen: false,
      isPageLoading: false,
      setPageLoading: isLoading => set(() => ({ isPageLoading: isLoading })),
      setBurgerMenuOpen: isOpen => set(() => ({ isBurgerMenuOpen: isOpen })),
      toggleDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode }))
    }),
    { name: "theme-mode-storage", whitelist: ["isDarkMode"] }
  )
);

export default useStore;
