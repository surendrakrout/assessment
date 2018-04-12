'use strict';

describe('Registration page', function() {

  //beforeEach(module('registrationApp.regController'));


    it('Controller should defined', inject(function($controller) {
      //spec body
      var regController = $controller('regController');
      expect(regController).toBeDefined();
    }));

});