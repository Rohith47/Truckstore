/**
* Module : Store Controller
* Manage Store Product
*/

app.controller("storeCtrl", function($location,$uibModal,storeService) {
    var vm = this;
    vm.item = "";
    vm.result = "";
    vm.part = {};
    vm.parts = storeService.getPartsDetails();
    vm.countries = storeService.getCountryList();
    vm.openForm = false;
    vm.selectedPart = vm.parts[0] ? vm.parts[0].id : undefined;
    vm.isActive = function (viewLocation) {   // Update boot strap menu status
        return viewLocation === $location.path();
    };


    /**
        Create Parts once the form is submitted
    */
    vm.submit = function(form){
        var valid = form.$valid;
    	if(valid){
            storeService.createPart(vm.part, function(){
                $uibModal.open({                           // Show success Modal Data
                    templateUrl: 'myModalContent.html',
                    size: 'sm',
                    controller: 'storeCtrl',
                    controlleras: 'vm'
                });                               
                vm.part = {};
                vm.partsForm.$setPristine(); 
            });
            vm.parts = storeService.getPartsDetails();
            if(!vm.selectedPart) vm.selectedPart = vm.parts[0].id;
    	}
        else{
            form.word.$setDirty(true);
        }
    }

    /**
    *deletePart
    *Delete the selected Part
    */
    vm.deletePart = function(part){
        storeService.deletePart(part,function(){
            $uibModal.open({
                templateUrl: 'myModalContent.html',
                size: 'sm'
            });
        });
        vm.selectedPart = vm.parts[0] ? vm.parts[0].id : undefined;
        if(part == vm.part.id){
            vm.part = {};
        }
    }

    /**
    *editPart
    *Edit the selected Part
    */
    vm.editPart = function(partId){
        vm.part = storeService.getPart(partId);
        storeService.setEditMode(true);
        vm.openForm = true;
    }

    /**
    *close Popup
    *Close the Popup
    */
    vm.closePopup = function(){
        modalInstance.close();
    }
});