## Main Font
  #364650
  font-size: 21px;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;

## MINDBODY API Document
MindBody API Key: a109890ffa9d41ef99bdafc74e37915c -> API-Keys
--> Getting The Required Field
curl -X GET \
  https://api.mindbodyonline.com/public/v6/client/requiredclientfields \
  -H 'Api-Key: a109890ffa9d41ef99bdafc74e37915c' \
  -H 'SiteId: -99' \
  -A 'LumeWellness-08'

---> Results
{"RequiredClientFields":[
    "AddressLine1",
    "State",
    "City",
    "PostalCode",
    "ReferredBy",
    "BirthDate",
    "MobilePhone"]
}%
--> Adding New Client
curl -X POST \
  https://api.mindbodyonline.com/public/v6/client/addclient \
  -H 'Content-Type: application/json' \
  -H 'Api-Key: a109890ffa9d41ef99bdafc74e37915c' \
  -H 'SiteId: -99' \
  -A 'LumeWellness-08' \
  -d '{
    "FirstName": "John",
    "LastName": "Smith",
    "AddressLine1": "123 ABC Ct",
    "City": "San Luis Obispo",
    "State": "CA",
    "PostalCode": "93401",
    "ReferredBy":"The Divine",
    "BirthDate": "1990-01-01",
    "MobilePhone":"15709834466"
}'
{"Client":{"AppointmentGenderPreference":"None","BirthDate":"1990-01-01T00:00:00","Country":"US","CreationDate":"2019-08-06T10:08:07.8201362-07:00","CustomClientFields":[],"ClientCreditCard":null,"ClientIndexes":[],"ClientRelationships":null,"FirstAppointmentDate":"2019-08-06T10:08:07.8211363-07:00","FirstName":"John","Id":"100015697","IsCompany":false,"IsProspect":false,"LastName":"Smith","Liability":{"AgreementDate":null,"IsReleased":false,"ReleasedBy":null},"LiabilityRelease":false,"MembershipIcon":0,"MobileProvider":null,"Notes":null,"State":"CA","UniqueId":100015697,"LastModifiedDateTime":"0001-01-01T00:00:00Z","RedAlert":null,"YellowAlert":null,"MiddleName":null,"ProspectStage":null,"Email":null,"MobilePhone":"15709834466","HomePhone":null,"WorkPhone":null,"AccountBalance":0.0,"AddressLine1":"123 ABC Ct","AddressLine2":null,"City":"San Luis Obispo","PostalCode":"93401","WorkExtension":null,"ReferredBy":"The Divine","PhotoUrl":null,"EmergencyContactInfoName":null,"EmergencyContactInfoEmail":null,"EmergencyContactInfoPhone":null,"EmergencyContactInfoRelationship":null,"Gender":null,"LastFormulaNotes":null,"Active":true,"SalesReps":null,"Status":null,"Action":"Added","SendAccountEmails":false,"SendAccountTexts":null,"SendPromotionalEmails":false,"SendPromotionalTexts":null,"SendScheduleEmails":false,"SendScheduleTexts":null}}%

### Purchasing Appointment Pass
curl -X GET \
  'https://api.mindbodyonline.com/public/v6/site/locations' \
  -H 'Api-Key: a109890ffa9d41ef99bdafc74e37915c' \
  -H 'SiteId: -99' \
  -A 'LumeWellness-08' \
  -A '{yourAppName}'
  
  {/* 
      <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>

        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>

        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    */}
