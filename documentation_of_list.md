**Show List of Museums**
----
  Returns json data about the list of museums.

* **URL**

  localhost:3000/api/museums/list

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
  
    {

    "_id": "5b655735af65a50b98c79a18",
    "name":"Varentra Research Museum",
    "address":Serushar Para, College Road, Boalia,Rajshahi"
    
    }

    }

	
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "User doesn't exist"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST list of Museums**
----
  Posts json data about the list of the museums.

* **URL**

  localhost:3000/api/museums/list

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
    	 
    {

    "_id": "5b655735af65a50b98c79a18",
    "name":"Varentra Research Museum",
    "address":Serushar Para, College Road, Boalia,Rajshahi"
    
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
      url: "localhost:3000/api/museums/list",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE list of Museums**
----
 Updates json data about the list of museums.

* **URL**

  localhost:3000/api/museums/list/:id

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

    "_id": "5b655735af65a50b98c79a18",
    "name":"Varentra Research Museum",
    "address":Serushar Para, College Road, Boalia,Rajshahi"
    
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
      url: "localhost:3000/api/museums/list/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete list of ID of Museums**
----
  Deletes json data about the specefic id of the museum.

* **URL**

  localhost:3000/api/museums/list/:id

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
      url: "localhost:3000/api/museums/list/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```



