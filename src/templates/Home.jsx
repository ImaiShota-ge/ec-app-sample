import React, { useImperativeHandle } from 'react';
import { useSelector } from "react-redux";
import { getUserId } from "../reducks/users/selectors"
import { getUserName } from "../reducks/users/selectors"

const Home = () => {
    const selector = useSelector(state => state);
    const uid = getUserId(selector)
    const username = getUserName(selector)

    console.log(selector.router);
    return(
        <div>
            <h2>Home</h2>
            <p>ユーザID:{uid}</p>
            <p>ユーザー名:{username}</p>
        </div>
    )
}

export default Home;