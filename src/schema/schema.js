import graphql from 'graphql';

const {
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType
} = graphql;

const USERS = [
  { id: '22', name: 'Djordje Vukovic', age: 28 },
  { id: '44', name: 'Branka Dragoljevic', age: 28 }
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentVal, args) {
        return USERS.find(user => user.id === args.id);
      }
    }
  }
});

const schemaObject = new GraphQLSchema({
  query: RootQuery
});

export default schemaObject;
