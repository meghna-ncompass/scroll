import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getArticlesQuery } from '../queries/articles'
import { GraphQLClient, gql } from "graphql-request";


export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);
  const response = await graphcms.request(getArticlesQuery)
  console.log('RESPONSE',response)
  return {
    props: { articles: response.entries },
  };
}
export default function Home({ articles}) {

  return (
    <>
      <h1>Scroll.in</h1>
      {articles.map(article => (
        <>
         <p>{article.id}</p>
         <h3>{article.title}</h3>
        </>
      ))}
    </>
  )
}
