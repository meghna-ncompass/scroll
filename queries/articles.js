import { request, gql } from "graphql-request";
const graphqlAPI = "http://52.65.9.30/api/"

export const getArticles = async () => {
  const query = gql`
    query MyQuery {
    entries(section: "headlines"){
        id,
        title
    }
    }
  `;
  const result = await request(graphqlAPI, query);
  // console.log(result);
  return result.entries;
};

export const getArticlesQuery = gql`
    query MyQuery {
    entries(section: "headlines"){
        id,
        title
    }
    }
  `;