import { withUrqlClient } from 'next-urql';
import Head from 'next/head';
import styled from 'styled-components';
import { useQuery } from 'urql';
import client from '../client';

const H1Styles = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(5)};
  text-align: center;
`;

function Home(): JSX.Element {
  const [res] = useQuery({
    query: `
            query {
                getUsers {
                    login
                    id
                }
            }
        `,
  });

  if (res.fetching) return <h1>Loading . . .</h1>;
  if (res.error) return <p>{res.error.toString()}</p>;
  else
    return (
      <>
        <H1Styles>Hello World!</H1Styles>
        {res.data.getUsers.map(user => (
          <>
            <p key={user.login}>{user.login}</p>
          </>
        ))}
      </>
    );
}

export default withUrqlClient(ssrExchange => ({
  ...client,
}))(Home);
