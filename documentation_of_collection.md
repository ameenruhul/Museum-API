**Show Collection of Museums**
----
  Returns json data about the collection of museums.

* **URL**

  localhost:3000/api/museums/collection

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
    
    "product_name":"palmurti",
    "product_no":"01",
    "product_type":"murti",
    "product_origin":"md araf",
    "origin_address":"natore",
    "origin_mobile_no":"01725647764",
    "product_background":"natore_museum",
    "submission_date":"07.10.17"


    
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
      url: "localhost:3000/api/museums/collection",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST collection of Museums**
----
  Posts json data about the collection of the museums.

* **URL**

  localhost:3000/api/museums/collection

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

    "_id": "5b655735af65a50b98c79a18",
    
    "product_name":"palmurti",
    "product_no":"01",
    "product_type":"murti",
    "product_origin":"md araf",
    "origin_address":"natore",
    "origin_mobile_no":"01725647764",
    "product_background":"natore_museum",
    "submission_date":"07.10.17"



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
      url: "localhost:3000/api/museums/collection",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE collection of Museums**
----
 Updates json data about the collection of museums.

* **URL**

  localhost:3000/api/museums/collection/:id

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
    
    "product_name":"palmurti",
    "product_no":"01",
    "product_type":"murti",
    "product_origin":"md araf",
    "origin_address":"natore",
    "origin_mobile_no":"01725647764",
    "product_background":"natore_museum",
    "submission_date":"07.10.17"


    
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
      url: "localhost:3000/api/museums/collection/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete collection of ID of Museums**
----
  Deletes json data about the specefic id of collection of the museum.

* **URL**

  localhost:3000/api/museums/collection/:id

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
      url: "localhost:3000/api/museums/collection/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```




