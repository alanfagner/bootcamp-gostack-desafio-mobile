import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';

import { Container, TitleView, Header, Title, Time, Question } from './styles';
import logo from '~/assets/logo.png';

export default function Read({ navigation }) {
  const help = navigation.getParam('help');

  return (
    <Background>
      <Container>
        <Header>
          <TitleView>
            <Title>PERGUNTA</Title>
          </TitleView>
          <Time>
            {formatRelative(parseISO(help.createdAt), new Date(), {
              locale: pt,
              addSuffix: true,
            })}
          </Time>
        </Header>
        <Question>{help.question}</Question>
        <Header>
          <TitleView>
            <Title>RESPOSTA</Title>
          </TitleView>
          <Time>
            {formatRelative(parseISO(help.createdAt), new Date(), {
              locale: pt,
              addSuffix: true,
            })}
          </Time>
        </Header>
        <Question>{help.answer}</Question>
      </Container>
    </Background>
  );
}

Read.navigationOptions = ({ navigation }) => ({
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
