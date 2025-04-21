// feed page

import styles from "./feed.module.css";
import NavBar from "../components/NavBar";
import TopicTitle from "../components/TopicTitle";

// these are examples!!!!!!!!!
const shrugs = [
  {
    title: "",
    content: "",
    img: "https://media1.tenor.com/m/aACGz-xUHLUAAAAd/drake-drizzy.gif",
    nick: "someone",
    date: "Apr 18, 2025",
    id: "q7fkp-hu24a"
  },
  {
    title: "",
    content: "No thoughts.",
    date: "Apr 18, 2025",
    nick: "someone",
    id: "x3nvt-kg91z"
  },
  {
    title: "",
    content: "this website sucks",
    date: "Apr 18, 2025",
    nick: "eli",
    id: "m8czd-wl56e"
  },
  {
    title: "Note To Self",
    content: "Drink some water. Stand up. Breathe. You're doing fine.",
    date: "Apr 18, 2025",
    nick: "someone",
    id: "a1xrf-vn83y"
  },
  {
    title: "",
    content: `console.log("maybe this will work");\n// it didn't`,
    date: "Apr 18, 2025",
    nick: "x",
    id: "z9hdp-rm70q"
  },
  {
    title: "observation",
    content: "People who walk fast in airports probably run entire empires",
    date: "Apr 18, 2025",
    nick: "someone",
    id: "k4tjm-uz33c"
  },
  {
    title: "I Miss Old Youtube",
    content: "bring back the weird stuff from 2009!!! i wanna see a potato singing again!!",
    date: "Apr 18, 2025",
    nick: "someone",
    id: "v6gsl-yt28b"
  },
  {
    title: "",
    content: "There's a famous Japanese proverb that says, \"if you find yourself on the wrong train, get off at the next station.\" It doesn't matter if you have to pay a high cost for a new ticket. It doesn't matter if you're embarrassed to have made a mistake. Every price you pay to fix the situation is worth not going the wrong way, and starting to go the right way. Not having the courage to get off means going to the wrong destination. This, of course, isn't about trains. It's about life.",
    date: "Apr 18, 2025",
    nick: "thethinker",
    id: "t2wqx-mk45n"
  },
  {
    title: "",
    content: "I was riding a bike through the clouds, racing a bird that sounded like it was beatboxing. woke up and my legs hurt.",
    date: "Apr 18, 2025",
    nick: "someone",
    id: "r5bze-pc60v"
  },
  {
    title: "i still haven't found an internship",
    content: "am i cooked?",
    date: "Apr 18, 2025",
    nick: "notacsmajor",
    id: "n0yjd-xq17s"
  }
];

export default function Feed() 
{
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}> 
        <TopicTitle> #main </TopicTitle>
        {shrugs.map((shrug, index) => (
          <article className={styles.shrug} key={index}>
            <h2 className={styles.title}>{shrug.title}</h2>
            <div className={styles.description}>
              {shrug.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              {shrug.img ? <img src= {shrug.img}></img> : <></>}
            </div>
            <div className={styles.metadataContainer}>
              <p> {shrug.date} · {shrug.nick} </p>
            </div>
          </article>
        ))}
        <div className={styles.footer}>
          <p className={styles.footerText}> &lt;&lt; newer </p>
          <p className={styles.footerText}> 2/3 </p>
          <p className={styles.footerText}> older &gt;&gt; </p>
        </div>
      </main>
    </div>
  );
}