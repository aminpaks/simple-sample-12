import styled from 'styled-components';

export const StyledCommentListContainer = styled.div`
  display: block;
  margin-top: 2em;
`;

export const StyledCommentListWrapper = styled.div``;

export const StyledCommenterGroup = styled.div`
  font-size: 0.8em;
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

export const StyledCommentGroup = styled.div`
  margin-top: 1em;
`;

export const StyledCommentContainer = styled.section`
  display: block;
  margin-top: 1em;
  cursor: default;

  &:not(:last-of-type) {
    padding-bottom: 1em;
    border-bottom: 1px solid #e5e5e5;
  }
`;

export const StyledCommentText = styled.div`
  margin-top: 1em;
  font-size: 0.7em;
`;
