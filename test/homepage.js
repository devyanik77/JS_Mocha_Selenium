const homepage=require('../pageobjects/homepage');

describe('This is the describe block',function(){
this.timeout(50000);
this.beforeEach(function(){
    //action performed before test
});

this.afterEach(function(){
    //action performed after test
});

it('POM Test',function(){
//Entern test steps
var baseurl='https://www.google.com/';
homepage.go_to_url(baseurl);
homepage.enter_serach('QA undergrount tutorial for beginers');

})
})