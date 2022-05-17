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
  border-bottom: 1px solid gainsboro;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  flex-wrap: wrap;

  & > * {
    margin-right: 10px;
  }
`;

export default MainNav;
