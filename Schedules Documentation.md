**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       {
        "_id": "5b655735af65a50b98c79a18",
        "address": "Jadugor Mor,Rajshahi",
        "open_time": "10.00am",
        "closed_time": "5.00pm",
        "visiting_days": "Sunday,Monday,Wednesday,Tuesday,Thursday",
        "upcoming_events": "Edul Azha",
        "upcoming_events_date": "23 August",
        "upcoming_workshop": "Know history,Create history",
        "upcoming_workshop_date": "10-09-2018",
        "ticket_price": "10 TK",
        "__v": 0
       }
    
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

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
        "address": "Jadugor Mor,Rajshahi",
        "open_time": "10.00am",
        "closed_time": "5.00pm",
        "visiting_days": "Sunday,Monday,Wednesday,Tuesday,Thursday",
        "upcoming_events": "Edul Azha",
        "upcoming_events_date": "23 August",
        "upcoming_workshop": "Know history,Create history",
        "upcoming_workshop_date": "10-09-2018",
        "ticket_price": "10 TK",
        "__v": 0
       }
    
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

* **Method:**

  `PUT`
  
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
        "address": "Jadugor Mor,Rajshahi",
        "open_time": "10.00am",
        "closed_time": "5.00pm",
        "visiting_days": "Sunday,Monday,Wednesday,Tuesday,Thursday",
        "upcoming_events": "Edul Azha",
        "upcoming_events_date": "23 August",
        "upcoming_workshop": "Know history,Create history",
        "upcoming_workshop_date": "10-09-2018",
        "ticket_price": "10 TK",
        "__v": 0
       }
    
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```


