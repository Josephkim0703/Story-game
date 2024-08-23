import "../css/game.css";
import "../css/index.css";
import { useState, useEffect } from "react";

import background1 from "../assets/Backgrounds/background_singletree.png";

function Map(props) {
  const [hide, setHide] = useState(Array(5).fill(false));
  const [background, setBackground] = useState(background1);

  const text = [
    "...",
    "How did you find out about the ruins most people think that it's just a fairy tale?",
    "I overheard someone at a tavern talking about it.",
    "So, you don’t know anything about the ruins of Alexandria or why people are searching for it?",
    "Not really.",
    "WHAT ARE YOU JOKING! Ok well atleast now we have something to talk about, so you see...",
    "Every 5,000 years, an island rises from the sea, bringing chaos and disasters, and a plague that wiped out millions.",
    "A virus from the island made its way to the mainland, spreading like wildfire and causing millions to die.",
    "But this was no ordinary virus, it mutated its victims, turning them into barbaric monsters. No race was safe, not even the High Elves.",
    "But the ones who saved us were none other than humans. You see, humans don’t have the organ to store or process mana, so they can’t use magic.",
    "But due to the virus, some humans, instead of mutating into monsters, evolved and gained supernatural abilities that surpassed magic.",
    "Magic is created by storing mana within oneself and using it as a sort of fuel.",
    "Oh, so kind of like furnace the more coal you put in the more powerful the flame.",
    "Sure, but instead of storing mana and outputting magic, it was as if their bodies produced the magic itself. It became a part of them.",
    "These humans are known as the Twelve Pillars...",
    "Their powers were passed down through generations, though not all the bloodlines survived.",
    "Only four of the Twelve are still known to be alive.",
    "Wait, so King Aurelian is one of those Twelve Pillars' descendants?",
    "Yes, he is a descendant of one of them. Anyways, just because the virus was handled didn’t mean the disaster was over.",
    "One High Elf mage, along with two of the Pillars, sacrificed themselves to seal the island and stop it from submerging back into the ocean.",
    "The only way onto the island now is to find the teleportation circle left by the mage.",
    "Rumours say only one remains, and it’s said to be hidden deep in a dungeon filled with traps, ensuring no one can reach it.",
    "People rumor that the island brings such chaos because it’s protecting something priceless.",
    "Others say the mage isn’t dead but sealed it away and faked his death to keep the island to himself.",
    "And to think you were going to search for Alexandria with no clue in the world—it's really funny.",
    "That’s why I have you now, partner. So, where to?",
    "Well, from my research, the Plague first started in the southern region, in a small village near a huge canyon. That could be where the circle is.",
    "Wait, are you talking about Lyndrindell?",
    "That’s where I’m from! And now that you mention it, I remember there being a huge cave system I used to explore as a kid.",
    "To think the place I’m searching for was under my nose the entire time. I think it was fate for us to cross paths.",
    "Don’t get too excited. We don’t know if Lyndrindell is the right place. It’s getting dark let’s find a place to camp out.",
  ];

  useEffect(() => {
    props.hide(true);
    props.setText(text);
    props.background(background);
  }, []);

  function UpdateHide(index, value) {
    setHide((prevHide) => {
      const newArray = [...prevHide];
      newArray[index] = value;
      return newArray;
    });
  }

  useEffect(() => {
    if (props.count === 1 || props.count === 3 || (props.count >= 5 && props.count <= 11) ||
       (props.count >= 13 && props.count <= 16) || (props.count >= 18 && props.count <= 24) || props.count === 26 || props.count === 30) {
      const counter = props.count === 1 || props.count === 3 ||(props.count >= 5 && props.count <= 11) ||
                     (props.count >= 13 && props.count <= 16) || (props.count >= 18 && props.count <= 24) || props.count === 26 || props.count === 30;
      props.setButtonColor(counter ? "#00BFFF" : "");
      props.setColor(counter ? "#1E90FF" : "");
      props.setBgcolor(counter ? "rgba(240,248,255, 0.85)" : "");
      props.setBorder(counter ? "2px solid #00BFFF" : "");
    } else {
      props.setButtonColor();
      props.setColor();
      props.setBgcolor();
      props.setBorder();
    }
  }, [props.count]);

  return <></>;
}

export default Map;
