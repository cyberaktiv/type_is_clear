# Type is clear
Function of clear and cross-browser definition of the type of variable

### Methods:
| Method | Desctiption |
| ------ | ------ |
| **isInteger(val)** | is the variable an integer |
| **isDouble(val)** | is the variable an double |
| **isNumber(val)** | is the variable any number |
| **isArray(val)** | is the variable an array |
| **isFunction(val)** | is the variable an function |
| **isString(val)** | is the variable an string |
| **isBoolean(val)** | is the variable an boolean |
| **isObject(val [,type])** | is the variable an object, type - optional parameter: string with type name (see examples) |
| **isNull(val)** |		 does the variable have a null value |
| **isUndefined(val)** | does the variable have a undefined value |
| **isNaN(val)** | 		 does the variable have a NaN value |
| **isInfinity(val)** |	 does the variable have a Infinity or -Infinity value |
*val - parameter: variable of any type

### Examples:
```javascript
var type = new Type(); // init

type.isInteger(1234); 	  	// true
type.isInteger(1234.56);  	// false
type.isInteger(NaN); 	  	// false
type.isInteger(Infinity); 	// false

type.isDouble(1234.56);   	// true
type.isDouble(1234); 	  	// false
type.isDouble(NaN); 	  	// false
type.isDouble(Infinity);  	// false

type.isNumber(1234); 	  	// true
type.isNumber(1234.56);   	// true
type.isNumber(NaN); 	  	// false
type.isNumber(Infinity);  	// false

type.isNaN(NaN); 	  	   	// true
type.isNaN(123); 	  	   	// false

type.isInfinity(Infinity); 	// true
type.isInfinity(-Infinity); // true
type.isInfinity(-10); 		// false
type.isInfinity(NaN); 		// false

type.isArray([1, 2, 3, 4, 5]); 		// true
type.isArray({"key": "value"}); 	// false

type.isFunction(function(){}); 		// true
type.isFunction([1, 2, 3, 4, 5]); 	// false

type.isString("this is string"); 	// true
type.isString("12345"); 		 	// true

type.isBoolean(true); 	 // true
type.isBoolean(false); 	 // true
type.isBoolean(1); 		 // false
type.isBoolean(0); 		 // false
type.isBoolean("true");  // false
type.isBoolean("false"); // false

type.isNull(null); 				// true
type.isNull(false); 			// false
type.isNull(undefined); 		// false

type.isUndefined(undefined); 	// true
type.isUndefined(null); 	 	// false
type.isUndefined(false); 	 	// false
type.isUndefined({}); 	 		// false

type.isObject({'key':'value'}); 		 // true
type.isObject(new Date); 	     		 // true
type.isObject(new Date, "Date"); 		 // true
type.isObject([1, 2, 3, 4, 5]);  		 // true
type.isObject([1, 2, 3, 4, 5], "Array"); // true
type.isObject([1, 2, 3, 4, 5], "Date");  // false
type.isObject(null); 					 // false
```