import app from 'firebase/app';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZHk3FdTSPRn1uOF7C9aNGAiGoop96c-0",
  authDomain: "findit-cd54e.firebaseapp.com",
  databaseURL: "https://findit-cd54e.firebaseio.com",
  projectId: "findit-cd54e",
  storageBucket: "findit-cd54e.appspot.com",
  messagingSenderId: "801673346676"
};
app.initializeApp(config);

export default app;