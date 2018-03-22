/* @flow */

// TODO: FIXXX
import mongoose from 'mongoose';
import composeWithMongoose from 'graphql-compose-mongoose/node8';
import uuid from '../../lib/types/uuid';
import nodeUUID from 'uuid/v4';

export const ConnectionsSchema = new mongoose.Schema(
  {
    _id: {
      type: Buffer
    },
    id: {
      type: String,
      get: function() {
        if (this._id) {
          return this._id.toString('hex');
        }
      },
      set: function(val) {
        if (this._conditions && this._conditions.id) {
          this._conditions._id = uuid(val);
          
          delete this._conditions.id;
        }
        
        this._id = uuid(val);
      }
    },
    auth: {
      status: {
        authorized: {
          type: Boolean,
          index: false
        },
        complete: {
          type: Boolean,
          index: false
        }
      }
    },
    enabled: {
      type: Boolean,
      index: false
    },
    
    endpoint_data: {
      direct_messages_received: {
        since_id: {
          type: String,
          index: false
        }
      },
      direct_messages_sent: {
        since_id: {
          type: String,
          index: false
        }
      },
      drive_changes: {
        page_token: {
          type: String,
          index: false
        }
      },
      edits: {
        cursor: {
          type: String,
          index: false
        }
      },

      
      events: {
        since: {
          type: Number,
          index: false
        }
      },
      
      
      gmail_inbox: {
        page_token: {
          type: String,
          index: false
        },
        q: {
          type: String,
          index: false
        }
      },
      
      posts: {
        min_id: {
          type: String,
          index: false
        },
        since: {
          type: Number,
          index: false
        }
      },
      
      tweets: {
        since_id: {
          type: String,
          index: false         
        }
      },
  },
    
    frequency: {
      type: Number,
      index: false
    },
    
    last_run: {
      type: Date,
      index: false
    },
    
    permissions: {
      achievements: {
        enabled: {
          type: Boolean,
          index: false
        },
        
        frequency: {
          type: Number,
          index: false
        }
      },
      boards: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      comments: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      direct_messages_received: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      direct_messages_sent: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      drive_changes: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      edits: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      events: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      games_owned: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      gilded_comments: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      gmail_inbox: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      messages_received: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      messages_sent: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      pins: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      playlists: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      posts: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      saved_albums: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      saved_comments: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      saved_tracks: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      submitted: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      threads_downvoted: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      threads_upvoted: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
      tweets: {
        enabled: {
          type: Boolean,
          index: false
        },
        frequency: {
          type: Number,
          index: false
        }
      },
    },
    
    provider_id: {
      type: Buffer,
      index: false
    },
    provider_id_string: {
      type: String,
      get: function() {
        return this.provider_id.toString('hex')
      },
      set: function(val) {
        if (val && this._conditions && this._conditions.provider_id_string) {
          this._conditions.provider_id = uuid(val);
          
          delete this._conditions.provider_id_string;
        }
        
        this.provider_id = uuid(val);
      }
    },
    provider_name: {
      type: String,
      index: false
    },
    remote_connection_id: {
      type: Buffer,
      index: false
    },
    status: {
      type: String,
      index: false
    },
    user_id: {
      type: Buffer,
      index: false
    },
    user_id_string: {
      type: String,
      get: function() {
        return this._id.toString('hex')
      },
      set: function(val) {
        if (val && this._conditions && this._conditions.user_id_string) {
          this._conditions.user_id = uuid(val);
          
          delete this._conditions.user_id_string;
        }
        
        this.user_id = uuid(val);
      }
    }
  },
  {
    collection: 'connections',
  }
);
  

export const Connections = mongoose.model('Connections', ConnectionsSchema);

export const ConnectionTC = composeWithMongoose(Connections);

// ConnectionTC.addResolver({
//   name: 'initializeConnection',
//   kind: 'mutation',
//   type: ConnectionTC.getResolver('createOne').getType(),
//   args: {
//     provider_id_string: 'String!',
//     name: 'String'
//   },
//   resolve: ({ source, args, context, info }) => {
//     console.log(args);
    
//     return {
//       cool: 'pants'
//     };
//   }
// }); 