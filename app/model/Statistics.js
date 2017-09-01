Ext.define('Xapp.model.Contributors', {
    extend: 'Ext.data.Model',

    fields: [
        'nickname', 'team', 'contributions'
    ]
});

Ext.define('Xapp.model.Repositories', {
    
    extend: 'Ext.data.Model',
    fields: [
        'name', 'forks_count', 'open_issues_count'
    ]
    
});