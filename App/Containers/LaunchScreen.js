import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text>
                            This probably isn't what your app is going to look
                            like. Unless your designer handed you this screen
                            and, in that case, congrats! You're ready to ship.
                            For everyone else, this is where you'll see a live
                            preview of your fully functioning app using Ignite.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
