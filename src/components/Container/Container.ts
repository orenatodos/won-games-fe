import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    --container-size: 130rem;
    --container-gutter: ${theme.space.xsmall};

    max-width: calc(var(--container-size) + (var(--container-gutter) * 2));
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--container-gutter);
    padding-right: var(--container-gutter);
  `}
`
