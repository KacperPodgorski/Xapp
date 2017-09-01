Ext.define('Xapp.view.stats.Contributors', {
    extend: 'Ext.Panel',
    xtype: 'contributors',

    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.layout.Fit'
    ],

    layout: 'fit',

    items: [{
        xtype: 'grid',

        store: {
            type: 'contributors'
        },

        columns: [{
            text: 'Nickname',
            dataIndex: 'nickname',
            flex: 1,
            sortable: false
        }, {
            text: 'Team',
            dataIndex: 'team',
            flex: 1,
            sortable: false
        }, {
            text: 'Contributions',
            dataIndex: 'contributions',
            flex: 1,
            sortablr: true
        }]
    }]
});

Ext.define('Xapp.view.stats.Repositories', {
    extend: 'Ext.Panel',
    xtype: 'repositories',

    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.layout.Fit'
    ],

    layout: 'fit',

    items: [{
        xtype: 'grid',

        store: {
            type: 'repositories'
        },

        columns: [{
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            sortable: false
        }, {
            text: 'Open Issues',
            dataIndex: 'open_issues_count',
            flex: 1,
            sortable: true
        }, {
            text: 'Forks',
            dataIndex: 'forks_count',
            flex: 1,
            sortable: true
        }]
    }]
});