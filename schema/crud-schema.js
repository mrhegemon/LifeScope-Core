/* @flow */

import { SchemaComposer } from 'graphql-compose';
import uuid from 'uuid/v4';

import restrictToUser from '../middleware/restrict-to-user';
import { ConnectionTC } from './models/connections';
// import { ContactTC } from './models/contacts';
// import { ContentTC } from './models/content';
// import { EventTC } from './models/events';
// import { LocationTC } from './models/locations';
// import { ProviderTC } from './models/providers';
// import { SearchTC } from './models/searches';
import { SessionTC } from './models/session';
// import { TagTC } from './models/tags';
// import { ThingTC } from './models/things';

import { UserTC } from './models/user';

const GQC = new SchemaComposer();

const { Resolver } = GQC;

// create GraphQL Schema with all available resolvers
GQC.rootQuery().addFields({
  //Connections
//   connectionOne: ConnectionTC.getResolver('findOne'),
//   connectionMany: ConnectionTC.getResolver('findMany'),
//   connectionTotal: ConnectionTC.getResolver('count'),
//   connectionConnection: ConnectionTC.getResolver('connection'),
//   connectionPagination: ConnectionTC.getResolver('pagination'),
  
//   //Contacts
//   contactOne: ContactTC.getResolver('findOne'),
//   contactMany: ContactTC.getResolver('findMany'),
//   contactTotal: ContactTC.getResolver('count'),
//   contactConnection: ContactTC.getResolver('connection'),
//   contactPagination: ContactTC.getResolver('pagination'),
  
//   //Content
//   contentOne: ContentTC.getResolver('findOne'),
//   contentMany: ContentTC.getResolver('findMany'),
//   contentTotal: ContentTC.getResolver('count'),
//   contentConnection: ContentTC.getResolver('connection'),
//   contentPagination: ContentTC.getResolver('pagination'),
  
//   //Events
//   eventOne: EventTC.getResolver('findOne'),
//   eventMany: EventTC.getResolver('findMany'),
//   eventTotal: EventTC.getResolver('count'),
//   eventConnection: EventTC.getResolver('connection'),
//   eventPagination: EventTC.getResolver('pagination'),
  
//   //Locations
//   locationOne: LocationTC.getResolver('findOne'),
//   locationMany: LocationTC.getResolver('findMany'),
//   locationTotal: LocationTC.getResolver('count'),
//   locationConnection: LocationTC.getResolver('connection'),
//   locationPagination: LocationTC.getResolver('pagination'),
  
//   //Providers
//   providerOne: ProviderTC.getResolver('findOne'),
//   providerMany: ProviderTC.getResolver('findMany'),
//   providerTotal: ProviderTC.getResolver('count'),
//   providerConnection: ProviderTC.getResolver('connection'),
//   providerPagination: ProviderTC.getResolver('pagination'),
  
//   //Searches
//   searchOne: SearchTC.getResolver('findOne'),
//   searchMany: SearchTC.getResolver('findMany'),
//   searchTotal: SearchTC.getResolver('count'),
//   searchConnection: SearchTC.getResolver('connection'),
//   searchPagination: SearchTC.getResolver('pagination'),

  //Session
  sessionOne: SessionTC.getResolver('findOne'),
  ...restrictToUser(Resolver, {
    sessionMany: SessionTC.getResolver('findMany'),
  }),
//   sessionTotal: SessionTC.getResolver('count'),
//   sessionConnection: SessionTC.getResolver('connection'),
//   sessionPagination: SessionTC.getResolver('pagination'),
  
//   //Tags
//   tagOne: TagTC.getResolver('findOne'),
//   tagMany: TagTC.getResolver('findMany'),
//   tagTotal: TagTC.getResolver('count'),
//   tagConnection: TagTC.getResolver('connection'),
//   tagPagination: TagTC.getResolver('pagination'),
//   //Things
//   ThingOne: ThingTC.getResolver('findOne'),
//   ThingMany: ThingTC.getResolver('findMany'),
//   ThingTotal: ThingTC.getResolver('count'),
//   ThingConnection: ThingTC.getResolver('connection'),
//   ThingPagination: ThingTC.getResolver('pagination'),
  
  //Users
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'), // .debug(), // debug info to console for this resolver
  userTotal: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),
  userPagination: UserTC.getResolver('pagination'),
  
});
// For debug purposes you may display resolver internals in the following manner:
// console.log(UserTC.getResolver('findMany').toString());

