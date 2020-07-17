import store from '../stateManagement/store';


// export const Auth = () => {
//   const state = store.getState();

// }

export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const isAuthenticated = () => {
  return store.getState().isAuth
}

export const login = () => {
  // here dispatch an action to the store 
  store.dispatch({type: "LOGGED_IN", isAuth: true})
}




// class Auth {
//     constructor() {
//       this.storeObj = store.getState();
//       // this.authenticated = this.storeObj.isAuth;
//       this.token = window.localStorage.getItem('token');
      
//     }
  
//     login() {
//         if(this.getToken()){
//             return this.authenticated = true;  
//         }
     
//     }

//     // test state object 
//     getStateObj(){
//       return store.getState()
//     }

   
//     logout() {
//       this.authenticated = false;
//       this.token = null;
      
//     }
  
//     isAuthenticated() {
//       return this.getStateObj.isAuth;
      
//     }
//   }


