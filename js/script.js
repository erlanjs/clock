function updateClock(){
    let now = new Date();
    let dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";



        if (hou == 0){
            hou = 12
        }
        if (hou > 12){
            hou = hou - 12
            pe = "PM";
        }

        Number.prototype.pad = function (digits){
            for (let n = this.toString() ; n.length < digits ; n = 0 + n);
            return n;
        }

        let months = ["Январь", "Февраль", "Март", "Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",];
        let week = ["Понидельник","Вторник","Среда","Четверг","Пятница","Субота","Воскресеня",];
        let ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"];
        let values = [week[dname],months[mo],dnum,yr,hou,min,sec,pe];
        for (let i = 0 ; i < ids.length;i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];



}

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1)
}