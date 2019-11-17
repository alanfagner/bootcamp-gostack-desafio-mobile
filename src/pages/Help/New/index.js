import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import { Container, HelpInput, AddButton } from './styles';
import logo from '~/assets/logo.png';

export default function New({ navigation }) {
  const [help, setHelp] = useState('');

  const user = useSelector(state => state.user);

  async function handleAddhelp() {
    await api.post(`/students/${user.profile.id}/help-orders`, {
      question: help,
    });

    navigation.navigate('Help');
  }

  return (
    <Background>
      <Container>
        <HelpInput
          onChangeText={setHelp}
          placeholder="Inclua seu pedido de auxilio"
          multiline
          numberOfLines={50}
        />
        <AddButton onPress={handleAddhelp}> Enviar pedido</AddButton>
      </Container>
    </Background>
  );
}

New.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={{ marginLeft: '27%', justifyContent: 'center' }}>
      <Image
        style={{ width: 80, height: 45, resizeMode: 'stretch' }}
        source={logo}
      />
    </View>
  ),
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
