**Show Officers Lists of Museums**
----
  Returns json data about the list officers of museums.

* **URL**

  localhost:3000/api/museums/list_officers

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
      
        
   	 "_id": "5b656f7a9ca4da5e34567cf8",
   	 "name": "Ruhul Ameen",
    	"position": "Director",
   	 "Office": "2nd Floor,VRM",
   	 "email": "ameensunny242@gmail.com",
   	 "phone_office": "0721-776666",
   	 "phone_res": "90980988",
   	 "mobile": "01521300804",
   	 "Salary": "80K",
   	 "NID": "883738383892902",
    	"dateOfJoin": "11 Nov, 2000",
    	"__v": 0
	
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "User doesn't exist"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list_officers",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST officers list of Museums**
----
  Posts json data about the list of officers of the museums.

* **URL**

  localhost:3000/api/museums/list_officers

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
    	 "_id": "5b6575289ca4da5e34567cf9",
    	"name": "Kakon Mehedi",
    	"position": "Executive Officer",
    	"Office": "1st Floor,VRM",
    	"email": "mehedidhkakon@gmail.com",
    	"phone_office": "0721-779911",
    	"phone_res": "909988988",
    	"mobile": "01716482871",
    	"Salary": "50K",
    	"NID": "77765646437383",
    	"dateOfJoin": "05 Dec, 2005",
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
      url: "localhost:3000/api/museums/list_officers",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE oficers list of Museums**
----
 Updates json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/list_officers/:id

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
    	 "_id": "5b6575289ca4da5e34567cf9",
    	"name": "Kakon Mehedi",
    	"position": "Executive Officer",
    	"Office": "1st Floor,VRM",
    	"email": "mehedidhkakon@gmail.com",
    	"phone_office": "0721-779911",
    	"phone_res": "909988988",
    	"mobile": "01716482871",
    	"Salary": "50K",
    	"NID": "77765646437383",
    	"dateOfJoin": "05 Dec, 2005",
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
      url: "localhost:3000/api/museums/list_officers/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete officers list of ID of Museums**
----
  Deletes json data about the specefic id of list officers of the museum.

* **URL**

  localhost:3000/api/museums/list_officers/:id

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
      url: "localhost:3000/api/museums/list_officers/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```


