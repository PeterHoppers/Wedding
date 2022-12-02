import { BioDisplay } from "../components/BioDisplay";

class Bio {
    constructor(name, imgUrl, subtitle, description, peterSide) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.subtitle = subtitle;
        this.description = description;
        this.peterSide = peterSide;
    }
}

//setting up the bios
let bioArray = [];

bioArray.push(new Bio(
    "Katie Klahr",
    "katie.jpg",
    "Maid of Honor",
    "Katie and Madelyn met back in middle school. They swam synchronized swimming together and even graduated high school together. After that they headed to different colleges but remained the best of friends!",
    false
));

bioArray.push(new Bio(
    "Chris Blanchard",
    "chris.jpg",
    "Best Man",
    "Chris became Peter's radio cohost early on in college and have been friends ever since. He is frequently found playing board games or causing chaos with Peter online. Chris also doesn't like to talk about himself so this will suffice.",
    true
));

bioArray.push(new Bio(
    "Claire Evensen",
    "claire.jpg",
    "Maid of Honor",
    "Claire is very grateful that she and Madelyn are the same type of nerd, so they ended up in both French and band together as high school freshmen. Clarinet and verb conjugations paved the way for a ten-years-and-counting friendship that means the world to her. She's currently in grad school at UC Berkeley, and can't wait to make the trip back to the Midwest to celebrate this new chapter for Madelyn and Peter!",
    false
));

bioArray.push(new Bio(
    "Sam Blanchard",
    "sam.jpg",
    "Best Lady",
    "Sam has known Peter since Freshman year of college. Board games and the radio station is what sparked the flame of this friendship; Peter's quirky nature and kind soul was what kept Sam around. Peter is one of Sam's most treasured friendships. When Maddy was brought into the picture, Sam not only gained another close friend, but was able to watch a beautiful  relationship grow.",
    true
));

bioArray.push(new Bio(
    "Sirena Pritchard",
    "sirena.jpg",
    "",
    "Sirena is a close friend of both Maddy and Peter. Sirena and Maddy have been best friends since their first day at Carroll University and since then bonded over their interest in Studio Ghibli, classical music, and anime! Sirena and Peter often talk about the most current rhythm games, board games, and video games! In Sirena's freetime, she enjoys watching horror movies, drawing, and hiking.",
    false
));

bioArray.push(new Bio(
    "Christine Hoppe",
    "christine.jpg",
    "",
    "Due to being the older sister, Christine has had to deal with Peter all his life. It started off with her hiding his toys, but as they got older, she started to enjoy having her brother around while they explored the golf course, practiced soccer in their backyard, and jammed out to songs in her car. While they don't see each other as much as they used to with her living in Las Vegas, whenever they are together, fun times are had.",
    true
));

bioArray.push(new Bio(
    "Miranda Peterson-Webber",
    "miranda.jpg",
    "",
    "Miranda has known Maddy since they were young girls at their church. She and Maddy have spent countless hours laughing, crying, and growing up together. Miranda feels lucky enough to call Maddy her friend throughout these many years. She is honored to stand by her side while she marries the love of her life! Congrats Maddy and Peter 🎊.",
    false
));

bioArray.push(new Bio(
    "Chase Uden",
    "chase.jpg",
    "",
    "One could call Chase many things: kind-hearted, quick-witted, welcoming, but being concise would not be one of them. Despite that, this bio will simply state, for the quiet awkward teen that was Peter, he always felt appreciated around Chase, and Chase always felt heard, building a friendship that has lasted longer than half their lives (which makes them feel old!).",
    true
));

bioArray.push(new Bio(
    "Maddie Schmidbauer",
    "maddie.jpg",
    "",
    "Maddie became good friends with Maddy during freshman year at Carroll University, building lasting friendships and memories together. Maddie has since traveled the country to pursue her dream of becoming a marine biologist. She obtained a B.S. in Marine Biology at Hawaii Pacific University, worked as a marine science educator for two years in California, and is now attending graduate school at the University of Miami.",
    false
));

bioArray.push(new Bio(
    "Ryan Liebherr",
    "ryan.jpg",
    "",
    "Ryan met Peter while they both were attending Carroll University, but it wasn't until they both graduated that they became really good friends. Ryan really enjoys baseball, music, and both board and video games. He and Peter have spent many hours cultivating a farm in Stardew Valley, adventuring the world as Source Hunters in Divinity Original Sin, and deciding the fate of their nation in The King's Dilemma. He is very excited to be a part of Peter and Maddy's wedding day!",
    true
));

export const Bios = (props) => {
    return (
        <main>
            <h1>Wedding Party</h1>       
            <section className="bio-displays">
                {bioArray && bioArray.map(bio =>
                    <BioDisplay
                        key={bio.name}
                        name={bio.name}
                        subtitle={bio.subtitle}
                        imgUrl={bio.imgUrl}
                        description={bio.description}
                        peterSide={bio.peterSide}
                    />
                )}
            </section>
        </main>
    );
}