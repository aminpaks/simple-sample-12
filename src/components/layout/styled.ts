import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    width: 100%;
    margin-left: 2em;
    margin-right: 2em;
  }
  @media (min-width: 800px) {
    width: 800px; /* Maybe using a grid-system? */
  }
`;

export const StyledLayoutHeader = styled.header`
  border-bottom: 1px solid #ddd; /* We should replace this with a theme semantic variable */
  padding-top: 2em;
  padding-bottom: 2em;
`;

export const StyledLayoutFooter = styled.footer`
  border-top: 1px solid #ddd;
  padding-top: 1.6em;
  padding-bottom: 1.6em;
`;

export const StyledLayoutContent = styled.main`
  flex: 1 0 auto;
  padding: 20px;
`;

export const StyledNavigationContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;

  > *:not(:last-child) {
    margin-right: 1em;
  }
`;
