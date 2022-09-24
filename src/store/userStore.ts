import create from "zustand";

interface UserState {
  authenticated: boolean;
  login: () => void;
}

const useStoreUsers = create<UserState>((set) => ({
  authenticated: false,
  login: () => set((state) => ({ authenticated: true })),
}));

export { useStoreUsers };
