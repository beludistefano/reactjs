
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC2KnFbdQN2-SuBgLOIt9xn2Vde33OWVjI",
  authDomain: "beludis-ecommerce.firebaseapp.com",
  projectId: "beludis-ecommerce",
  storageBucket: "beludis-ecommerce.appspot.com",
  messagingSenderId: "524235231461",
  appId: "1:524235231461:web:aa824cbafd2f8b51c8c40c"
};


const app = initializeApp(firebaseConfig);

export default function getFirebaseApp(){
    return app
}