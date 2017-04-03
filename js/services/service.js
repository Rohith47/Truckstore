/**
* Module : Store Service
Provide Required Store Data and method to Manage It
*/

app.service('storeService', function () {

  this.editMode = false;
  this.parts = localStorage.storeData ? JSON.parse(localStorage.storeData).parts : [];
  

  this.country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
    ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
    ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
    ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
    ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
    ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
    ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
    ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
    ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
    ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
    ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
    ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
    ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
    ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
    ,"Yemen","Zambia","Zimbabwe"];

  /**
  * Get Part 
  * Returns the specific part from parts array
  */
  this.getPart = function(partId){
    var part;
    this.parts.forEach(function(i,j){
      if(i.id === partId){        
       part = i;
      }
    }); 
    return part;
  }

  /**
  * Set Edit Mode
  * Set the edit mode 
  */

  this.setEditMode = function(val){
    this.editMode = val;
  }

  /**
  * Get Parts Array
  * Return Parts Array
  */
  this.getPartsDetails = function(){
    return this.parts;
  }

  /**
  * Country List
  * Returns the country List to Subscriber
  */
  this.getCountryList = function(){
    return this.country;
  }

  /**
  * Create Part
  * Create the new part and add it to parts Array
  * Note : Model Initiation can be handeled in seperate Controller, if required.
  */

  this.createPart = function(part,callback){ 
    var index = [];
    var availableElementIndex;
    this.parts.forEach(function(i,j){
     index.push(i.id);
    });
    if(this.editMode){
      availableElementIndex = index.indexOf(part.id);
      if(availableElementIndex > -1){
        this.parts.forEach(function(i,j){
          if(i.id === index[availableElementIndex]){
            i.name = part.name;
            i.description = part.description;
            i.country = part.country;
            i.email = part.email
          }
        });
        this.editMode = false;
      }
    }
    else{
      part.id = index.length == 0 ? 1 : Math.max.apply(null,index) + 1;
      this.parts.push(part);
    }
    this.updateCache(this.parts, "parts");
    callback();
  }

  /**
  * Delete Part
  * Delete the part from local cache And from parts Array
  */
  this.deletePart = function(partId,callback){
    var that = this;
    this.parts.forEach(function(i,j){
      if(i.id === partId){
        that.parts.splice(j,1);        
        that.updateCache(that.parts);
        callback();
        return false;
      }
    });
  }

  /**
  * update Local Cache
  * Update The cache . This method will be called from other methods to update the local Cache
  */
  this.updateCache = function(data,type){
    if(Storage){
      if(!localStorage.storeData)
        localStorage.storeData = null;
      if(type="parts"){
        localStorage.storeData = JSON.stringify({'parts':data});
      }
    }
  }

});