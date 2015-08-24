sap.ui.jsview("fiorilike.viewCustomers", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fiorilike.viewCustomers
	*/ 
	getControllerName : function() {
		return "fiorilike.fioriLike";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fiorilike.viewCustomers
	*/ 
	createContent : function(oController) {
 		
		//links to the oData and sets it as the data model
		var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(link, true); 
        
		var cPanel = new sap.m.Panel({headerText:"i hope this works"});
		
        
        //Table 1: Orders
        //displays table with title, date button, 3 columnms, and 8 visible rows navigated by a paginator
        var custTable = new sap.ui.table.DataTable({
        	title: "Customer Data", 
        	visibleRowCount: 8,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
            columns : [ 
                {label: "Company Name", template: "CompanyName", sortProperty: "CompanyName"}
				//{label: "Customer ID", template: "CustomerID", sortProperty: "CustomerID"},
				//{label: "Contact Name", template: "ContactName", sortProperty: "ContactName"}
                //{label: "Address", template: "Address", sortProperty: "Address"}
                ]
        });
	
        custTable.setModel(oModel);	//oModel is used to fill in table
        custTable.bindRows("/Customers");	//data for /Orders is bound to the table
        //custTable.addStyleClass("tables");
        
        
        cPanel.addContent(custTable);
		

		return new sap.m.Page({
			title: "Customer Information",
			content: [
			         //custPanel
			         //oPanel
			         //cPanel
			         cPanel
			],
	 		showNavButton:true,
			navButtonTap:function(){
				oController.homePage();
			}
		});
	}

});