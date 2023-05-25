import React from "react";
import "../Login/Login.css";
import { Input } from "../../components/ui/Input/Input";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import Authentication from "../Authentication/Authentication";

function Login() {
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const SUPABASE = createClient(SUPABASE_URL, SUPABASE_KEY);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [Rmsg, setRMsg] = useState("");
  const [Lmsg, setLMsg] = useState(false);
  const [user, setUser] = useState("");
  const [session, setSession] = useState("");

  const Login = async () => {
    const { data, error } = await SUPABASE.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setLMsg(error.message);
    } else {
      setLMsg("Login successfully");
      setUser(data.user);
      setSession(data.session);
      console.log(data.session);
    }
  };

  return (
    <Authentication title={"Login"}>
      {<p className="success-message">{Lmsg}</p>}
      <div className="authentication-card__form">
        <div className="authentication-card__form-group">
          <label htmlFor="">Email</label>
          <input type={"email"} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="authentication-card__form-group">
          <label htmlFor="">Password</label>
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="authentication-card__form-group">
          <button className="authentication__card-button" onClick={Login}>
            Send
          </button>
        </div>
      </div>
    </Authentication>
  );
}

export default Login;
