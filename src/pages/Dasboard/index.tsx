import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="#">
        <img src="https://avatars1.githubusercontent.com/u/5747855?s=460&v=4" alt="Imgagem do usuário"/>
        <div>
          <strong>MIkhailCavaclanti/repo</strong>
          <p>descricao do repo</p>
        </div>
        <FiChevronRight size={20}/>
      </a>
      <a href="#">
        <img src="https://avatars1.githubusercontent.com/u/5747855?s=460&v=4" alt="Imgagem do usuário"/>
        <div>
          <strong>MIkhailCavaclanti/repo</strong>
          <p>descricao do repo</p>
        </div>
        <FiChevronRight size={20}/>
      </a>
      <a href="#">
        <img src="https://avatars1.githubusercontent.com/u/5747855?s=460&v=4" alt="Imgagem do usuário"/>
        <div>
          <strong>MIkhailCavaclanti/repo</strong>
          <p>descricao do repo</p>
        </div>
        <FiChevronRight size={20}/>
      </a>
    </Repositories>
  </>
);

export default Dashboard
