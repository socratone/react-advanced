import styled from '@emotion/styled';
import { Children } from 'react';

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

/**
 * 서브 컴포넌트 예제 컴포넌트
 */

const Card = ({ children, style }: CardProps) => {
  const header = getChildrenOnDisplayName(children, 'Header');
  const body = getChildrenOnDisplayName(children, 'Body');
  const footer = getChildrenOnDisplayName(children, 'Footer');

  return (
    <CardContainer style={style}>
      {header}
      {body}
      {footer}
    </CardContainer>
  );
};

const getChildrenOnDisplayName = (children: any, displayName: string) => {
  return Children.map(children, (child) => {
    return child.type.displayName === displayName ? child : null;
  });
};

type ChildProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Header = ({ children, style }: ChildProps) => (
  <HeaderContainer style={style}>{children}</HeaderContainer>
);
Header.displayName = 'Header';
Card.Header = Header;

const Body = ({ children, style }: ChildProps) => (
  <BodyContainer style={style}>{children}</BodyContainer>
);
Body.displayName = 'Body';
Card.Body = Body;

const Footer = ({ children, style }: ChildProps) => (
  <FooterContainer style={style}>{children}</FooterContainer>
);
Footer.displayName = 'Footer';
Card.Footer = Footer;

const CardContainer = styled.div`
  border-radius: 10px;
  color: white;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  background: dodgerblue;
  padding: 10px;
`;

const BodyContainer = styled.div`
  background: gold;
  padding: 10px;
`;

const FooterContainer = styled.div`
  background: hotpink;
  padding: 10px;
`;

export default Card;
