import React, {Component} from 'react'
import {Text} from 'react-native'
import {observer, inject} from 'mobx-react'

@inject("loginStore")
@observer
export default class Home extends Component {
    render() {
        return(
            <Text>Welcome {this.props.loginStore.username}</Text>
        )
    }
}