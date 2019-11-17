import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  margin: 20px 20px;
`;

export const HelpInput = styled(Input).attrs({
  multiline: true,
  numberOfLines: 50,
})`
  background: #fff;
  height: 50%;
  align-items: flex-start;
`;

export const AddButton = styled(Button)`
  margin-top: 20px;
`;
