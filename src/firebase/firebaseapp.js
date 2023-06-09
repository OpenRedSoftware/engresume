import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from "firebase/analytics";
import 'firebase/app';

export const config = {
  apiKey: "AIzaSyBRTRaptx8NL5jALfVifwxZ2Gx2MP2NiaA",
  authDomain: "engresume-68715.firebaseapp.com",
  projectId: "engresume-68715",
  storageBucket: "engresume-68715.appspot.com",
  messagingSenderId: "106698040301",
  appId: "1:106698040301:web:45a3ede06cfcf779dcfde4",
  measurementId: "G-0FK9JZBEDV"
};

const app = initializeApp(config);
const analytics = getAnalytics(app);

export const logevent = (name, params) => {
  logEvent(analytics, name, params);
  // console.log("logevent", name, params)
}
