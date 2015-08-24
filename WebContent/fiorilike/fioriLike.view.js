sap.ui.jsview("fiorilike.fioriLike", {

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
		
		var tileContainer = new sap.m.TileContainer({   
			 tiles : [ 
		            new sap.m.StandardTile({
		            icon : "sap-icon://sales-order-item",
		            title : "Orders",
		            press : function() {
		            	oController.viewOrders();
		            }
		        }), new sap.m.StandardTile({
		            icon : "sap-icon://customer",
		            title : "Customers",
		            press : function() {
		                oController.viewCustomers();
		            }
		        }), new sap.m.StandardTile({
		            icon : "sap-icon://employee",
		            title : "Employees",
		            press : function() {
		                oController.viewEmployees();
		            }
		        }), new sap.m.StandardTile({
		            icon : "sap-icon://product",
		            title : "Products",
		            press : function() {
		                oController.viewProducts();
		            }
		        }), new sap.m.StandardTile({
		            icon : "sap-icon://supplier",
		            title : "Suppliers",
		            press : function() {
		                oController.viewSuppliers();
		            }
		        })

		         ],

		    });

		    //return tileContainer;
		    
		
		//original pre-written code
		return new sap.m.Page({
			title: "Launchpad",
			content: tileContainer
		});
	}

});