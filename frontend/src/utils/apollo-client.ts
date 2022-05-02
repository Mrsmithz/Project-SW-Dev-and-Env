import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri:'http://localhost:8001/api/v1/posts',
    cache: new InMemoryCache()
})

export default client