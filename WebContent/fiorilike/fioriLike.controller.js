sap.ui.controller("fiorilike.fioriLike", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fiorilike.fioriLike
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fiorilike.fioriLike
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fiorilike.fioriLike
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fiorilike.fioriLike
*/
//	onExit: function() {
//
//	}
	
	testing: function(){
		alert("hello");
	},
	
	homePage: function(){
		app.to(page1view);
	},
	
	viewOrders: function(){
		app.to(orderPage);
	}, 
	
	viewCustomers: function(){
		app.to(customerPage);
	}, 
	
	viewEmployees: function(){
		app.to(employeePage);
	},
	
	viewProducts: function(){
		app.to(productPage);
	}, 
	
	viewSuppliers: function(){
		app.to(supplierPage);
	}


});