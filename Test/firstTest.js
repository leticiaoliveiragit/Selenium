const  {Builder, By, Key} = require ("selenium-webdriver");
var should = require ("chai").should();



//Bloco Describe
describe("Adicionar tarefas", function() {
    //Bloco it
    it("Adicionou uma tarefa com sucesso à aplicação", async function(){
        // Abrir o navegador
let driver = await new Builder().forBrowser("firefox").build();

//Navegar até o site
await driver.get("https://herziopinto.github.io/lista-de-tarefas/");

//10 itens na lista de tarefas
await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Aprender Cypress", Key.RETURN);


//Assertion  Selenium
let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){
    return value
});
seleniumText.should.equal("Aprender Selenium")


//Assertion Cypress
let cypressText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[2]/label")).getText().then(function(value){
    return value
});
cypressText.should.equal("Aprender Cypress")

//Fechar o navegador
await driver.quit();

    });
});









