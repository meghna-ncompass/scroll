import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getArticlesQuery } from '../queries/articles'
import { GraphQLClient, gql } from "graphql-request";


export async function getStaticProps() {
  // const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);
  // const response = await graphcms.request(getArticlesQuery)
  const response = await fetch(process.env.JSON_PLACEHOLDER)
  const filteredResponse = await response.json()
  return {
    props: { todos : filteredResponse },
  };
}
export default function Home({ todos }) {

  return (
    <>
      <h1>Scroll.in</h1>
      <h2>Changes Are Made</h2>
      {todos.map(todo => (
        <div key={todo.id}>
         <h3>{todo.title}</h3>
        </div>
      ))}
    </>
  )
}
