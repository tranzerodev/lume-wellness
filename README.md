### Start Apps

```
$ npm run start
$ netlify-lambda serve app/lambda
```

### Booking Core
[ ] Process Payment via Stripe Element
[ ] Confirm Successful Payment.
[ ] Send Booking Information.
[ ] Load Avaiability into the Calendar.

## Database
```
export FAUNADB_SERVER_SECRET=fnADaIjEBiACBJhxzlTGYx9MLsZu7HqvlSJZHcIR

...Authentication
curl -H "Api-Token: de17ca31a6e5597b74af5cbdf47627f2d41eac1d1b77e5b30d9d61ea783be84171bcc306" https://account.api-us1.com/api/3/

...GetAllContact
curl --request GET --url https://lume-wellness.api-us1.com/api/3/contacts
```

### Format for Stripe Charge
{
    "amount": 100,
    "token":{
      "id": "tok_1FBS3wJ32o4TcWuAfM8kpu0e",
      "object": "token",
      "card": {
        "id": "card_1FBS3wJ32o4TcWuAo062vFRa",
        "object": "card",
        "address_city": null,
        "address_country": null,
        "address_line1": null,
        "address_line1_check": null,
        "address_line2": null,
        "address_state": null,
        "address_zip": null,
        "address_zip_check": null,
        "brand": "Visa",
        "country": "US",
        "cvc_check": null,
        "dynamic_last4": null,
        "exp_month": 8,
        "exp_year": 2020,
        "fingerprint": "LAmP30Z9Axpn37fQ",
        "funding": "credit",
        "last4": "4242",
        "metadata": {},
        "name": null,
        "tokenization_method": null
      },
      "client_ip": null,
      "created": 1566763904,
      "livemode": false,
      "type": "card",
      "used": false
    },
    "description":"space travel", 
    "idempotency_key":"123123"
}

### Acuity API Endpoints
##### Get All Appointments
curl -u 18196898:b38fc374e8d47ff57a34d5b877101da3 "https://acuityscheduling.com/api/v1/appointments"

##### Get All Appointment Types
```
curl -u 18196898:b38fc374e8d47ff57a34d5b877101da3 "https://acuityscheduling.com/api/v1/appointment-types"
```

***Sample Response***
```
[
{"id":11179747,"name":"CRYO  Local","active":true,"description":"","duration":10,"price":"65.00","category":"CRYOTHERAPY","color":"#6FCF97","private":false,"type":"service","schedulingUrl":"https://app.acuityscheduling.com/schedule.php?owner=18196898&appointmentType=11179747","image":"","classSize":null,"paddingAfter":5,"paddingBefore":0,"calendarIDs":[3198931],"addonIDs":[],"formIDs":[]},

{"id":11179791,"name":"CRYO Facial","active":true,"description":"","duration":10,"price":"65.00","category":"CRYOTHERAPY","color":"#3DBE8B","private":false,"type":"service","schedulingUrl":"https://app.acuityscheduling.com/schedule.php?owner=18196898&appointmentType=11179791","image":"","classSize":null,"paddingAfter":0,"paddingBefore":0,"calendarIDs":[3198931],"addonIDs":[],"formIDs":[]},

{"id":11179800,"name":"CRYO - Whole Body","active":true,"description":"","duration":10,"price":"65.00","category":"CRYOTHERAPY","color":"#3DBE8B","private":false,"type":"service","schedulingUrl":"https://app.acuityscheduling.com/schedule.php?owner=18196898&appointmentType=11179800","image":"","classSize":null,"paddingAfter":0,"paddingBefore":0,"calendarIDs":[3198931],"addonIDs":[824982],"formIDs":[]},

{"id":11179815,"name":"IV 1 - Good Hydrations","active":true,"description":"","duration":45,"price":"95.00","category":"IV DRIP","color":"#3DBE8B","private":false,"type":"service","schedulingUrl":"https://app.acuityscheduling.com/schedule.php?owner=18196898&appointmentType=11179815","image":"","classSize":null,"paddingAfter":5,"paddingBefore":10,"calendarIDs":[3198931],"addonIDs":[],"formIDs":[]},

{"id":11179819,"name":"IV 2 - Champions Drip","active":true,"description":"","duration":45,"price":"160.00","category":"IV DRIP","color":"#3DBE8B","private":false,"type":"service","schedulingUrl":"https://app.acuityscheduling.com/schedule.php?owner=18196898&appointmentType=11179819","image":"","classSize":null,"paddingAfter":5,"paddingBefore":10,"calendarIDs":[3198931],"addonIDs":[],"formIDs":[]},

{
  "id":11179778,
  "name":"MASSAGE – Relax 60m",
  "active":true,"description":"",
  "duration":60,"price":"110.00",
  "category":"MASSAGE",
  "color":"#1972EB",
  "private":false,
  "type":"service",
  "schedulingUrl":"https://app.acuityscheduling.com/schedule.php?owner=18196898&appointmentType=11179778","image":"","classSize":null,"paddingAfter":10,"paddingBefore":0,"calendarIDs":[3198931],"addonIDs":[824981],"formIDs":[]},{"id":11179783,"name":"MASSAGE - Relax 90m","active":true,"description":"","duration":90,"price":"160.00","category":"MASSAGE","color":"#73C1ED","private":false,"type":"service","schedulingUrl":"https://app.acuityscheduling.com/schedule.php?owner=18196898&appointmentType=11179783","image":"","classSize":null,"paddingAfter":10,"paddingBefore":0,"calendarIDs":[3198931],"addonIDs":[824981],"formIDs":[]}]
```

##### Add Appointment Add-Ons
```
curl -u 18196898:b38fc374e8d47ff57a34d5b877101da3 "https://acuityscheduling.com/api/v1/appointment-addons"
```

***Sample Response***
```
[{
  "id":824982,
  "name":"BonusSauna",
  "duration":0,
  "price":"40.00",
  "private":false,
  "active":true
},{
  "id":824981,
  "name":"CBD oil",
  "duration":0,
  "price":"10.00",
  "private":false,
  "active":true
}]
```

##### Add New Appointment to Calendar 
POST methods to create New Appointment

##### Find Availability by Service
curl -u 18196898:b38fc374e8d47ff57a34d5b877101da3 "https://acuityscheduling.com/api/v1/availabilitytimes?appointmentTypeID=123&calendarID=123&date=2016-02-04"

#### Snippet Directory
/Users/troydo42/Library/Application Support/Sublime Text 3/Packages/User