﻿// Name:        HTMLEditor.Toolbar_buttons.BoxButton.debug.js
// Assembly:    AjaxControlToolkit
// Version:     3.5.7.1213
// FileVersion: 3.5.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.BoxButton = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.BoxButton.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.BoxButton.prototype = {
    initialize : function() {
        Sys.Extended.UI.HTMLEditor.ToolbarButton.BoxButton.callBaseMethod(this, "initialize");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.BoxButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.BoxButton", Sys.Extended.UI.HTMLEditor.ToolbarButton.CommonButton);

