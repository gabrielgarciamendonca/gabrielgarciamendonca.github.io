import React, { ReactElement } from 'react';
import { Container } from './style';

interface ArticleProps {
  title: string,
  content: ReactElement<any, any>
}

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <Container>
      <p>
      {props.title}
      </p>
      {props.content}
    </Container>
  );
}

export default Article;