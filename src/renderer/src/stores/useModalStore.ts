import { create } from 'zustand'



type Modal = {
    id: string;
    title: string;
    description: string;
    action: () => void;
}

type State = {
  modal: Modal | null;
}

type Action = {
  addModal: (modal: Modal) => void
  removeModal: () => void
}

// Create your store, which includes both state and (optionally) actions
export const useModalStore = create<State & Action>((set) => ({
  modal: null,
  addModal: (modal: Modal) => set(() => ({ 
    modal: modal,
   })),
  removeModal: () => set(() => ({ modal: null })),
}))
