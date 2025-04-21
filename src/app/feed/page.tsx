// feed page

import styles from "./feed.module.css";
import NavBar from "../components/NavBar";
import React from "react";

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
    content: "i dont really have anything to say, just felt like existing here for a second",
    date: "Apr 18, 2025",
    nick: "thethinker",
    id: "t2wqx-mk45n"
  },
  {
    title: "Dream Log 04.18.25",
    content: "I was riding a bike through the clouds, racing a bird that sounded like it was beatboxing. Woke up and my legs hurt.",
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
        <h1 className={styles.latest}> #main </h1>
        {shrugs.map((shrug, index) => (
          <article className={styles.shrug} key={index}>
            <h2 className={styles.title}>{shrug.title}</h2>
            <div className={styles.description}>
              {shrug.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            {shrug.img ? <img src= {shrug.img}></img>: <></>}
            </div>
            <p className={styles.metadata}> {shrug.date} · {shrug.nick} </p>
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