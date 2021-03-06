const typeDefs = `
    type Query {
        feed(offset: String): Feed!
    }

    type Mutation {
        post(url: String!, description: String!): Link!
    }

    type Feed {
        links: [Link!]!
        matches: [Match]
        offset: String!
    }

    type Match {
        id: ID!
        status: String!
        startTime: String!
        title: String!
        teams: [Team!]!
    }

    type Team {
        name: String!
        id: ID!
        score: String
    }

    type Link {
        articleId: ID!
        thumb: String!
        title: String!
        ctime: String!
        comment: String!
    }
`

module.exports = typeDefs;