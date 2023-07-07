import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAolrm-ctaLsvY1x5Hz3ZC8t_MkduWj-lA",
    authDomain: "online-counter-by-safoun.firebaseapp.com",
    projectId: "online-counter-by-safoun",
    storageBucket: "online-counter-by-safoun.appspot.com",
    messagingSenderId: "923374734131",
    appId: "1:923374734131:web:be485ba0e239c563718c46"
};

const app = initializeApp(firebaseConfig);
export default app;