import styled from 'styled-components';

type MainNavProps = {
  children: React.ReactNode;
};

const MainNav = ({ children }: MainNavProps) => {
  return (
    <Container>
      <Nav>{children}</Nav>
    </Container>
  );
};

const Container = styled.header`
  height: 50px;
  border-bottom: 1px solid gainsboro;
`;

const Nav = styled.nav`
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  overflow-x: auto;

  & > * {
    margin-right: 10px;
  }
`;

export default MainNav;
