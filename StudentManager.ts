import {Student} from "./Student";


export class StudentManager extends Student {
    studentlist: Student[] = [];
    size: number = 0;

    constructor(name:string,group:string,scoreHK1:number,scorehk2:number,size:number) {
        super(name,group,scoreHK1,scorehk2);
        this.size=size

    }
    add(name: string, group: string, scoreHK1: number, scoreHK2: number): void {
        this.studentlist.push(new Student(name, group, scoreHK1, scoreHK2));
        this.size++
    }


    showList(): Student[] {
        return this.studentlist;
    }


    totalStudent() {
        return this.studentlist.length;
    }


    showRank() {
        for (let i = 0; i < this.size - 1; i++) {
            let min: Student = this.studentlist[i];
            let minIndex: number = i
            for (let j = i + 1; j < this.size; j++) {
                if (min.getDTB() < this.studentlist[j].getDTB()) {
                    min = this.studentlist[j];
                    minIndex = j
                }
            }
            if (minIndex !== i) {
                this.studentlist[minIndex] = this.studentlist[i];
                this.studentlist[i] = min
            }
        }
        return this.studentlist;
    }


    shareByName(name: string): Student[] {
        let names: Student[] = []
        for (let i = 0; i < this.studentlist.length; i++) {
            if (name == this.studentlist[i].name) {
                names.push(this.studentlist[i])
            }
        }
        return names;
    }


    shareByGroup(group: string): Student[] {
        let groups: Student[] = []
        for (let i = 0; i < this.studentlist.length; i++) {
            if (group == this.studentlist[i].group) {
                groups.push(this.studentlist[i])
            }
        }
        return groups;
    }


}