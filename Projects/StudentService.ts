import { mkdir, readfile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

// CAN BE KEPT INTO A SEPARATE FILE FOR BIGGER PROJECTS
export interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
}

export class StudentService {

    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    async ensureFile(): Promise<void> {
        await mkdir(dirname(this.filePath), { recursive: true });
        try {
            await readfile(this.filePath, 'utf-8');
        } catch(error) {
            throw(error);
        }

        await this.save([]);
    }

    // METHOD TO FETCH ALL STUDENT DATA
    async getAll(): Promise<Student[]> {
        await this.ensureFile();

        const content = await readfile(this.filePath, 'utf-8');
        if(content.trim() === '') {
            return [];
        }

        const data: unknown = JSON.parse(content);
        if(!Array.isArray(data)) {
            throw new Error('Invalid data format');
        }

        return data as Student[];
    }

    // METHOD TO FETCH SINGLE STUDENT BY ID
    async getById(id: number): Promise<Student> {
        const students = await this.getAll();
        return students.find(student => student.id === id);
    }

    // ADD NEW STUDENT TO DATA STORE
    async add(student: Student): Promise<void> {
        const students = await this.getAll();

        if(students.some((existing) => existing.id === student.id)) {
            throw new Error('Student with this ID already exists');
        }

        students.push(student);
        await this.save(students);
    }

    // TO WRITE DATA TO FILE
    async save(students: Student[]): Promise<void> {
        await writeFile(this.filePath, JSON.stringify(students, null, 2), 'utf-8');
    }

}