sap.ui.jsview("fiorilike.viewEmployees", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fiorilike.viewEmployees
	*/ 
	getControllerName : function() {
		return "fiorilike.fioriLike";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fiorilike.viewEmployees
	*/ 
	createContent : function(oController) {
		
		//links to the oData and sets it as the data model
		var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(link, true); 
        
		var ePanel = new sap.m.Panel();
		
        
        //Table 1: Orders
        //displays table with title, date button, 3 columnms, and 8 visible rows navigated by a paginator
        var emTable = new sap.ui.table.DataTable({
        	title: "Employee Data", 
        	visibleRowCount: 8,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
            columns : [ 
                {label: "First Name", template: "FirstName", sortProperty: "FirstName"},       
                {label: "Last Name", template: "LastName", sortProperty: "LastName"}, 
                {label: "Title", template: "Title", sortProperty: "Title"},
                {label: "City", template: "City", sortProperty: "City"}
                ]
        });
	
        emTable.setModel(oModel);	//oModel is used to fill in table
        emTable.bindRows("/Employees");	//data for /Orders is bound to the table
        //custTable.addStyleClass("tables");
        
        ePanel.addContent(emTable);
        
        
        
        
 		return new sap.m.Page({
			title: "Employee Information",
			content: [
			          ePanel
			],
			showNavButton:true,
			navButtonTap:function(){
				oController.homePage();
			}
		});
	}

});