const { GraphQLServer } = require('graphql-yoga')
const axios = require('axios')
const qs = require('querystring');

const ONFIRE_HOST = 'www.bbonfire.com';
const NEWS_API = '/api/news/roll'

const ONFIRE_QUERY = {
    is_top: 1,
    offset: '',
    focus: 6,
    len: 15,
    maxFocusType: 15,
    maxNewsType: 21,
    maxTopType: 20,
    singleMatch: 1,
    columnid: '1,2,3,12,13,14,16,17,18,19,22,33,34,35,36,37,39,41,44,46,47,48,49,53,54,55,56'
}

const resolvers = {
    Query: {
        feed: async (parent, args) => {
            const offset = args.offset || '';
            const query = {
                ...ONFIRE_QUERY,
                offset
            };

            const res = await axios.get(`http://${ONFIRE_HOST}${NEWS_API}?${qs.stringify(query)}`)

            const feeds = res.data.data.filter(feed => feed.type === '1').map(feed => ({
                thumb: feed.thumb,
                articleId: feed.articleId,
                title: feed.title,
                ctime: feed.ctime,
                comment: feed.comment_total
            }))

            return feeds;
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))