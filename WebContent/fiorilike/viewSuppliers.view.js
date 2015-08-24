sap.ui.jsview("fiorilike.viewSuppliers", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fiorilike.viewSuppliers
	*/ 
	getControllerName : function() {
		return "fiorilike.fioriLike";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fiorilike.viewSuppliers
	*/ 
	createContent : function(oController) {
 		
		//links to the oData and sets it as the data model
		var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(link, true); 
        
		var sPanel = new sap.m.Panel();
		
        
        //Table 1: Orders
        //displays table with title, date button, 3 columnms, and 8 visible rows navigated by a paginator
        var supTable = new sap.ui.table.DataTable({
        	title: "Supplier Data", 
        	visibleRowCount: 8,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
            columns : [ 
                {label: "Company Name", template: "CompanyName", sortProperty: "CompanyName"},
                {label: "Contact Name", template: "ContactName", sortProperty: "ContactName"},
                {label: "Phone", template: "Phone", sortProperty: "Phone"}
                ]
        });
	
        supTable.setModel(oModel);	//oModel is used to fill in table
        supTable.bindRows("/Suppliers");	//data for /Orders is bound to the table
        //custTable.addStyleClass("tables");
        
        
        sPanel.addContent(supTable);
		
		return new sap.m.Page({
			title: "Supplier Information",
			content: [
			          sPanel
			],
			showNavButton:true,
			navButtonTap:function(){
				oController.homePage();
			}
		});
	}

});