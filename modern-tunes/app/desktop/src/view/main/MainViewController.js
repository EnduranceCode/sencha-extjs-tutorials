Ext.define('ModernTunes.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  requires: ['ModernTunes.view.Preview'],

  onThumbSelect: function (thumbs, record) {
    this.onShowPreview(record);
  },

  onGridSelect: function (grid, records) {
    this.onShowPreview(records[0]);
  },

  onShowPreview: function (record) {
    if (this.getView().down('video')) {
      return;
    }

    // instance of the video
    var videoConfig = {
      xtype: 'video',
      url: record.data.preview,
      posterUrl: record.data.image,
    };

    // instance of the anchor/link back to iTunes
    var linkConfig = {
      docked: 'bottom',
      xtype: 'component',
      tpl: [
        '<a href="{itunesstore}" target="itunes_store">',
        '<img src="resources/images/get-it-itunes.svg" style="margin: 16px; display: block; margin-left: auto; margin-right: auto; width: 75px;">',
        '</a>',
      ],
      data: {
        itunesstore: record.data.itunesstore,
      },
    };

    // parent container of the video and the anchor/link
    var containerConfig = {
      xtype: 'container',
      title: record.data.title + ' — ' + record.data.artist,
      style: '{background-color: black;}',
      layout: 'fit',
      items: [videoConfig, linkConfig],
    };

    var vid = Ext.create({
      xtype: 'preview',
      title: record.data.title,
      layout: 'fit',
      items: [containerConfig],
    });
    vid.show();
  },
});
