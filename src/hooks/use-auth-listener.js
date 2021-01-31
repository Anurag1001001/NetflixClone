import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// ************************************************************************

// but here's a hooks based solution to remove(unmount) the new firebase onAuthStateChanged listener in react

// React.useEffect(() => {
//   const unsubscribe = firebase.auth().onAuthStateChanged((user) => { // detaching the listener
//       if (user) {
//           // ...your code to handle authenticated users.
//       } else {
//           // No user is signed in...code to handle unauthenticated users.
//       }
//   });
//   return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
// }, []);

// ************************************************************************

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  return { user };
}
