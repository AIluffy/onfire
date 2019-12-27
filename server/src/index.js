const { GraphQLServer } = require('graphql-yoga')
const axios = require('axios')
const qs = require('querystring');
const path = require('path');
const static = require('serve-static')

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

const FEED_TYPE = {
    LINK: '1',
    MATCH: '13'
}

const generateLink = (link) => ({
    articleId: link.articleid,
    thumb: link.thumb,
    title: link.title,
    ctime: link.ctime,
    comment: link.comment_total
})

const generateMatch = (match) => {
    const homeScore = match.homeScore;
    const awayScore = match.awayScore;

    const homeTeam = match.homeTeam;
    const awayTeam = match.awayTeam;

    return {
        id: match.id,
        status: match.status,
        startTime: match.startTime,
        title: match.title,
        teams: [
            {
                ...homeTeam,
                score: homeScore
            },
            {
                ...awayTeam,
                score: awayScore
            }
        ]
    }
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

            const feeds = res.data.data;
            const links = feeds.filter(feed => feed.type === FEED_TYPE['LINK']).map(generateLink)
            const matchOfFeed = feeds.find(feed => feed.type === FEED_TYPE['MATCH']);

            let matches = undefined;

            if (matchOfFeed) {
                matches = matchOfFeed.matches.map(generateMatch)
            }

            const nextOffset = res.data['next_offset']

            return matches ? {
                links,
                matches,
                offset: nextOffset
            } : {
                    links,
                    offset: nextOffset
                }
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers,
})

const options = {
    port: 36666,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

server.express.use(static(path.join(__dirname, '../../', 'client', 'build')))

server.start(options, () => console.log(`Server is running on port ${options.port}`))