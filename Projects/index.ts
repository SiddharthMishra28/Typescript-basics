import { createInterface } from 'node:readline/promises';
import { StudentService } from './StudentService';

let isRunning = true;
const store = new StudentService('data/students.json');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function ask(question: string): Promise<string> {
    const answer = await rl.question(question);
    return answer.trim();
}

function showMenu(): void {
    console.log(`
    ======== Student Manager =========
    1. Add student
    2. Delete student
    3. Update student
    4. Read Student by ID
    5. Show all students    
    6. Exit
    `);
}

async function addStudent(): Promise<void> {
    console.log('Adding a new student...');
}

async function deleteStudent(): Promise<void> {
    console.log('Deleting a student...');
}

async function updateStudent(): Promise<void> {
    console.log('Updating a student...');
}

async function readStudentById(): Promise<void> {
    console.log('Reading a student by ID...');
}

async function showAllStudents(): Promise<void> {
    console.log('Showing all students...');
}

async function main(): Promise<void> {
    while (isRunning) {
        showMenu();
        const choice = await ask('Choose an option from (1-5): ');
        try{
            switch (choice) {
                case '1':
                    await addStudent();
                    break;
                case '2':
                    await deleteStudent();
                    break;
                case '3':
                    await updateStudent();
                    break;
                case '4':
                    await readStudentById();
                    break;
                case '5':
                    await showAllStudents();
                    break;
                case '6':
                    isRunning = false;
                    console.log('Bye...')
                    break;
                default:
                    console.log('Invalid choice. Please select a number between 1 and 5.');
                    break;
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
}

main().catch(error => {
    console.error('An error occurred in the main function:', error);
});




