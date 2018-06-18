import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state={ loggedIn: null };
  componentWillMount() {
    firebase.initializeApp(
      {
    //configuration file
  });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
     this.setState({ loggedIn: true });
            } else {
    this.setState({ loggedIn: false });
            }
});
  }

  renderContent() {
    // rendering content to screen depending upon the state of loggedIn property
    switch (this.state.loggedIn) {
      case true:
       return (
        console.log('button'),
        /* here the button is wrapped in CardSection tag because in View Tag the button
        is shown as only a single line --- Reason i am not sure is ,maybe the style properties*/
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
         Log Out
        </Button>
        </CardSection>
        );
      case false:
             return (
               <LoginForm />
             );

      default:
       return (<CardSection><Spinner size='large' /></CardSection>);

    }
    }


  render() {
    return (
      <View >
      <Header headerText="Authentication" />
    {this.renderContent()}
      </View>
    );
  }
}

export default App;
