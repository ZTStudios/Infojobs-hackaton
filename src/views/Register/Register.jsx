import React from "react";
import "../Register/Register.css";
import { Input } from "../../components/ui/Input/Input";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import Authentication from "../Authentication/Authentication";

function Register() {
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const SUPABASE = createClient(SUPABASE_URL, SUPABASE_KEY);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [Rmsg, setRMsg] = useState(false);
  const [Lmsg, setLMsg] = useState("");
  const [user, setUser] = useState("");
  const [session, setSession] = useState("");

  const Register = async () => {
    console.log(email, password, username);
    const { data, error } = await SUPABASE.auth.signUp(
      {
        email,
        password,
      },
      {
        data: {
          username,
        },
      }
    );
    if (error) {
      setRMsg(error.message);
    } else {
      setRMsg("User created successfully");
      setUser(data.user);
    }
  };

  return (
    <Authentication title={"Register"}>
      {<p className="success-message">{Rmsg}</p>}
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
          <label htmlFor="">Username</label>
          <input type={"text"} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="authentication-card__form-group">
          <button className="authentication__card-button" onClick={Register}>
            Send
          </button>
        </div>
      </div>
    </Authentication>
  );
}

export default Register;
