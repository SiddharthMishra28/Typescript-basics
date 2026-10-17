import { Student } from './Student';
import { dirname } from 'node:path';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

export class StudentService {

    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    // Ensures that the file exists and is initialized with an empty array if it doesn't exist
    async ensureFile(): Promise<void> {
        await mkdir(dirname(this.filePath), { recursive: true });

        try {
            await readFile(this.filePath, 'utf-8');
        }catch(error) {
            await writeFile(this.filePath, '[]', 'utf-8');
        }
        await writeFile(this.filePath, '[]', 'utf-8');
    }

    async getAllStudents(): Promise<Student[]> {
        await this.ensureFile();

        const content = await readFile(this.filePath, 'utf-8');
        const data:any = JSON.parse(content);
        if(!Array.isArray(data)) {
            throw new Error('Invalid data format');
        }
        return data as Student[];
    }

    async addStudent(): Promise<void> {
        const students = await this.getAllStudents();

        const student: Student = {
            id: 1,
            name: "Santosh",
            age: 20,
            grade: "A",
            email: "santosh@example.com",
            phone: "123-456-7890"
        }
        students.push(student);
        await writeFile(this.filePath, JSON.stringify(students, null, 2), 'utf-8');
        console.log("Student added successfully");
    }

}

let myService = new StudentService('../data/students.json');
myService.addStudent();
