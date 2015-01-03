Ext.namespace('Zarafa.plugins.safesenders');

/**
 * @class Zarafa.plugins.safesenders.SafeSenders
 * @extends Zarafa.core.Plugin
 *
 * Plugin makes it possible to remove recipients and domains from your safesender list
 */
Zarafa.plugins.safesenders.SafeSenders = Ext.extend(Zarafa.core.Plugin, {

	/**
	 * @protected
	 */
	initPlugin : function()
	{
		Zarafa.plugins.safesenders.SafeSenders.superclass.initPlugin.apply(this, arguments);
		this.registerInsertionPoint('context.settings.category.mail', this.safeSendersWidget, this);
	},

	/**
	 * Insert safesenders widget into the mail category
	 * @return {settingssafesenderswidget} 
 	 */
	safeSendersWidget: function() 
	{
		return [{
			xtype : 'safesenders.settingssafesenderswidget'
		}];
	}
});

Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'safesenders',
		displayName : _('Safesender settingswidget'),
		pluginConstructor : Zarafa.plugins.safesenders.SafeSenders
	}));
});
