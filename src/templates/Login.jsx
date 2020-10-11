import React from 'react';
import {useDispatch} from "react-redux";
import {signIn} from "../reducks/users/operations";

const Login = () => {
    const dispatch = useDispatch();

    return(
        <diV>
            <h2>ログイン</h2>
            <button onClick={() => dispatch(signIn())}>
                ログインする
            </button>
        </diV>
    )
}

export default Login;