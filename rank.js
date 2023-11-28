var ranklist=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

class Rank{
    constructor(){
        this.init();
    }
    init(){
        this.dom = document.createElement("table");
        document.getElementById("rank").appendChild(this.dom);

        for(let i=0;i<3;i++){
            let th=document.createElement("th");
            switch(i){
                case 0:
                    th.textContent="index";
                    break;
                case 1:
                    th.textContent="level";
                    break;
                case 2:
                    th.textContent="score";
                    break;
            }
            this.dom.appendChild(th);
        }

        for (let i = 0; i < 10; i++) {
            let tr = document.createElement("tr");
            this.dom.appendChild(tr);
            for (let j = 0; j < 3; j++) {
              let td = document.createElement("td");
              tr.appendChild(td);
            }
        }
    }
    update(){
        ranklist[round-1][0]=round;
        ranklist[round-1][1]=user.level;
        ranklist[round-1][2]=score;
    }
    render(){
        for(let i=0;i<round;i++){
            let tr=this.dom.getElementsByTagName("tr")[i];
            for(let j=0;j<3;j++){
                let td=tr.getElementsByTagName("td")[j];
                td.textContent=ranklist[i][j];
                console.log(ranklist[i][j]);
            }
        }
        console.log("ranklist render")
    }
}