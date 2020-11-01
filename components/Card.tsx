import styled from 'styled-components';

type Props = {
  login: string;
  avatar_url: string;
};

const FigureStyles = styled.figure`
  ${({ theme: { flex } }) => flex(`flex-start`)};
  display: inline-flex;
  margin-right: 30px;
  margin-bottom: 30px;

  img {
    display: block;
    margin-right: 20px;
    height: 150px;
    width: 150px;
  }
`;

export default function Card({ login, avatar_url }: Props): JSX.Element {
  return (
    <FigureStyles key={login}>
      <img src={avatar_url} alt={login} />
      <h3>{login}</h3>
    </FigureStyles>
  );
}
