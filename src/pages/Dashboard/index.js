import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Checkin from '~/components/Checkin';

import Background from '~/components/Background';

import { Container, CheckinButton, List } from './styles';

export default function Dashboard() {
  const [checkins, setCheckins] = useState([]);
  const user = useSelector(state => state.user);

  async function loadCheckins() {
    const response = await api.get(`/students/${user.profile.id}/checkins`);
    setCheckins(response.data);
  }

  useEffect(() => {
    loadCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAddCheckin() {
    try {
      await api.post(`/students/${user.profile.id}/checkins`, {
        student_id: user.profile.id,
      });
      loadCheckins();
    } catch (error) {
      Alert.alert('Erro no checkin', 'Error ao fazer checkin');
    }
  }

  return (
    <Background>
      <Container>
        <CheckinButton onPress={() => handleAddCheckin()}>
          Novo check-in
        </CheckinButton>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Check-in',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="schedule" size={20} color={tintColor} />
  ),
};
