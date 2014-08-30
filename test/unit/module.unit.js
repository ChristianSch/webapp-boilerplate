'use strict';


describe("Testing Modules", function() {
    describe("App", function() {

        var module;
        before(function() {
            module = angular.module("myApp");
        });

        it("should be registered", function() {
            expect(module).not.to.equal(null);
        });

        describe("Dependencies:", function() {

            var deps;
            var hasModule = function(m) {
                return deps.indexOf(m) >= 0;
            };

            before(function() {
                deps = module.value('myApp').requires;
            });

            it("should have myApp.controllers as a dependency", function() {
                expect(hasModule('myApp.controllers')).to.equal(true);
            });

            it("should have myApp.directives as a dependency", function() {
                expect(hasModule('myApp.directives')).to.equal(true);
            });

            it("should have myApp.filters as a dependency", function() {
                expect(hasModule('myApp.filters')).to.equal(true);
            });

            it("should have myApp.services as a dependency", function() {
                expect(hasModule('myApp.services')).to.equal(true);
            });

            it("should have myApp.constants as a dependency", function() {
                expect(hasModule('myApp.constants')).to.equal(true);
            });
        });
    });
});