import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './Button';

export class InviteFriends extends Component {
  navigateToFriendsList() {
    Actions.inviteFriendsList();
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>`Get your friends on Rayka`</Text>
            <Text style={styles.text}>`Looking for travel tips from friends? Make sure they join you!`</Text>
            <Button onPress={this.navigateToFriendsList()}>Invite from Contacts</Button>
        </View>
    );
  }
}

const styles = {
    container: {
        flex: 1,
        height: 50
    },
    text: {
        color: 'black',
        fontSize: 24
    }

};