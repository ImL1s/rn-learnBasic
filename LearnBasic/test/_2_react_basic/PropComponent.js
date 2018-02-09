import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';


export default class PropComponent extends Component {
    static defaultProps = {
        content: 'default content',
        // contentBool: true,
    }

    static propTypes = {
        content: PropTypes.string,
        contentBool: PropTypes.string, // 執行後會出現黃色警告
        contentNumberRequire: PropTypes.string.isRequired // 執行後會出現黃色警告,需要賦予值
    }

    render() {
        return (<Text style={{
            fontSize: 20,
            backgroundColor: 'red'
        }}>> text: {this.props.content}</Text>)
    }
}