'use server'

import { readFile, writeFile } from "fs/promises"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


type User = {
    id: string,
    firstName: string,
    lastName: string
}

export const createUser = async (formData: FormData) => {

    const rawData: Record <string, string | number | File> = {}

    formData.forEach((value, key) => rawData[key] = value )

    const { firstName, lastName } = rawData

    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        throw new Error('First name and last name must be strings.');
    }

    const newUser:User = {id:Date.now().toString(), firstName, lastName}

    try {
        await saveUser(newUser)
        //some logic here
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
    }
    
    revalidatePath('/actions')

    // ? BEFORE USING THIS, MAKE SURE IT WILL SHOW THE LIST ON THAT REDIRECT
    // redirect('/')
}


export const fetchUsers = async(): Promise<User[]>  => {
    const result = await readFile('users.json', {encoding:'utf-8'})
    const users = result ? JSON.parse(result) : [];
    return users;
}

const saveUser = async (user: User) => {
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
};



export const deleteUser = async (formData: FormData) => {
    const id = formData.get('id') as string;
    const users = await fetchUsers();
    const updatedUsers = users.filter((user: User) => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
};

export const removeUser = async (id: string, formData: FormData) => {
    const name = formData.get('name') as string;
    console.log(name);
  
    const users = await fetchUsers();
    const updatedUsers = users.filter((user) => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
};


