import createStore, { type State } from "zustand";
import { persist } from "zustand/middleware";

interface IState extends State {
  isBurgerMenuOpen: boolean;
  isPageLoaded: boolean;
  isRouteChanged: boolean;
  setPageLoaded: (isLoaded: boolean) => void;
  setRouteChanged: (isChanged: boolean) => void;
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
  isPageLoaded: false,
  isRouteChanged: false,
  setPageLoaded: isLoaded => set(() => ({ isPageLoaded: isLoaded })),
  setRouteChanged: isChanged => set(() => ({ isRouteChanged: isChanged })),
  setBurgerMenuOpen: isOpen => set(() => ({ isBurgerMenuOpen: isOpen }))
}));
