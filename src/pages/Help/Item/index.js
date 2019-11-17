import React from 'react';
import { formatRelative, parseISO } from 'date-fns';
import { RectButton } from 'react-native-gesture-handler';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/Entypo';

import {
  Container,
  TitleView,
  Header,
  Title,
  Time,
  Question,
  TitleAnswer,
} from './styles';

export default function Item({ data, onPress }) {
  return (
    <Container>
      <Header>
        <TitleView>
          {data.answer ? (
            <>
              <RectButton onPress={onPress} style={{ padding: 5 }}>
                <Icon name="dots-three-vertical" />
              </RectButton>
              <TitleAnswer answer>Respondido</TitleAnswer>
            </>
          ) : (
            <>
              <Title>Sem resposta</Title>
            </>
          )}
        </TitleView>
        <Time>
          {formatRelative(parseISO(data.createdAt), new Date(), {
            locale: pt,
            addSuffix: true,
          })}
        </Time>
      </Header>

      <Question>{data.question}</Question>
    </Container>
  );
}
