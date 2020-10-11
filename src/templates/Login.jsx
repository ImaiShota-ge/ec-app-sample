import React from 'react';
import {useDispatch} from "react-redux";
import {push} from 'connected-react-router';
import {signInAction} from '../reducks/users/actions';

const Login = () => {
    const dispatch = useDispatch();

    return(
        <diV>
            <h2>ログイン</h2>
            <button onClick={() => {
                dispatch(signInAction({uid: "00001", username: "torahack"}));
                dispatch(push('/'))
            }}>
                ログインする
            </button>
        </diV>
    )
}

export default Login;