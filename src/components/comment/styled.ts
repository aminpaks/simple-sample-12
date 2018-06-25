import styled from 'styled-components';

export const StyledCommentListContainer = styled.div`
  display: block;
  margin-top: 2em;
`;

export const StyledCommenterContainer = styled.span`
  position: relative;
  display: inline-block;

  &:not(:last-of-type) {
    margin-right: 0.4em;
    padding-right: 0.3em;

    &::before {
      top: 0;
      right: 0;
      display: block;
      content: ',';
      position: absolute;
    }
  }
`;

export const StyledCommentContainer = styled.section`
  display: block;
`;
