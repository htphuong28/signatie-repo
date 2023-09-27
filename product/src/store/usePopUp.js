import { create } from 'zustand'

const usePopup = create((set) => ({
    show : false,
    setShow : (newStatus) => set({show: newStatus}),
}))

export default usePopup