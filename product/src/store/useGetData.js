import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useGetData = create(
  persist(
    (set) => ({
      // stateName
      gestureData: [
        
      ],
      // function to update value of stateName
      // upadateUserInfo
      setGestureData: (gestureData) =>
        set((previousState) => ({
          gestureData: [
            ...previousState.gestureData,
            ...gestureData,
          ],
        })),

      
    }),
    {
      name: 'useGestureData', // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
