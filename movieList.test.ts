import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5502/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('deletes movie', async () => {
    let input = await driver.findElement(By.css("input"))
    await input.sendKeys("avengers\n")
    // await driver.sleep(2000)
    let deleteBtn = await driver.findElement(By.id("avengers"))
    deleteBtn.click()
    // await driver.sleep(2000)
    // let message = await driver.findElement(By.className("hide"))
    // expect(message).toBe("avengers deleted!")

    let messageText = await driver.findElement(By.css("#message")).getText()
expect("avengers deleted!").toBe(messageText)
})

// let messageText = await driver.findElement(By.css("#message")).getText()
// expect("avengers deleted!").toEqual(messageText)