class DataFormat {
    static toDisplay(dt){
        let dataArray = dt.split('-');
        return `${dataArray[2]}-${dataArray[1]}-${dataArray[0]}`
    }
}