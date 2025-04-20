// feed page

import styles from "./feed.module.css";
import NavBar from "../components/NavBar";
import React from "react";

// examples
const shrugs = [
  {
    title: "Shrugging Through It.",
    content: "¯\\_(ツ)_/¯",
    date: "Apr 18, 2025",
    id: "q7fkp-hu24a"
  },
  {
    title: "Brain Empty",
    content: "No thoughts.",
    date: "Apr 18, 2025",
    id: "x3nvt-kg91z"
  },
  {
    title: "Late Night Ramble",
    content: `Sometimes I sit and think about how strange it is that we're just out here spinning on a rock in space, trying to make sense of everything through memes, caffeine, and random thoughts posted on the internet. This post has no real point—just wanted to test how long one could get without the site telling me to chill`,
    date: "Apr 18, 2025",
    id: "m8czd-wl56e"
  },
  {
    title: "Note To Self",
    content: "Drink some water. Stand up. Breathe. You're doing fine.",
    date: "Apr 18, 2025",
    id: "a1xrf-vn83y"
  },
  {
    title: "Code at 3AM",
    content: `console.log("maybe this will work");\n// it didn't`,
    date: "Apr 18, 2025",
    id: "z9hdp-rm70q"
  },
  {
    title: "Random Observation",
    content: "People who walk fast in airports probably run entire empires",
    date: "Apr 18, 2025",
    id: "k4tjm-uz33c"
  },
  {
    title: "I Miss Old Youtube",
    content: "bring back the weird stuff from 2009!!! i wanna see a potato singing again!!",
    date: "Apr 18, 2025",
    id: "v6gsl-yt28b"
  },
  {
    title: "Untitled",
    content: "i dont really have anything to say, just felt like existing here for a second",
    date: "Apr 18, 2025",
    id: "t2wqx-mk45n"
  },
  {
    title: "Dream Log 04.18.25",
    content: "I was riding a bike through the clouds, racing a bird that sounded like it was beatboxing. Woke up and my legs hurt.",
    date: "Apr 18, 2025",
    id: "r5bze-pc60v"
  },
  {
    title: "i still haven't found an internship",
    content: "am i cooked?",
    date: "Apr 18, 2025",
    id: "n0yjd-xq17s"
  }
];

export default function Feed() 
{
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}> 
        <h1 className={styles.latest}> #main </h1>
        {shrugs.map((shrug, index) => (
          <article className={styles.shrug} key={index}>
            <h2 className={styles.title}>{shrug.title}</h2>
            <div className={styles.description}>
              {shrug.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            {/* <img src="https://media1.tenor.com/m/aACGz-xUHLUAAAAd/drake-drizzy.gif"></img> */}
            </div>
            <p className={styles.metadata}> {shrug.date} </p>
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