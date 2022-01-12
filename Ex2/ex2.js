const data = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },
    {
        name: "Manchester",
        points: 60,
        GD: 29
    },
    {
        name: "Aiverpool",
        points: 75,
        GD: 39
    },
]

function sorted(teamA, teamB, key, type){
    if(teamA[key] - teamB[key] > 0 || teamA[key] > teamB[key]){
        return (type == 'DESC') ? -1 : 1
    }
    else if(teamA[key] - teamB[key] < 0 || teamA[key] < teamB[key]){
        return (type == 'DESC') ? 1 : -1
    } else{
        return 0
    }
}

const newData = data.sort((teamA, teamB) => {
    const pointSorter = sorted(teamA, teamB, 'points', 'DESC');
    if(pointSorter != 0){
        return pointSorter;
    }else{
        const GDSorter = sorted(teamA, teamB, 'GD', 'ASC');
        if(GDSorter != 0){
            return GDSorter;
        }else{
            return sorted(teamA, teamB, 'name', 'ASC');
        }
    }
});

newData.map((team, rank) => {
    team.position = rank+1;
});

console.log(newData)