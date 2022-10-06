function changeTop() {
    const Tops =
        [
            "Aatrox", "Akali", "Camille", "Cassiopeia", "Cho'Gath", "Darius", "Dr. Mundo", "Fiora", "Gangplank", "Garen", "Gnar",
            "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Jax", "Jayce", "Karma", "Kayle", "Kennen", "Kled", "Lillia", "Lucian",
            "Malphite", "Maokai", "Mordekaiser", "Nasus", "Nocturne", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Rengar",
            "Riven", "Rumble", "Ryze", "Sett", "Shen", "Singed", "Sion", "Swain", "Sylas", "Tahm Kench", "Teemo", "Tryndamere", "Urgot",
            "Vayne", "Vladimir", "Volibear", "Wukong", "Yasuo", "Yorick", "Zac"
        ];
    let Top = document.getElementById("Top");
    let length = Tops.length;
    let randTop = Math.floor(Math.random() * length);
    Top.innerText = Tops[randTop];
}

function changeMid() {
    const Mids =
        [
            "Aatrox", "Ahri", "Akali", "Akshan", "Anivia", "Annie", "Aurelion Sol", "Azir", "Camille", "Cassiopeia", "Cho'Gath",
            "Corki", "Diana", "Ekko", "Fizz", "Galio", "Garen", "Gwen", "Heimerdinger", "Irelia", "Ivern", "Jayce", "Kassadin", "Katarina",
            "LeBlanc", "Lillia", "Lissandra", "Lucian", "Lux", "Malphite", "Malzahar", "Neeko", "Nocturne", "Nunu", "Orianna", "Pantheon", "Pyke",
            "Qiyana", "Renekton", "Rumble", "Ryze", "Swain", "Sylas", "Syndra", "Taliyah", "Talon", "Twisted Fate", "Veigar", "Vel'Koz", "Vex", "Viktor",
            "Vladamir", "Xerath", "Yasuo", "Zed", "Ziggs", "Zilean", "Zoe"
        ];
    let Mid = document.getElementById("Mid");
    let length = Mids.length;
    let randMid = Math.floor(Math.random() * length);
    Mid.innerText = Mids[randMid];
}

function changeBot() {
    const Bots =
        [
            "Aphelios", "Ashe", "Caitlyn", "Cassiopeia", "Draven", "Ezreal", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karthus", "Kog'Ma", "Lucian", "Miss Fortune",
            "Nilah", "Senna", "Seraphine", "Sivir", "Swain", "Tahm Kench", "Tristana", "Twitch", "Varus", "Vayne", "Xayah", "Yasuo", "Zeri", "Ziggs"
        ];
    let Bot = document.getElementById("Bot");
    let length = Bots.length;
    let randBot = Math.floor(Math.random() * length);
    Bot.innerText = Bots[randBot];
}

function changeSupport() {
    const Supports =
        [
            "Alistar", "Amumu", "Anivia", "Ashe", "Bard", "Blitzcrank", "Brand", "Braum", "Fiddlesticks", "Galio", "Heimerdinger", "Ivern", "Janna",
            "Karma", "Leona", "Lulu", "Lux", "Malphite", "Maokai", "Morgana", "Nami", "Nautilus", "Pantheon", "Poppy", "Pyke", "Rakan", "Renata Glasc",
            "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taric", "Thresh", "Vel'Koz", "Xerath",
            "Yuumi", "Zac", "Zilean", "Zoe", "Zyra"
        ];
    let Support = document.getElementById("Support");
    let length = Supports.length;
    let randSupport = Math.floor(Math.random() * length);
    Support.innerText = Supports[randSupport];
}

function changeJungler() {
    const Junglers =
        [
            "Amumu", "Bel'Veth", "Diana", "Dr. Mundo", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Gragas", "Graves", "Hecarim", "Ivern", "Jarvan IV", "Jax",
            "Karthus", "Kayn", "Kha'Zix", "Kindred", "Kled", "Lee Sin", "Lillia", "Master Yi", "Nidalee", "Nocturne", "Nunu", "Olaf", "Poppy", "Rammus",
            "Rek'Sai", "Rengar", "Sejuani", "Sett", "Shaco", "Shyvana", "Skarner", "Taliyah", "Trundle", "Udyr", "Vi", "Viego", "Volibear", "Warwick", "Wukong",
            "Xin Zhao", "Zac"
        ];
    let Jungler = document.getElementById("Jungler");
    let length = Junglers.length;
    let randJungler = Math.floor(Math.random() * length);
    Jungler.innerText = Junglers[randJungler];
}