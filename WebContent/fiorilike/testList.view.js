sap.ui.jsview("fiorilike.testList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fiorilike.testList
	*/ 
	getControllerName : function() {
		return "fiorilike.fiorilike";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fiorilike.testList
	*/ 
	createContent : function(oController) {
 		
		var oList = new sap.m.List("idHdr", {
			includeItemInSelection: true,
			inset: true
		});
		
		var oTemplate = new sap.m.StandardListItem("idItems", {title: "{CategoryName}", 
			description: "{Description}", 
				type: sap.m.ListType.Navigation,
				press: function(oEvent){
					oController.testing();
				}
		});
		
		oList.bindAggregation("items", {
			path: "/value",
			template: oTemplate
		})
		
		return new sap.m.Page({
			title: "List",
			content: [
			          oList
			]
		});
	}

});