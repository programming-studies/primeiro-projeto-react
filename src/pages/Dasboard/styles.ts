import styles, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

const maxWidth = '700px';
const formElementsHeight = '70px';

export const Title = styles.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  line-height: 56px;

  max-width: 450px;
`

export const Form = styles.form<FormProps>`
  margin-top: 40px;
  max-width: ${maxWidth};

  display: flex;

  input {
    flex: 1;
    height: ${formElementsHeight};
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    ${props => props.hasError && css`
      border-color: #cd3030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: ${formElementsHeight};
    background: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weigth: 'bold';
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }
`

export const Repositories = styles.div`
  margin-top: 80px;
  max-width: ${maxWidth};

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }

  img {
    height: 64px;
    width: 64px;
    border-radius: 50px;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      marging-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`

export const Error = styles.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`
