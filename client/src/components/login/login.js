import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../redux/action'
import { getUserById } from "../../service/api"
export default function Login() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.user)

    async function initUser(form) {
        form.preventDefault()
        debugger;
        let user = {}
        user.name = form.target.name.value;
        user.password = form.target.password.value;
        debugger;
        // const res = await getUserById(user.name);
        debugger;
        // console.log(res);
        dispatch(action.login(user))
    }

    return (
        <>
            <form onSubmit={(e) => initUser(e)}>
                <input id="name" type="text" placeholder="enter name"></input>
                <input id="password" type="password" placeholder="enter password"></input>
                {/* <input id="email" type="email" placeholder="enter email"></input> */}
                <button type="submit">להירשם</button>
            </form>
            <h1>hello {data.currentUser?.name}</h1>

        </>
    )
}