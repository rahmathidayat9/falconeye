import readline from 'readline'
import open from 'open'
import chalk from 'chalk'

const platformList = [
    "https://github.com/",
    "https://www.linkedin.com/in/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://twitter.com/",
    "https://disqus.com/by/",
    "https://www.freelancer.com/u/",
    "https://www.duolingo.com/profile/",
    "https://osu.ppy.sh/users/",
    "https://www.tiktok.com/@"
]

let urlToOpen = '';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let myData = ""
rl.question(chalk.blue('Whats name you search ? : '), (name) => {
    let number = 0;

    platformList.forEach((value, index) => {
        number += 1

        console.log(`${number}.${value}${name}`);
    })

    rl.question(chalk.blue('where number you want to be ? : '), (data) => {
        if (data <= platformList.length) {
            urlToOpen += platformList[data-=1]+name

            open(urlToOpen).then(() => {
                console.log(`Opened ${urlToOpen} in the default web browser.`);
            }).catch((error) => {
                console.log(error);
            })   
        } else {
            console.log(`Choose Number properly!`);
        }
 
        rl.close()
    })
})