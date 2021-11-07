async function pageScroll(scrollLimit, speed) {
    return new Promise(function (resolve, reject) {
        if (document.documentElement.scrollTop <= scrollLimit) {
            setTimeout(function () {
                window.scrollBy(0, 1);
                resolve();  
            }, speed);
        }
    });
}

async function pageScrollUntil(scrollLimit, speed) {
    while(document.documentElement.scrollTop <= scrollLimit){
        await pageScroll(scrollLimit,speed);
    }
}

async function main() {
    await pageScrollUntil(5000,1);
}

console.log("Starting Process...");
main();
console.log("Ending Process...");