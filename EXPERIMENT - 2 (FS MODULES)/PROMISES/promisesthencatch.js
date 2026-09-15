const fs = require("fs").promises;

async function writeFile() {
    try{
        await fs.writeFile("promises.txt","Hello Students!");
        console.log("File created and data written successfully");
    }catch(error){
        console.log('Error: ',error);
    }
}

writeFile();

async function readFile() {
    try{
        const data = await fs.readFile("promises.txt","utf8");
        console.log("File Content : ");
        console.log(data);
    }catch(error){
        console.log('Error: ',error);
    }
}

readFile();

async function renameFile() {
    try{
        await fs.rename("promises.txt","promises_new.txt");
        console.log("File renamed successfully");
    }catch(error){
        console.log('Error: ',error);
    }
}

renameFile();

async function appendFile() {
    try{
        await fs.appendFile("promises.txt","\n Welcome to FSD training");
        console.log("File appended successfully");
    }catch(error){
        console.log('Error: ',error);
    }
}

appendFile();

