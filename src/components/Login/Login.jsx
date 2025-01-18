import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase-init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);

const provider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        console.log(auth, provider);
       signInWithPopup(auth, provider)
       .then((result)=>{
        console.log(result);
        setUser(result.user);
        
       })
       .catch(error => {
        console.log('ERROR', error);
        setUser(null)
        
       })
        
    }

    const handleGithubSingIn =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
            

        })
        .catch(error => console.log("ERROR",error))
        
    }

    const handlesingOut = ()=>{
     signOut(auth)
     .then(()=>{
        console.log('sing out done');
        setUser(null)
        
     })
     .catch(error => console.log(error)
     )
    }
    return (
        <div>
          <div className="flex justify-center gap-10">
            {
                    user ? <button onClick={handlesingOut}>Sing Out</button> : <div className="flex justify-center gap-10 ">
                        <button onClick={handleGoogleSignIn}>Login with Google</button>
                        <button onClick={handleGithubSingIn}>Sing Up with github</button>
                    </div>
            }
              
                
          </div>
          {user&& <div>
            <h4>{user.displayName}</h4>
            <p>Email:{user.email}</p>
            <img src={user.photoURL} alt="" />
            
            </div>}
        </div>
    );
};

export default Login;