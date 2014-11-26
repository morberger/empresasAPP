jQuery.sap.declare("util.Connectivity");
 //Service Root URL
// "http://srvsap02.ice2.local:8074/sap/opu/odata/sap/Z_EMPRESAS_SRV/?sap-client=200";
//Extract the relative URL to use this application for deployment on any Web Server
//var serviceUrl = "/sap/opu/odata/sap/Z_EMPRESAS_SRV/?sap-client=200";

function getUrl(sUrl){
	if (sUrl== "") 
		return sUrl;
	if (window.location.hostname =="localhost" ||
			window.location.hostname =="srvsap02.ice2.local"){
	return "proxy" + sUrl;
}else{
	return sUrl;
	}
}

//var serviceUrl = "http://srvsap02.ice2.local:8074/sap/opu/odata/sap/Z_EMPRESAS_SRV/";
var serviceUrl = getUrl("/sap/opu/odata/sap/Z_EMPRESAS_SRV/");



function getServiceURL(){
	//Get the service URL from the SAP NetWeaver Gateway Catalog service.
	jQuery.sap.require("util.ServiceNegotiation");
	return useNegotiation ? getNegotiationService() : serviceUrl;
}

function createModel(){  
	
	var oModel = new sap.ui.model.odata.ODataModel(getServiceURL(), false, "", "", null,null, null, true);
    oModel.setCountSupported(false);
   
	// set global models
	sap.ui.getCore().setModel(oModel);
	 
	oModel.attachRequestCompleted(function(oEvent) {
	    sap.ui.getCore().getEventBus().publish("busyDialog","close");
	});
	
	oModel.attachRequestSent(function(oEvent) {
	    sap.ui.getCore().getEventBus().publish("busyDialog","open");
	});

	oModel.attachParseError(function(oEvent) {
	    displayError({
		message : oEvent.getParameter("message"),
		responseText : oEvent.getParameter("responseText"),
		statusCode : oEvent.getParameter("statusCode"),
		statusText : oEvent.getParameter("statusText")
	    });
	});	
	oModel.attachRequestFailed(function(oEvent) {
	    displayError({
		message : oEvent.getParameter("message"),
		responseText : oEvent.getParameter("responseText"),
		statusCode : oEvent.getParameter("statusCode"),
		statusText : oEvent.getParameter("statusText")
	    });	    
	});
}

	
