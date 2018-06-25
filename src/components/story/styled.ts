import styled from 'styled-components';

export const StyledStoryCardContainer = styled.main`
  display: block;
`;

export const StyledStoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledStoryListHeader = styled.h2``;

export const StyledStoryListBody = styled.main`
  display: block;
`;

export const StyledStoryContainer = styled.section`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding-bottom: 1em;
  margin-top: 1em;
  margin-bottom: 1em;

  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
`;

export const StyledStoryCardTitle = styled.h4`
  margin-top: 0;
`;

export const StyledStoryCardDetails = styled.aside`
  display: block;
  span {
    &:not(:last-of-type) {
      margin-right: 0.4em;
    }
  }
`;
