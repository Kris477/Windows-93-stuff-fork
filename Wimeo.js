$window({
  title: "Wimeo",
  width: 1270,
  height: 860,
  url: "https://blockly806.neocities.org/misc/93extras/wimeo.html",
  help: "Made by Blockly\n<a href='https://youtube.com/blockly806'>https://youtube.com/Blockly806</a>",
  menu: [
    {
      name: "Window",
      items: [
        {
          name: "Refresh",
          action: function(){this.window.el.iframe.src += ""}
        },
        {name:"---"},
        {
          name: "Close",
          action: function(){this.window.close()}
        }
      ]
    }
  ]
});
