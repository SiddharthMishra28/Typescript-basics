import * as fs from 'fs/promises';
import * as path from 'path';

async function readTextFile(filePath: string): Promise<void> {
    try {
        const absolutePath = path.resolve(filePath);
        
        const data = await fs.readFile(absolutePath, 'utf-8');
        console.log("================ FILE CONTAINS BELOW DATA ================");
        console.log(data);
        console.log("Number of spaces in file:", data.split(' ').length);
    }catch(error) {
        console.error("Error reading file:", error);
    }
}


const targetFile = "./information.txt";
readTextFile(targetFile);