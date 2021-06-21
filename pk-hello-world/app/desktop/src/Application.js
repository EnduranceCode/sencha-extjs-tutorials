Ext.define('pk-hello-world.Application', {
  extend: 'Ext.app.Application',
  name: 'pk-hello-world',
  requires: ['pk-hello-world.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
