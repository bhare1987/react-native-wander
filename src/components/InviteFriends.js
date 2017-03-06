import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from './Button';

export class Settings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  openContacts() {
    
  }

  render() {
    return (
        <View>
            <Text>Get your friends on Rayka</Text>
            <Text>Looking for travel tips from friends? Make sure they join you!</Text>
            <Button onPress={this.openContacts}>Invite from Contacts</Button>
        </View>
    );
  }
}