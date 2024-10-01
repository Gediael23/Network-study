const craftingCompleteWait = 2000;
const combiningMaterialsWait = 1000;
const smeltingIronBarsWait = 500;
const shapingIronWait = 1500;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function logStep(message) {
    console.log(message);
    return Promise.resolve();
}

console.log('Firing up the forge...');

sleep(smeltingIronBarsWait)
    .then(() => logStep('Smelting Iron Bars...'))
    .then(() => sleep(1100))
    .then(() => logStep('Shaping Iron...'))
    .then(() => sleep(1100))
    .then(() => logStep('Combining Materials...'))
    .then(() => sleep(1100))
    .then(() => logStep('Iron Longsword Complete!'));