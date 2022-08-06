// Import the functions you need from the SDKs you need
import _Time from "faker/lib/time";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set  } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2G9W7cgMksOk0SIwYEFF2rIXaXz0vn6U",
  authDomain: "expense-tracket-app.firebaseapp.com",
  projectId: "expense-tracket-app",
  storageBucket: "expense-tracket-app.appspot.com",
  messagingSenderId: "989898032966",
  appId: "1:989898032966:web:6fdbb9e0b6c872cfd88747",
  measurementId: "G-5M0F81MLBC",
  databaseURL: "https://expense-tracket-app-default-rtdb.asia-southeast1.firebasedatabase.app/",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeUserData(userId, _title, _decs,_value,_time,_type ) {
    const db = getDatabase();
    set(ref(db, 'transactions/' + userId), {
      title: _title,
      desc: _decs,
      value: _value,
      time: _time,
      type: _type
    });
  }
writeUserData(1,'market','anas@gmail.com', 12,new Date(),'Expense')  
console.log(database)