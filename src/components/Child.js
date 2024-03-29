import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <h1>Hello {user}</h1>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child
