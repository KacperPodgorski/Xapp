Ext.define('Xapp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'main',
    
    cls: 'main',

    items: [{
        title: 'About Xapp',
        cls: 'about',
        html: '<h1>Xapp - simple data viewer.</h1><br><br><h2>Xapp is Ext JS (version <strong>6.5.1</strong>) framework based web application.</h2><br><br><p>Sencha Ext JS framework page:<br><br><a href="https://www.sencha.com/products/extjs/#overview">https://www.sencha.com/products/extjs/#overview</a></p><br><br><h3>Application is using build in classes system and tools to provide some basic but powerfull functionalities. With this technology Xapp is capable to manage data from X-Formation GitHub account server and render it dynamically to functional grid panel.</h3>'
    }, {
        title: 'Public Repositories',
        xtype: 'repositories'
    }, {
        title: 'Top Contributors',
        xtype: 'contributors'
    }]
});