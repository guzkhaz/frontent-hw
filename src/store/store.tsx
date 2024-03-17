import { create } from 'zustand';

const useStore = create((set) => ({
    complete: [],
    incomplete: [],
    markComplete: (todo) =>
        set((state) => ({
            complete: [...state.complete, todo],
            incomplete: state.incomplete.filter((item) => item !== todo),
        })),
    markIncomplete: (todo) =>
        set((state) => ({
            complete: state.complete.filter((item) => item !== todo),
            incomplete: [...state.incomplete, todo],
        })),
    deleteTodo: (todo) =>
        set((state) => ({
            complete: state.complete.filter((item) => item !== todo),
            incomplete: state.incomplete.filter((item) => item !== todo),
        })),
}));

export default useStore;