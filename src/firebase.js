import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAITlDJG3J8X3n8nJtIFJBLMyhOHQJvhT4",
  authDomain: "stnup-fbbeb.firebaseapp.com",
  projectId: "stnup-fbbeb",
  storageBucket: "stnup-fbbeb.appspot.com",
  messagingSenderId: "241776463312",
  appId: "1:241776463312:web:b23eaa7e270a0211677dd5",
  measurementId: "G-166T4J6QS5"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();