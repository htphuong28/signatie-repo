import { create } from 'zustand'

const useSelectGesture = create((set) => ({
    selectedItem : [],
    setSelectedItem : (newItem) => set({selectedItem: newItem}),
}))

export default useSelectGesture