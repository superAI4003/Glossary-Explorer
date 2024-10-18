/**
 * getLanguages
 */
 import API from "../../../api";
 import ENDPOINTS from "../../../../config/apiendpoint";
 import constants from "../../../constants";
 
 export default class getLanguages extends API {
   constructor(timeout = 2000) {
     super("GET", timeout, false);
     this.type = constants.GET_ALL_LANGUAGE;
     this.endpoint = `${super.apiEndPoint()}${ENDPOINTS.getLanguage}`;
   }
 
   processResponse(res) {
     super.processResponse(res);
     if (res) {
         this.searchData = res;
         console.log(res);
     }
 }
 
   apiEndPoint() {
     return this.endpoint;
   }
 
   getBody() {
    return false
   }
 
   getHeaders() {
     this.headers = {
       headers: {
         "Content-Type": "application/json",
       },
     };
     return this.headers;
   }
 
   getPayload() {
     return this.searchData
   }
 }
 