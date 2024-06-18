const { Builder, By , util } = require("selenium-webdriver");

const assert = require("assert");

async function calciTest() {

  // launch the browser

  let driver = await new Builder().forBrowser("chrome").build();

  try {

     await driver.get("file:///home/mvsr/148/index.html");
     await driver.sleep(2000);

 await driver.findElement(By.id("5")).click();
 await driver.findElement(By.id("add")).click();
 await driver.findElement(By.id("8")).click();
 await driver.findElement(By.id("equ")).click();
 await driver.sleep(2000);
 
 const value = await driver.findElement(By.name("t1")).getAttribute("value");
 
  console.log(" answer is " + value);
 
 await driver.sleep(2000);
 
 assert.equal(value,'13');

  console.log(" Addition success");
  
 await driver.findElement(By.id("c")).click();
 await driver.findElement(By.id("5")).click();
 await driver.findElement(By.id("sub")).click();
 await driver.findElement(By.id("2")).click();
 await driver.findElement(By.id("equ")).click();
 await driver.sleep(2000);
     
  const v1 = await driver.findElement(By.name("t1")).getAttribute("value");
 
  console.log(" answer is " + v1);
 
 await driver.sleep(2000);
 
 assert.equal(v1,'3');

  console.log(" Subtraction success");
  
  
  await driver.findElement(By.id("c")).click();
 await driver.findElement(By.id("5")).click();
 await driver.findElement(By.id("mul")).click();
 await driver.findElement(By.id("2")).click();
 await driver.findElement(By.id("equ")).click();
 await driver.sleep(2000);
     
  const v2 = await driver.findElement(By.name("t1")).getAttribute("value");
 
  console.log(" answer is " + v2);
 
 await driver.sleep(2000);
 
 assert.equal(v2,'10');

  console.log(" Multiplication success");
  
  await driver.findElement(By.id("c")).click();
 await driver.findElement(By.id("6")).click();
 await driver.findElement(By.id("div")).click();
 await driver.findElement(By.id("2")).click();
 await driver.findElement(By.id("equ")).click();
 await driver.sleep(2000);
     
  const v3 = await driver.findElement(By.name("t1")).getAttribute("value");
 
  console.log(" answer is " + v3);
 
 await driver.sleep(2000);
 
 assert.equal(v3,'3');

  console.log(" Division success");
  
  
  } finally {

    await driver.quit();

  }

}

calciTest();
