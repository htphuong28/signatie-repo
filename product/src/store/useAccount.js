import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAccount = create(
  persist(
    (set) => ({
      // stateName
      userInfo: {
        displayName: '',
        email: '',
        password: '',
        profileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo4XV_JS6I3DKd2ED8-MXbUBOu1tZ7qr_0g&usqp=CAU',
        accessToken: '',
        active: false,
        uid: ''
      },
      // function to update value of stateName
      // upadateUserInfo
      setUserInfo: (userInfo) =>
        set((previousState) => ({
          userInfo: {
            ...previousState.userInfo,
            ...userInfo,
          },
        })),

      
    }),
    {
      name: 'useAccount', // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
