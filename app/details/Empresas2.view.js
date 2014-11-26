sap.ui.jsview("app.details.Empresas2", {

    getControllerName : function() {
		return "app.details.Empresas2";
    },
	/**
	 * Handler to onBeforeShow event that fires by the NavContainer.<BR>
	 * Note: If the view is already loaded and the bindingContext was changed, this method also called by the App.contoller
	 * @param oEvent
	 */
    onBeforeShow : function(oEvent) {
		this.getController().onBeforeShow(oEvent.data);
    },

    createContent : function(oController) {
		this.oList = new sap.m.List({
	    	inset: true,
	    	items : [
				  	  new sap.m.DisplayListItem({ label : oBundle.getText("EMPRESAS_BUKRS"), value : "{Bukrs}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("EMPRESAS_BUTXT"), value : "{Butxt}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("EMPRESAS_KTOPL"), value : "{Ktopl}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("EMPRESAS_LAND1"), value : "{Land1}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("EMPRESAS_ORT01"), value : "{Ort01}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("EMPRESAS_SPRAS"), value : "{Spras}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("EMPRESAS_WAERS"), value : "{Waers}"}),
                  	]
		});


		this.page = new sap.m.Page({
	    	title : oBundle.getText("TITLE__DETALLE"),
	    	//set back button on details pages only on smartphones
	    	showNavButton : jQuery.device.is.phone,
	    	navButtonTap : [ oController.onNavButtonTap, oController ],
	    	content : [ this.oList, this.oNavList ]
		});

		// done
		return this.page;
    }
});