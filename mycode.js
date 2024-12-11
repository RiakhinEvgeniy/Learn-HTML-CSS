function determineSeason(month) {
    let season;
    switch (month) {
        case 1:
        case 2:
        case 12:
            season = 'зима';
            break;

        case 3:
        case 4:
        case 5:
            season = 'весна';
            break;
        
        case 6:
        case 7:
        case 8:
            season = 'лето';
            break;
        
        case 9:
        case 10:
        case 11:
            season = 'осень';
            break;

        default: season = 'Uncorrect enter month';
    }

    return season;
}

console.log(determineSeason(7));