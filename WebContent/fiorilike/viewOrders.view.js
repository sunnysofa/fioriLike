sap.ui.jsview("fiorilike.viewOrders", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fiorilike.fioriLike
	*/ 
	getControllerName : function() {
		return "fiorilike.fioriLike";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fiorilike.fioriLike
	*/ 
	createContent : function(oController) {
		
		//original pre-write  var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		//links to the oData and sets it as the data model
		var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(link, true); 
        
        var oPanel = new sap.m.Panel("panel",{
        					headerText:"Northwind Orders"});
        
        //Table 1: Orders
        //displays table with title, date button, 3 columnms, and 8 visible rows navigated by a paginator
        var oTable1 = new sap.ui.table.DataTable({
        	title: "Information on Orders", 
        	visibleRowCount: 8,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
            columns : [ 
                {label: "Order ID", template: "OrderID", sortProperty: "OrderID"},
				{label: "Customer ID", template: "CustomerID", sortProperty: "CustomerID"},
				{label: "Employee ID", template: "EmployeeID", sortProperty: "EmployeeID"}
				]
        });

        oTable1.setModel(oModel);	//oModel is used to fill in table
        oTable1.bindRows("/Orders");	//data for /Orders is bound to the table
        oTable1.addStyleClass("tables");
        
      //Table 2: Order Details (Products in Order)
        //when user selects an order's row in table 1, table 2 displays the products in the order
        var oTable2 = new sap.ui.table.DataTable({
        	title: "Order Details", 
        	visibleRowCount: 5,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
            columns : [ 
				{label: "Order ID", template: "OrderID", sortProperty: "OrderID"},
				{label: "Product ID", template: "ProductID", sortProperty: "ProductID"},
				{label: "Unit Price", template: "UnitPrice", sortProperty: "UnitPrice"}
				],
        });
        
        oTable2.setModel(oModel); 
        oTable2.bindRows("/Order_Details");
        //oTable2.addStyleClass("tables");
        
        //Selecting order in table 1 and displaying it in table 2
        //var oCheck = new sap.ui.commons.CheckBox({editable:false});
		//oCheck.bindChecked("fraud");
		
        oTable1.attachRowSelect(function(oEvent){
			//get the binding context of the first selected row
        	var selectedRowContext = oEvent.getParameter("rowContext");	//"address" of row in metadata
			var selectedOrderID = oModel.getProperty("OrderID", selectedRowContext);
			
			//filter table 2 - list products in the order selected from table 1
			var listBinding = oTable2.getBinding();	//table 2 binds /Order_Details
			var oFilter = new sap.ui.model.Filter("OrderID", sap.ui.model.FilterOperator.EQ, selectedOrderID); //filters through all Orders and matches the selectedOrderID
			listBinding.filter([oFilter]); 
				
			//set binding context for checkbox
			//oCheck.setBindingContext(selectedRowContext);
		});
	    
        oPanel.addContent(oTable1);
        oPanel.addContent(oTable2);
        
        
        //list of orders
        //var oList = new sap.m.List({headerText: "Order List"});
        //oList.bindAggregation("items", {
        //	path: "/Orders"
        //});
        //oList.addStyleClass("lists");
        
		return new sap.m.Page({
			title: "Order Information",
			content: [
			         //oList,
			         oPanel
			],
			showNavButton:true,
			navButtonTap:function(){
				oController.homePage();
			}
		});
	}


});