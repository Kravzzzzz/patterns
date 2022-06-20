class OldCalc {
    operations(t1, t2, operations) {
        switch (operations){
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }  
    }
}

class NewCalc {
    add(t1, t2){return t1 + t2}

    sub (t1, t2) {return t1 -t2}
}

class CalcAdapter {     //В адаптере добавляем новый интерфейс не удаляя старый
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, operations) {
        switch (operations){
            case 'add': return this.add(t1, t2)
            case 'sub': return this.sub(t1, t2)
            default: return NaN
        }  
    }
}