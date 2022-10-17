import React from "react";
import {Component} from "react"
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    
    const onSubmit =(formData) => {
        console.log(formData)
        //debugger
    }

    return (
        <>
           <h1>LOGIN</h1>
           <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}


const LoginForm = (props) => {
    //console.log('lrrr: ')
    return (
            <form onSubmit={props.handleSubmit}>
                <div className="">
                   <Field placeholder={"Login"} 
                          name ={"login"}
                          component={"input"} />
                </div>

                <div className="">
                <Field placeholder={"Password"} 
                        name ={"password"}
                        type ={"password"}
                       component={"input"} />
                </div>
                    
                <div className="">
                    <Field type={"checkbox"} 
                           name ={"rememberMe"}
                           component={"input"} /> remember me
                </div>
                <div className="">
                    <button>Login</button> 
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

export default Login