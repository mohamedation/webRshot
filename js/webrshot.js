var site, range, index, last;
var randomRange = 7;
var siteList = [
    "https://jayweeks.com/medusae/",
    "https://www.yuichiroharai.com/wgl/15_one_million_particles/",
    "https://fractalfantasy.net/#pointclouds",
    "http://www.fallingfalling.com/",
    "http://www.bizbrain.org/coffee/",
    "https://odysee.com/",
    "https://asciitube.bgreco.net/",
    "https://crossfade.io/",
    "https://everynoise.com/engenremap.html",
    "http://superlooper.universlabs.co.uk/",
    "http://asoftmurmur.com/",
    "http://www.whitevinyldesign.com/solarbeat/",
    "http://typedrummer.com/",
    "http://virtualpiano.net/",
    "https://www.incredibox.com/demo",
    "http://www.typatone.com/",
    "http://sampulator.com/",
    "http://disco.io/",
    "https://apps.musedlab.org/groovepizza/",
    "http://musicforprogramming.net/",
    "http://somafm.com/defcon/songhistory.html",
    "http://dinahmoelabs.com/theme",
    "http://textfiles.com/history/",
    "https://www.nautiluslive.org/",
    "https://video.ibm.com/channel/iss-hdev-payload",
    "https://www.tiki-toki.com/timeline/entry/5395/A-Marvel-Cinematic-Universe-Timeline",
    "https://www.radio-mb.com/",
    "http://www.stefanom.org/spc/game.php",
    "https://patatap.com/",
    "https://www.jurassicsystems.com/",
    "http://oos.moxiecode.com/js_webgl/xwing/index.html",
    "https://yvoschaap.com/chainrxn/",
    "http://www.flaminglunchbox.net/curvy",
    "https://game.chronodivide.com/",
    "http://xproger.info/projects/OpenLara/",
    "https://bruh.io/",
    "https://compressor.io/",
    "https://photomosh.com/",
    "https://beta.speedtest.net/",
    "https://walloftext.co/",
    "https://www.ted.com/",
    "https://www.wikihow.com/Main-Page",
    "https://readymag.com/shuffle/ui-symbols/",
    "https://www.quantamagazine.org/frontier-of-physics-interactive-map-20150803",
    "https://animagraffs.com/",
    "https://starwarsgalaxy.co/",
    "https://www.fakenamegenerator.com/",
    "https://www.expresso-app.org/",
    "https://www.keybr.com/",
    "https://neal.fun/deep-sea/",
    "https://apps.npr.org/lookatthis/posts/colors/",
    "https://www.wisconsincheese.com/recipes",
    "https://hackertyper.net/",
    "https://torflow.uncharted.software/",
    "https://www.oldmapsonline.org/",
    "https://thetruesize.com/",
    "https://www.ventusky.com/",
    "https://cybermap.kaspersky.com/",
    "https://www.fireeye.com/cyber-map/threat-map.html",
    "https://threatmap.checkpoint.com/",
    "https://www.ocearch.org/tracker/",
    "https://jacksonpollock.org/",
    "https://planefinder.net/",
    "https://antmaps.org/",
    "https://www.strava.com/heatmap",
    "https://www.grimlondon.com/",
    "https://skyvector.com/",
    "https://openseadragon.github.io/openseadragonizer/?img=https://i.redd.it/siormkhv2zi01.jpg",
    "https://listeningtogether.atspotify.com/",
    "https://www.montereybayaquarium.org/animals/live-cams/open-sea-cam",
    "https://www.colourlovers.com/",
    "https://naturalhistory.si.edu/visit/virtual-tour",
    "https://linxspiration.com/",
    "https://www.last.fm/music/Deepak+Ram",
    "https://tabletopwhale.com/",
    "https://archive.fisheries.noaa.gov/afsc/News/Alaska-Marine-Mammal-Acoustic-Studies/index.html",
    "https://trendshelp.com/",
    "https://www.photopea.com/",
    "https://eyes.nasa.gov/dsn/dsn.html",
    "https://eyes.nasa.gov/apps/orrery/#/home",
    "https://eyes.nasa.gov/apps/earth/#/",
    "https://eyes.nasa.gov/apps/exo/",
    "https://eyes.nasa.gov/apps/mars2020/#/home",
    "https://wttr.in/",
    "https://dotpiano.com/",
    "https://pixelcraft.web.app/",
    "https://squoosh.app/",
    "https://flowchart.fun/",
    "https://threatmap.checkpoint.com/",
    "https://mycolor.space/",
    "https://www.airtightinteractive.com/projects/synthcube/",
    "http://www.flashbynight.com/drench/",
    "https://codepen.io/akm2/full/rHIsa",
    "https://www.howstuffworks.com/",
    "https://michaelbach.de/ot/",
    "https://nobody.live/",
    "https://alexanderperrin.com.au/paper/shorttrip",
    "https://iss-sim.spacex.com/",
    "https://orbity.io/game.php",
    "https://moon.nasa.gov/",
    "https://jummbus.bitbucket.io/",
    "https://webamp.org/",
    "https://www.4000saturdays.com/life_calc/proactive_calc/",
    "https://bongo.cat/",
    "https://starwarsintrocreator.kassellabs.io/",
    "http://www.alcula.com/soroban.php",
    "https://www.mathematik.uni-marburg.de/~thormae/lectures/ti1/code/napierbones/napierbones.html",
    "http://www.antiquark.com/sliderule/sim/n909es/virtual-n909-es.html",
    "https://www.sliderules.org/react/pickett_n600.html",
    "https://www.sliderules.org/react/aristo_0970_multilog.html",
    "https://www.sliderules.org/react/FlyingFish1003.html",
    "https://www.masswerk.at/card-readpunch/",
    "https://www.pcjs.org/",
    "https://www.putyouinabettermood.com/",
    "https://www.my90stv.com/",
    "http://thepatternlibrary.com/",
    "https://vincemckelvie.com/gradientforest",
    "https://morsecode.world/international/translator.html",
    "http://conferencecall.biz/",
    "https://www.passweird.com/",
    "http://www.colourmagician.com/",
    "http://www.raptjs.com/play#/rapt/Intro_1/",
    "https://superformula.club/",
    "https://www.templatemaker.nl/en/",
    "https://fio4ri.github.io/FavoritePokemon/",
    "http://ww3.safestyle-windows.co.uk/the-secret-door/",
    "https://www.montereybayaquarium.org/animals/live-cams/open-sea-cam/",
    "https://agar.io/",
    "http://www.yournameingum.com/",
    "http://randomcolour.com/",
    "https://randomsong.net/",
    "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
    "https://security-expert-name.com/",
    "https://bouncingdvdlogo.com/",
    





];

var sites;


function webrshot() {
    sites = siteList.slice();

    if (localStorage["currentSiteList"]) {
        // They have storage, filter out any not in the base list, that could be spam now
        var currentSites = JSON.parse(localStorage["currentSiteList"]);
        var filteredSites = currentSites.filter(
            (site) => siteList.indexOf(site) !== -1
        );
        if (filteredSites.length > 0) {
            sites = filteredSites
        }
    }


    range = randomRange > sites.length ? sites.length : randomRange;
    index = Math.floor(Math.random() * range);
    console.log(sites);
    site = sites[index];
    sites.splice(index, 1);
    console.log(sites);
    window.open(site);


    if (sites.length == 0) {
        sites = sitesList.slice()
    }

    localStorage["currentSiteList"] = JSON.stringify(sites);
}
