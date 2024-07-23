import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase"; 
import { useHistory } from "react-router-dom"; 
import "./Stylings/User.css";

const User = () => {
  // State hooks for handling user input and authentication state
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [name, setName] = useState("");
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [user, setUser] = useState(null);
  const [errorSignIn, setErrorSignIn] = useState("");
  const [errorSignUp, setErrorSignUp] = useState("");
  const history = useHistory();

  // Monitor authentication state changes
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Handle sign-in form submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn);
      console.log("Signed in successfully!");
      history.push("/statistics");
    } catch (error) {
      setErrorSignIn(error.message);
    }
  };

  // Handle sign-up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp);
      await db.collection("users").doc(userCredential.user.uid).set({
        name: name,
        email: emailSignUp,
      });
      console.log("Account created successfully!");
    } catch (error) {
      setErrorSignUp(error.message);
    }
  };

  // Render user forms or welcome message based on authentication state
  return (
    <div className="forms-container">
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={() => setUser(null)} className="log-out-button">Log Out</button>
        </div>
      ) : (
        <>
        {/*Sign Up container */}
          <div className="signup-container">
            <form onSubmit={handleSignUp} className="signup-form">

              <h2>Sign Up</h2>

              {errorSignUp && <p className="error">{errorSignUp}</p>}

              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="ex. Kevin Typer" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="ex. typeracer@gmail.com" value={emailSignUp} onChange={(e) => setEmailSignUp(e.target.value)} required />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="*************" value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} required />
              </div>

              <button type="submit" className="signup-button">Sign Up</button>

            </form>
          </div>

          {/*Log In container */}
          <div className="signin-container">
            <form onSubmit={handleSignIn} className="signin-form">

              <h2>Log In</h2>

              {errorSignIn && <p className="error">{errorSignIn}</p>}

              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="ex. typeracer@gmail.com" value={emailSignIn} onChange={(e) => setEmailSignIn(e.target.value)} required />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="*************" value={passwordSignIn} onChange={(e) => setPasswordSignIn(e.target.value)} required />
              </div>
              
              <button type="submit" className="signin-button">Log In</button>

            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
