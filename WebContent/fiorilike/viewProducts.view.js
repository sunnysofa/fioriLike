sap.ui.jsview("fiorilike.viewProducts", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fiorilike.viewProducts
	*/ 
	getControllerName : function() {
		return "fiorilike.fioriLike";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fiorilike.viewProducts
	*/ 
	createContent : function(oController) {
 		
		//links to the oData and sets it as the data model
		var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(link, true); 
        
		var pPanel = new sap.m.Panel({headerText:"this works"});
		
        
        //Table 1: Orders
        //displays table with title, date button, 3 columnms, and 8 visible rows navigated by a paginator
        var pTable = new sap.ui.table.DataTable({
        	title: "Product Data", 
        	visibleRowCount: 8,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
            columns : [ 
                //{label: "Company Name", template: "CompanyName", sortProperty: "CompanyName"},
				//{label: "Customer ID", template: "CustomerID", sortProperty: "CustomerID"},
				//{label: "Contact Name", template: "ContactName", sortProperty: "ContactName"}
                {label: "ProductName", template: "ProductID", sortProperty: "ProductName"}
                ]
        });
	
        pTable.setModel(oModel);	//oModel is used to fill in table
        pTable.bindRows("/Products");	//data for /Orders is bound to the table
        //custTable.addStyleClass("tables");
        
        
        pPanel.addContent(pTable);
		
        /*var master = sap.ui.view({id:"master", viewName:"fiorilike.viewEmployees", type:sap.ui.core.mvc.ViewType.JS});
				
		var detail = sap.ui.view({id:"detail", viewName:"fiorilike.viewOrders", type:sap.ui.core.mvc.ViewType.JS});

        var contain = new sap.m.SplitContainer();
		contain.addMasterPage(master);
		contain.addDetailPage(detail);
        */
        
        
		return new sap.m.Page({
			title: "Product Information",
			content: [
			          pPanel
			          //contain
			],
			showNavButton:true,
			navButtonTap:function(){
				oController.homePage();
			}
		});
	}

});