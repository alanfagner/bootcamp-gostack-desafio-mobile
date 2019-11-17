import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Background from '~/components/Background';
import Item from './Item';

import { Container, HelpButton, List } from './styles';

export default function Help({ navigation }) {
  const [helps, setHelps] = useState([]);
  const user = useSelector(state => state.user);

  useEffect(() => {
    async function loadHelps() {
      const res = await api.get(`/students/${user.profile.id}/help-orders`);

      setHelps(res.data);
    }

    loadHelps();
  }, [user.id, user.profile.id]);

  function handleSee(help) {
    navigation.navigate('Read', {
      help,
    });
  }

  return (
    <Background>
      <Container>
        <HelpButton onPress={() => navigation.navigate('New')}>
          Novo pedido de auxilio
        </HelpButton>

        <List
          data={helps}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Item data={item} onPress={() => handleSee(item)} />
          )}
        />
      </Container>
    </Background>
  );
}

Help.navigationOptions = {
  header: null,
};
