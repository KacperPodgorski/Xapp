var storeCont = Ext.define('Xapp.store.Contributors', {
    requires: 'Ext.data.proxy.Rest',
    extend: 'Ext.data.Store',
    alias: 'store.contributors',

    model: 'Xapp.model.Contributors',
    sorters: [{
         property: 'contributions',
         direction: 'DESC'
     }],
    
    data:
        [
  {
    "nickname": "John Doe",
    "team": "Support",
    "contributions": 6
  },
  {
    "nickname": "Private Gomer Pyle",
    "team": "Admins",
    "contributions": 4
  },
  {
    "nickname": "John Kowalski",
    "team": "LAC",
    "contributions": 10
  },
  {
    "nickname": "Forrest Gump",
    "team": "LAC",
    "contributions": 10
  },
  {
    "nickname": "David Bowman",
    "team": "Licstat",
    "contributions": 5
  },
  {
    "nickname": "Neo",
    "team": "LM-X",
    "contributions": 1
  },
  {
    "nickname": "Han Solo",
    "team": "Internal Systems",
    "contributions": 4
  },
  {
    "nickname": "Indiana Jones",
    "team": "LM-X",
    "contributions": 3
  },
  {
    "nickname": "Edward Scissorhands",
    "team": "Admins",
    "contributions": 3
  },
  {
    "nickname": "Tyler Durden",
    "team": "Licstat",
    "contributions": 7
  }
]
});

var storeRepos = Ext.define('Xapp.store.Repositories', {
    requires: 'Ext.data.proxy.Rest',
    extend: 'Ext.data.Store',
    alias: 'store.repositories',
    model: 'Xapp.model.Repositories',
    sorters: [{
         property: 'forks_count',
         direction: 'DESC',
        
        property: 'open_issues_count',
        direction: 'DESC'
        
        
     }],
    
    autoLoad: true,
    proxy: {
        type: 'rest',
        url : 'https://api.github.com/users/x-formation/repos',
        reader: {
            type: 'json'
        },
        
    }
    
});