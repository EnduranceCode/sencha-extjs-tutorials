Ext.define('pk-conference-editor.Application', {
  extend: 'Ext.app.Application',
  name: 'pk-conference-editor',
  requires: ['pk-conference-editor.*'],

  launch: function () {
    Ext.Viewport.add([{ xtype: 'mainview' }]);
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?', function (choice) {
      if (choice === 'yes') {
        window.location.reload();
      }
    });
  },
});
