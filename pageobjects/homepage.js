const{Builder, By, Key, until}=require('selenium-webdriver');
var TestBase =require('./testbase');
var webdriver=require('selenium-webdriver');

class HomePage extends TestBase{
enter_serach(searchText){
    driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
    driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
}

}
module.exports=new HomePage();