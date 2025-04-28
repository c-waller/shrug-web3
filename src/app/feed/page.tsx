// feed page

import styles from "./feed.module.css";
import MainTopicTitle from "../components/MainTopicTitle";

// these are examples!!!!!!!!!
const shrugs = [
  {
    title: "finals week soon",
    content: "its over for me",
    nick: "someone",
    date: "3 hours ago",
    id: "q7fkp-hu24a"
  },
  {
    title: "Mind empty",
    content: "No thoughts.",
    date: "6 hours ago",
    nick: "someone",
    id: "x3nvt-kg91z"
  },
  {
    title: "A thought",
    content: "Does elon musk tell people he's african american?",
    date: "9 hours ago",
    nick: "eli",
    id: "m8czd-wl56e"
  },
  {
    title: "Note To Self",
    content: "Drink some water. Stand up. Breathe. You're doing fine.",
    date: "14 hours ago",
    nick: "someone",
    id: "a1xrf-vn83y"
  },
  {
    title: "Bored",
    content: `console.log("maybe this will work");\n// it didn't`,
    date: "15 hours ago",
    nick: "x",
    id: "z9hdp-rm70q"
  },
  {
    title: "Observation",
    content: "People who walk fast in airports probably run entire empires",
    date: "2 hours ago",
    nick: "someone",
    id: "k4tjm-uz33c"
  },
  {
    title: "I Miss Old Youtube",
    content: "bring back the weird stuff from 2009!!! i wanna see a potato singing again!!",
    date: "22 hours ago",
    nick: "someone",
    id: "v6gsl-yt28b"
  },
  {
    title: "It's never too late",
    content: "There's a famous Japanese proverb that says, \"if you find yourself on the wrong train, get off at the next station.\" It doesn't matter if you have to pay a high cost for a new ticket. It doesn't matter if you're embarrassed to have made a mistake. Every price you pay to fix the situation is worth not going the wrong way, and starting to go the right way. Not having the courage to get off means going to the wrong destination. This, of course, isn't about trains. It's about life.",
    date: "1 hour ago",
    nick: "thethinker",
    id: "t2wqx-mk45n"
  },
  {
    title: "Dream log",
    content: "I was riding a bike through the clouds, racing a bird that sounded like it was beatboxing. woke up and my legs hurt.",
    date: "8 hours ago",
    nick: "someone",
    id: "r5bze-pc60v"
  },
  {
    title: "I still haven't found an internship",
    content: "am i cooked?",
    date: "12 hours ago",
    nick: "someone",
    id: "n0yjd-xq17s"
  }
];

export default function Feed() 
{
  return (
    <div className={styles.container}>
      <main className={styles.main}> 
        <MainTopicTitle />
        {shrugs.map((shrug, index) => (
          <article className={styles.shrug} key={index}>
            <h2 className={styles.title}>{shrug.title}</h2>
            <div className={styles.description}>
              {shrug.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
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