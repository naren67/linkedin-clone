import firebase from 'firebase'

// const firebaseConfig = {
//           apiKey: "AIzaSyBgDeIwhhrjkysDCv1SUE10QCMAARL3YgI",
//           authDomain: "linkedin-clone-10b48.firebaseapp.com",
//           projectId: "linkedin-clone-10b48",
//           storageBucket: "linkedin-clone-10b48.appspot.com",
//           messagingSenderId: "483917138227",
//           appId: "1:483917138227:web:2adc7edb60753c361d1646",
//           measurementId: "G-8ZF24LDLMB"
//         };

        const firebaseApp = firebase.initializeApp({
          apiKey: "AIzaSyBgDeIwhhrjkysDCv1SUE10QCMAARL3YgI",
          authDomain: "linkedin-clone-10b48.firebaseapp.com",
          projectId: "linkedin-clone-10b48",
          storageBucket: "linkedin-clone-10b48.appspot.com",
          messagingSenderId: "483917138227",
          appId: "1:483917138227:web:2adc7edb60753c361d1646",
          measurementId: "G-8ZF24LDLMB"
        })

        const db = firebaseApp.firestore()

        const auth = firebase.auth()

        export {auth, db}