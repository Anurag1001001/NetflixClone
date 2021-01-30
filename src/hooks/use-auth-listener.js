import { useState, useEffect, useContext } from "react";
import { FirebaseContext, firebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);
}

useEffect(() => {
  const Listener = firebase.auth().onAuthStateChange((authUser) => {
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
      setUser(authUser);
    } else {
      localStorage.removeItem("authUser");
      setUser(null);
    }
  });
  return () => listener();
}, []);
return { user };
