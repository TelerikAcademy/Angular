export class UserService {
    users: any[] = [];

    getAll(): any[] {
        return this.users;
    }

    getById(id: number): any{
        return this.users[id];
    }

    add(user: any){
        this.users.push(user);
    }
}
