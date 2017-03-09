import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Contacts from 'react-native-contacts';
import Button from './Button';

export class InviteFriends extends Component {
  openContacts() {
    Contacts.getAllWithoutPhotos((err, contacts) => {
        if (err && err.type === 'permissionDenied') {
            // x.x
        } else {
            console.log(contacts);
        }
    });
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>`Get your friends on Rayka`</Text>
            <Text style={styles.text}>`Looking for travel tips from friends? Make sure they join you!`</Text>
            <Button onPress={this.openContacts}>Invite from Contacts</Button>
        </View>
    );
  }
}

const styles = {
    container: {
        flex: 1,
        height: 100
    },
    text: {
        color: 'black',
        fontSize: 24
    }

};