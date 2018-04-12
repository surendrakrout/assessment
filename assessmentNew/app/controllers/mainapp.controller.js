//controller for registration app
registrationApp.controller('regController',['$scope','$http',function($scope,$http){
    var registration = this;
    registration.userInfo = {
      first_name: '',
      last_name:'',
      email: '',
      password:'',
      dob:'',
      sex:'' 
    };

    //Export Methods 
    registration.savenUserInformation = savenUserInformation;

    //post api
    function savenUserInformation() {
          if(registration.userInfo.first_name && registration.userInfo.last_name && registration.userInfo.email && registration.userInfo.password)
          {  
          $http({
                    url: 'http://localhost:3000/emp',
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: registration.userInfo
                })
                .then(function(response) {
                  console.log("Data Added");
                }, 
                function(response) { 
                      console.log("error");
                });
              }else{
                console.log("Please insert valid inputs");
              }
    }
  }]);