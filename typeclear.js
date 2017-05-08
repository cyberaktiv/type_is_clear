var Type = function()
{
	var self = this;
	
	this.isNumber = function(obj){
		return self.isInteger(obj) || self.isDouble(obj);
	};

	this.isInteger = function(obj){				
		return (typeof obj === "number" && obj % 1 === 0);
	};

	this.isDouble = function(obj){
		return (
			typeof obj === "number" &&
			obj % 1 !== 0 &&
			!isNaN(obj) &&
			!self.isInfinity(obj)
		);
	};

	this.isNaN = function(obj){
		return (typeof obj === "number" && isNaN(obj));
	};

	this.isInfinity = function(obj){
		return (obj === Infinity || obj === -Infinity);
	};

	this.isArray = function(obj){
		return self.isObject(obj, "Array");
	};

	this.isNull = function(obj){
		return obj === null;
	};

	this.isUndefined = function(obj){
		return obj === undefined;
	};

	this.isFunction = function(obj){
		return typeof obj === "function";
	};

	this.isBoolean = function(obj){
		return typeof obj === "boolean";
	};

	this.isObject = function(obj, type){
		
		var is_object = !self.isNull(obj) && typeof obj === "object";
		return (type && is_object)?obj.__proto__.constructor.name === type:is_object;		
	};

	this.isString = function(obj){
		return typeof obj === "string";
	};
};