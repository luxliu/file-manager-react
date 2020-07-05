import styled from 'styled-components';
import { Button as AntDButton } from 'antd';

export const Button = styled(AntDButton)`
  border-radius: 4px;
  color: ${(props) => (props.type === 'primary' ? '#FFFFFF' : '#333333')};
  background: ${(props) =>
    props.type === 'primary' ? 'linear-gradient(#00BFA5, #00A690)' : null};
  border-color: ${(props) =>
    props.type === 'primary' ? '#009985' : 'rgba(0,0,0,0.05)'};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  padding-left: ${(props) => (props.light ? '5px' : '20px')};
  padding-right: ${(props) => (props.light ? '5px' : '20px')};

  &:hover {
    background: ${(props) =>
      props.type === 'primary' ? 'linear-gradient(#00B6AA, #009883)' : null};
    box-shadow: ${(props) =>
      props.type === 'primary'
        ? '0 0 0 4px rgba(0,191,165,0.2)'
        : '0 0 0 4px rgba(209, 209, 211, 1)'};
    border-color: rgba(1, 119, 103, 0.1);
    color: ${(props) => (props.type === 'primary' ? '#FFFFFF' : '#333333')};
  }

  &:focus {
    background: ${(props) =>
      props.type === 'primary'
        ? 'linear-gradient(#019E94, #008371)'
        : 'linear-gradient(#FFFFFF, #F3F3F3)'};
    border-color: rgba(1, 119, 103, 0.1);
    color: ${(props) => (props.type === 'primary' ? '#FFFFFF' : '#333333')};
  }

  &:disabled {
    &,
    &:hover {
      background: ${(props) =>
        props.type === 'primary' ? '#AAE0DE' : 'rgba(255,255,255,0.2)'};
      color: ${(props) => (props.type === 'primary' ? '#ffffff' : null)};
      border: 1px solid rgba(0, 121, 105, 0.1);
    }
  }

  img {
    margin-right: 8px;
  }
`;
