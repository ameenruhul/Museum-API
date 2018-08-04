**Show History of Museums**
----
  Returns json data about the history of museums.

* **URL**

  localhost:3000/api/museums/history

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
      
        
   	 {
   	 "_id": "5b657fc9e8698e714bcab508",
   	 "official_name": "Varendra Research Museum ",
    	"established": "1910",
    	"established_by": "Kumar Sarat",
    	"architect": "L.S. Charmaichel",
    	"area": "20 acr",
    	"notable_collections": "Puthis of Ancient time",
    	"about": "largest museum of Bangladesh",
    	"__v": 0
	}
	
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "History doesn't exist"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST history of Museums**
----
  POSTs json data about the history of the museums.

* **URL**

  localhost:3000/api/museums/history

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `
    { 
        {
   	 "_id": "5b657fc9e8698e714bcab508",
   	 "official_name": "Varendra Research Museum ",
    	"established": "1910",
    	"established_by": "Kumar Sarat",
    	"architect": "L.S. Charmaichel",
    	"area": "20 acr",
    	"notable_collections": "Puthis of Ancient time",
    	"about": "largest museum of Bangladesh",
    	"__v": 0
	}
    
    }`

  * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Object Not Created"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE history of Museums**
----
 Updates json data about the history of museums.

* **URL**

  localhost:3000/api/museums/history/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 202 <br />
    **Content:** `
    { 
        {
   	 "_id": "5b657fc9e8698e714bcab508",
   	 "official_name": "Varendra Research Museum ",
    	"established": "1910",
    	"established_by": "Kumar Sarat",
    	"architect": "L.S. Charmaichel",
    	"area": "20 acr",
    	"notable_collections": "Puthis of Ancient time",
    	"about": "largest museum of Bangladesh",
    	"__v": 0
	}
    
    }`

    * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Cannot Find The id"
    }`




* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete history of ID of Museums**
----
  Deletes json data about the specefic id of history of the museum.

* **URL**

  localhost:3000/api/museums/history/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 
    []


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```


