import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  margin: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { marginTop: 10 },
})``;

export const HelpButton = styled(Button)``;
