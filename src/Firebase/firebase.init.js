import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebase.config';


const initfireApp = () => {
    initializeApp(firebaseConfig);
}



export default initfireApp;