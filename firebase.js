import {initializeApp} from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';
import 'fireabse/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBtNL-OLe58YLz_Q_iqiV1U4BO4ccWIXTM",
    authDomain: "project-unique-d94d1.firebaseapp.com",
    databaseURL: "https://project-unique-d94d1.firebasedatabase.com",
    projectId: "project-unique-d94d1",
    storageBucket: "project-unique-d94d1.appspot.com",
    meassagingsenderId: "648214093520",
    appId: "1:648214093520:web:6ea02f583cd080916648d"
}  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.app(initializeApp);

firebase.firestore().settings({
    ignoreUndefinedProperties: true,
});

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };