const graphql = require('graphql');
const projects = require('../data');

const {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} = graphql;

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        categories: {
            type: new GraphQLList(GraphQLString),
        },
        descriptions: {
            type: new GraphQLList(ProjectDescriptionType),
        },
        id: {
            type: GraphQLID,
        },
        photos: {
            type: new GraphQLObjectType({
                name: 'ProjectPhotos',
                fields: () => ({
                    cover: {
                        type: ProjectPhotoType,
                    },
                    display: {
                        type: ProjectPhotoType,
                    },
                    linkout: {
                        type: GraphQLString,
                    },
                    project: {
                        type: new GraphQLList(ProjectPhotoType),
                    },
                })
            }),
        },
        tagline: {
            type: GraphQLString,
        },
        timeline: {
            type: new GraphQLList(ProjectTimelineItemType),
        },
        thumbnail: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
    }),
});

const ProjectDescriptionType = new GraphQLObjectType({
    name: 'ProjectDescription',
    fields: () => ({
        heading: {
            type: GraphQLString,
        },
        text: {
            type: GraphQLString,
        },
    }),
});

const ProjectPhotoType = new GraphQLObjectType({
    name: 'ProjectPhoto',
    fields: () => ({
        url: {
            type: GraphQLString,
        },
    }),
});

const ProjectTimelineItemType = new GraphQLObjectType({
    name: 'ProjectTimelineItem',
    fields: () => ({
        text: {
            type: GraphQLString,
        },
        time: {
            type: GraphQLString,
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        project: {
            type: ProjectType,
            args: {
                id: { 
                    type: GraphQLID,
                },
            },
            resolve(parent, args) {
                // code to get data from db / other source
                return projects.find(project => project.id === args.id);
            },
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve() {
                return projects;
            }
        },
    }),
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});