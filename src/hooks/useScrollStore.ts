import { create } from "zustand";

type useScrollStore = {
  show: boolean;
  setShow: (value: boolean) => void;
};

export const useScrollStore = create<useScrollStore>((set) => ({
  show: false,
  setShow: (value) => set({ show: value }),
}));
