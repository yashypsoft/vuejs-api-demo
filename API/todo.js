import BaseApi from "./api";
import { gql } from 'graphql-tag';
import axios from '@nuxtjs/axios';

class todoAPI extends BaseApi {
  async getTodos() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json());
    return data;

  }

  async getCustomer() {
    const query = `
    query getCharacters {
      characters {
        info {
          count
        }
        results {
          name
        }
      }
    }
  `;
    const data = await axios.get('https://rickandmortyapi.com/graphql/',{query:query});
    // const data = await this.$axios.get('https://rickandmortyapi.com/graphql/',{query:query});
    // const variables = { limit: 5 }
    // const { data } = await useAsyncQuery(query);
    console.log(data);
    // this.$apollo.query({query, variables})
    //     .then(({ data }) => {
    //     })
  }




}

export default todoAPI;
