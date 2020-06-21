import React from 'react';
import {
  AiOutlineThunderbolt,
  AiOutlineCoffee,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import Scrollbar from 'react-scrollbars-custom';

import { Link } from '@Common';

import {
  StyledAside,
  StyledAsideInfos,
  StyledAsideRepository,
  StyledAsideSocialItem,
  StyledAsideStackItem,
} from './styled';

function Aside() {
  const items = [
    {
      title: (
        <>
          <AiOutlineThunderbolt /> O Bicudo
        </>
      ),
      list: [
        {
          name: 'Nome Completo',
          content: 'Victor Martins Bicudo',
        },
        {
          name: 'E-mail',
          content: (
            <Link href="mailto:victor_bicudo@outlook.com">
              victor_bicudo@outlook.com
            </Link>
          ),
        },
        {
          name: 'Redes Sociais',
          content: [
            <StyledAsideSocialItem
              key="social-github"
              href="https://github.com/martinsbicudo"
              target="_blank"
            >
              <AiOutlineGithub />
              <strong>Github</strong>
            </StyledAsideSocialItem>,
            <StyledAsideSocialItem
              key="social-linkedin"
              href="https://www.linkedin.com/in/martinsbicudo"
              target="_blank"
            >
              <AiFillLinkedin />
              <strong>Linkedin</strong>
            </StyledAsideSocialItem>,
            <StyledAsideSocialItem
              key="social-twitter"
              href="https://twitter.com/martinsbicudo"
              target="_blank"
            >
              <AiOutlineTwitter />
              <strong>Twitter</strong>
            </StyledAsideSocialItem>,
          ],
        },
      ],
    },
    {
      title: (
        <>
          <AiOutlineCoffee /> Projeto
          <StyledAsideRepository
            href="https://github.com/martinsbicudo/bicudo.dev"
            target="_blank"
          >
            Repositório
          </StyledAsideRepository>
        </>
      ),
      list: [
        {
          name: 'Stack',
          content: [
            <StyledAsideStackItem
              key="stack-react"
              href="https://reactjs.org"
              target="_blank"
            >
              React
            </StyledAsideStackItem>,
            <StyledAsideStackItem
              key="stack-next"
              href="https://nextjs.org"
              target="_blank"
            >
              NextJS
            </StyledAsideStackItem>,
            <StyledAsideStackItem
              key="stack-styled-components"
              href="https://styled-components.com"
              target="_blank"
            >
              Styled Components
            </StyledAsideStackItem>,
          ],
        },
      ],
    },
  ];

  return (
    <StyledAside>
      <Scrollbar>
        <StyledAsideInfos items={items} />
      </Scrollbar>
    </StyledAside>
  );
}

export default Aside;
