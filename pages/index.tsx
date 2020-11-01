import { withUrqlClient } from 'next-urql';
import Head from 'next/head';
import styled from 'styled-components';
import { useQuery } from 'urql';
import client from '../client';
import Card from '../components/Card';

const H1Styles = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(5)};
  text-align: center;
`;

function Home(props): JSX.Element {
  console.log(props);
  const [res] = useQuery({
    query: `
            query {
                getUsers {
                    id
                    login
                    avatar_url
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
        <h2>CSR Queried:</h2>
        {res.data.getUsers.map(Card)}
        <h2>SSR Queried: (viewable in Page Source)</h2>
      </>
    );
}

export default withUrqlClient(() => client)(Home);
