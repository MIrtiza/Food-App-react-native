import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer S10sZU9at5JRV_yvOuFHLbBXqXEJKWprVRs3kzdROPq46eDgzDb_HuA4PZhF6qEZFc792gawwsmXWjEoUAMAwYBdbZuzTYHCTa8BCukP4G0yRa0S8YFoVghbIowQXnYx'
    }
});