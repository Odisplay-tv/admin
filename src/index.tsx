import "react-toastify/dist/ReactToastify.css"
import React from "react"
import ReactDOM from "react-dom"
import {toast} from "react-toastify"

import "./shared/base.scss"
import serviceWorker from "./shared/service-worker"
import App from "./app"

toast.configure()
ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
