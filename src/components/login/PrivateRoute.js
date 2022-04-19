import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Layout from "../Layout"

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    //Check if the currentUser exists (authenticated) if not then bring the user to login page.
    return (
    <Route
        {...rest}
        render={props => {
        return currentUser ? <Layout><Component {...props} /></Layout> : <Redirect to="/login" />
        }}
    ></Route>
    )
}