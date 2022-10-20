export class Student {
    name:string;
    group:string;
    scoreHK1:number;
    scoreHK2:number;

    constructor(name:string,group:string,scoreHK1:number,scoreHK2:number,) {
        this.name=name;
        this.group=group;
        this.scoreHK1=scoreHK1;
        this.scoreHK2=scoreHK2;

    }
    getname():string{
        return this.name;
    }
    getgroup(): string {
        return this.group;
    }
    getscoreHK1(): number {
        return this.scoreHK1;
    }
    getscoreHK2():number {
        return this.scoreHK2;
    }
    setname(name:string):void {
        this.name=name;
    };
    setgroup(group:string):void{
        this.group=group;
    }
    setscoreHK1(scoreHK1:number):void{
        this.scoreHK1=scoreHK1;
    }
    setscoreHK2(scoreHK2:number):void{
        this.scoreHK2=scoreHK2;
    }
    getDTB(): number{
        return (this.scoreHK1+ this.scoreHK2)/2;
    }

}