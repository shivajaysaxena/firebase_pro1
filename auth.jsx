import { useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { auth, googleProvider } from "../config/firebase";

export const Auth = () =>{
    const [email,setEmail] = useState("")
    const [password , setPassword] = useState("")
    
    const signIn = async() =>{
        try{
        await createUserWithEmailAndPassword(auth, email, password)
        } catch(err){
            alert(err);
        }

    }

    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          alert(err);
        }
      };

      const logout = async () => {
        try {
          await signOut(auth);
        } catch (err) {
          alert(err);
        }
      };
    return (
        <div>
            <input
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}> Sign In</button>
        <button onClick={signInWithGoogle}> Sign In With Google</button>
        <button onClick={logout}> Logout </button>
      </div>
    )
}