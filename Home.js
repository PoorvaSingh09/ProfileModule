import React, {Component} from 'react'
import {Text} from 'react-native'
import {observer, inject} from 'mobx-react'

@inject("navigationStore")
@observer
export default class Home extends Component {
    render() {
        return(
            <Text>Welcome {this.props.navigationStore.username}</Text>
        )
    }
}