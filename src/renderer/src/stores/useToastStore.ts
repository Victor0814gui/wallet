import { create } from 'zustand'



type Toast = {
    id: string;
    title: string;
    description?: string;
    type: "warning" | "error" | "success";
}

type State = {
  toast: Toast | null;
}

type Action = {
  addToast: (toast: Toast) => void
  removeToast: () => void
}

// Create your store, which includes both state and (optionally) actions
export const useToastStore = create<State & Action>((set) => ({
  toast: null,
  addToast: (toast: Toast) => set(() => ({ 
    toast: toast,
   })),
  removeToast: () => set(() => ({ toast: null })),
}))
