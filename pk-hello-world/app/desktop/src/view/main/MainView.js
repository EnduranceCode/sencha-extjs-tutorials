Ext.define('pk-hello-world.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  scrollable: true,
  layout: 'fit',
  items: [
    {
      xtype: 'grid',
      columns: [
        {
          text: 'Title',
          dataIndex: 'title',
          flex: 1,
        },
        {
          text: 'Completed',
          dataIndex: 'completed',
          xtype: 'checkcolumn',
        },
      ],
      store: {
        autoLoad: true,
        autoSync: true,
        fields: ['title', { name: 'completed', type: 'boolean' }],
        proxy: {
          type: 'rest',
          url: 'https://jsonplaceholder.typicode.com/todos',
          reader: { type: 'json', root: 'data' },
        },
      },
    },
  ],
});
