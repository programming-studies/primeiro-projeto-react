import styles from 'styled-components';
import { shade } from 'polished';

export const Title = styles.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  line-height: 56px;

  max-width: 450px;
`

const formElementsHeight = '70px';

export const Form = styles.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: ${formElementsHeight};
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

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
