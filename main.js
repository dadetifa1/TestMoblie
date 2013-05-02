
Main = {
  get: function(id) {
    return document.getElementById(id);
  },

  load: function() {
    Main.store.get('some_key', function(ok, val) {
      if (ok)
{
 //alert('some_key = ' + val);
}
      
    });
  },

  save: function() {
            var fDate = $('#formDate').val();

	        var cName = $('#ClientName').val();
	        var fName = $('#FacilityName').val();
	        var pickAddress = $('#PickupAddress').val();

	        var dropAddress = $('#DropOffAddress').val();
	        var dob = $('#DateOfBirth').val();
	        var gender = $('#Gender').val();

	        var aDate = $('#AppDate').val();
	        var aTime = $('#AppTime').val();
	        var pickTimeHome = $('#PickUpTimeHome').val();

	        var dropTimeClinic = $('#DropOffTimeClinic').val();
	        var pickTimeClinic = $('#PickupTimeClinic').val();
	        var dropTimeHome = $('#DropOffTimeHome').val();

	        var clientPhone = $('#ClientPhoneNumber').val();
	        var clientClaimNumber = $('#ClientClaimNumber').val();
	        var facilityPhone = $('#FacilityPhoneNumber').val();

	        var driverName = $('#DriverName').val();	     
	        var fSignature = $('#facilitySignature').val();
	        var dSignature = $('#driverSignature').val();


     var val =fDate+cName+fName+pickAddress+dropAddress+dob+ gender+aDate+aTime+pickTimeHome+dropTimeClinic+pickTimeClinic+dropTimeHome+clientPhone+clientClaimNumber+facilityPhone+driverName+fSignature+dSignature
    
      
   // alert(val); 
    Main.store.set('some_key', val);
  },
 

  init: function() {
    // create new persistent store
    Main.store = new Persist.Store('Main', {
      swf_path: '../persist.swf'
    });
   
    Main.get('type').innerHTML = Persist.type;

    // attach callbacks
    Main.get('load-btn').onclick = Main.load;
    Main.get('save-btn').onclick = Main.save;
  
  }
};
