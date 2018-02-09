import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropComponent from './PropComponent';


export default class UsePropComponent extends Component {
    render() {
        var params = {
            content: 'this is spread operator content',
            contentBool: true,
            contentNumberRequire: 'this is a require spread operator content'
        }
        var { content, contentNumberRequire } = params;

        return <View style={styles.container}>
            {/* prop */}
            <PropComponent content='prop is nice' />

            {/* PropTypes.prop.isRequired */}
            <PropComponent contentBool={'value is invalid'} />

            {/* spread operator */}
            <PropComponent {...params} />

            {/* object destructuring */}
            <PropComponent content={content} />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 50
    }
})