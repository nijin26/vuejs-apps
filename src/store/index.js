import { createStore } from 'vuex'

export const store = createStore({
    state(){
        return {
            isAuth: false,
            authUser:{}
        }
    },
    mutations:{
        setIsAuth(state,payload){
            state.isAuth = payload
        },
        setAuthUser(state,payload){
            state.authUser = payload
        }
    }
})

