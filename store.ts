import createStore, { type State } from "zustand";
import { persist } from "zustand/middleware";

interface IState extends State {
  isBurgerMenuOpen: boolean;
  isPageLoading: boolean;
  setPageLoading: (isLoading: boolean) => void;
  setBurgerMenuOpen: (isOpen: boolean) => void;
}

export const useDarkModeStore = createStore<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}>(
  persist(
    set => ({
      isDarkMode: false as boolean,
      toggleDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode }))
    }),
    { name: "theme-mode-storage" }
  )
);

export const usePageStore = createStore<IState>(set => ({
  isBurgerMenuOpen: false,
  isPageLoading: false,
  setPageLoading: isLoading => set(() => ({ isPageLoading: isLoading })),
  setBurgerMenuOpen: isOpen => set(() => ({ isBurgerMenuOpen: isOpen }))
}));
