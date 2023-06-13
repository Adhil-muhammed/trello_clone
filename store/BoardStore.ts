import { getTodosGroupedByColum } from "@/lib/getTodosGroupedByColum";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
}

export const useBordStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Columns>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColum();
    set({ board });
  },
}));

// increasePopulation: () =>
// set((state: any) => ({ number: state.number + 1 }));
// removeAllBears: () => set({ bears: 0 }),
