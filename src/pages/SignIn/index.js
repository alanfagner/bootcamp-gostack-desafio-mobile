import React, { useRef, useState } from 'react';
import { Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const [id, setId] = useState('');

  function handleSubmit() {
    if (id === '') {
      Alert.alert('Erro login', 'Preencha o id de cadastro');
      return;
    }

    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          autoCorrect={false}
          autoCaputalize="none"
          placeholder="Informe o id do seu cadastro"
          returnKeyType="send"
          onSubmitEditing={() => handleSubmit()}
          value={id}
          onChangeText={setId}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