GQC.rootMutation().addFields({
  
  // Connections
//   connectionCreate: ConnectionTC.getResolver('createOne'),
//   connectionUpdateOne: ConnectionTC.getResolver('updateOne'),
//   connectionUpdateMany: ConnectionTC.getResolver('updateMany'),
//   connectionRemoveOne: ConnectionTC.getResolver('removeOne'),
//   connectionRemoveMany: ConnectionTC.getResolver('removeMany'),
  
//   // Contacts
//   contactCreate: ContactTC.getResolver('createOne'),
//   contactUpdateOne: ContactTC.getResolver('updateOne'),
//   contactUpdateMany: ContactTC.getResolver('updateMany'),
//   contactRemoveOne: ContactTC.getResolver('removeOne'),
//   contactRemoveMany: ContactTC.getResolver('removeMany'),
  
//   // Content
//   contentCreate: ContentTC.getResolver('createOne'),
//   contentUpdateOne: ContentTC.getResolver('updateOne'),
//   contentUpdateMany: ContentTC.getResolver('updateMany'),
//   contentRemoveOne: ContentTC.getResolver('removeOne'),
//   contentRemoveMany: ContentTC.getResolver('removeMany'),
  
//   // Events
//   eventCreate: EventTC.getResolver('createOne'),
//   eventUpdateOne: EventTC.getResolver('updateOne'),
//   eventUpdateMany: EventTC.getResolver('updateMany'),
//   eventRemoveOne: EventTC.getResolver('removeOne'),
//   eventRemoveMany: EventTC.getResolver('removeMany'),
  
//   // Locations
//   locationCreate: LocationTC.getResolver('createOne'),
//   locationUpdateOne: LocationTC.getResolver('updateOne'),
//   locationUpdateMany: LocationTC.getResolver('updateMany'),
//   locationRemoveOne: LocationTC.getResolver('removeOne'),
//   locationRemoveMany: LocationTC.getResolver('removeMany'),
  
//   // Providers
//   providerCreate: ProviderTC.getResolver('createOne'),
//   providerUpdateOne: ProviderTC.getResolver('updateOne'),
//   providerUpdateMany: ProviderTC.getResolver('updateMany'),
//   providerRemoveOne: ProviderTC.getResolver('removeOne'),
//   providerRemoveMany: ProviderTC.getResolver('removeMany'),
  
//   // Searches
//   searchCreate: SearchTC.getResolver('createOne'),
//   searchUpdateOne: SearchTC.getResolver('updateOne'),
//   searchUpdateMany: SearchTC.getResolver('updateMany'),
//   searchRemoveOne: SearchTC.getResolver('removeOne'),
//   searchRemoveMany: SearchTC.getResolver('removeMany'),
  
//   // Session
//   sessionCreate: SessionTC.getResolver('createOne'),
//   sessionUpdateOne: SessionTC.getResolver('updateOne'),
//   sessionUpdateMany: SessionTC.getResolver('updateMany'),
//   sessionRemoveOne: SessionTC.getResolver('removeOne'),
//   sessionRemoveMany: SessionTC.getResolver('removeMany'),
  
//   // Tags
//   tagCreate: TagTC.getResolver('createOne'),
//   tagUpdateOne: TagTC.getResolver('updateOne'),
//   tagUpdateMany: TagTC.getResolver('updateMany'),
//   tagRemoveOne: TagTC.getResolver('removeOne'),
//   tagRemoveMany: TagTC.getResolver('removeMany'),
  
//   // Things
//   thingCreate: ThingTC.getResolver('createOne'),
//   thingUpdateOne: ThingTC.getResolver('updateOne'),
//   thingUpdateMany: ThingTC.getResolver('updateMany'),
//   thingRemoveOne: ThingTC.getResolver('removeOne'),
//   thingRemoveMany: ThingTC.getResolver('removeMany'),
  
  ...restrictToUser(Resolver, {
    sessionCreate: SessionTC.getResolver('createOne').wrapResolve(next => rp => {
      rp.args.record.id = uuid().replace(/-/g, '');
      rp.args.record.user_id_string = rp.context.user._id.toString('hex');
      
      return next(rp); 
    }),
    
    // initializeConnection: ConnectionTC.getResolver('initializeConnection')
  }),
  
  // Users
  // userCreate: UserTC.getResolver('createOne'),
  // userUpdateOne: UserTC.getResolver('updateOne'),
  // userUpdateMany: UserTC.getResolver('updateMany'),
  // userRemoveOne: UserTC.getResolver('removeOne'),
  // userRemoveMany: UserTC.getResolver('removeMany'),
});

const graphqlSchema = GQC.buildSchema();

export default graphqlSchema;