import React, { Component, Text } from 'react';
import Contacts from 'react-native-contacts';
import { ListView } from 'react-native';

// Make a Component
export class InviteFriendList extends Component {
    constructor() {
        super();
        this.state = { 
            contacts: []
        };
    }
  

  componentDidMount() {
      this.loadContacts();
  }

  loadContacts() {
    Contacts.getAllWithoutPhotos((err, contacts) => {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        if (err && err.type === 'permissionDenied') {
            console.error(err);
        } else {
            this.state.contacts = ds.cloneWithRows(contacts);
        }
    });
  }

  render() {
    return (
    <ListView
        dataSource={this.state.contacts}
        renderRow={(rowData) => <Text>{rowData}</Text>}
    />
    );
  }
}
