Ext.define('ModernTunes.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  requires: [
    'ModernTunes.view.main.MainViewController',
    'ModernTunes.view.main.MainViewModel',
    'ModernTunes.view.TunesView',
  ],
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel',
  },
  tabBarPosition: 'bottom',
  items: [
    {
      xtype: 'tunesview',
      title: 'Thumbnails',
      bind: { store: '{tunes}' },
    },
    {
      xtype: 'tunesgrid',
      title: 'Grid',
      bind: { store: '{tunes}' },
    },
  ],
});
