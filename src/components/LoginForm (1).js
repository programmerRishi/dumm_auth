import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state={ email: '', password: '', error: '', loading: false };


  onButtonPress() {
    console.log('function called');
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      console.log('signIn failed');
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onAccountCreateSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
  }
  onLoginFail() {
    console.log('error occured while creating id');
    this.setState({ error: 'AUTHENTICATION FAILED', loading: false });
  }
  onLoginSuccess() {
    console.log('login success');
    this.setState(
      {
        email: '',
        password: '',
        loading: false,
        error: ''
      }
    );
  }
  onAccountCreateSuccess() {
    console.log('account created successfully');
    this.setState(
      {
        email: '',
        password: '',
        loading: false,
        error: ''
      }
    );
  }
  renderButton() {
    if (this.state.loading) {
      return (<Spinner />);
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
      <CardSection >
      <Input
      placeholder='username@email.com'
      label='Email'
      value={this.state.email}
      onChangeText={text => this.setState({ email: text })}
      />
      </CardSection>
      <CardSection>
      <Input
      secureTextEntry
      placeholder='password'
      label='Password'
      value={this.state.password}
      onChangeText={text => this.setState({ password: text })}
      />
      </CardSection>

      <Text style={styles.errorStyle}>
      {this.state.error}
      </Text>

      <CardSection >
      {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
