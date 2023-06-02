import React, { useEffect, useState } from "react";
import Gallery from "./Gallery/Gallery";
import "./Opensource.css";

const Opensource = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const items = [
        {
            title: "Members",
            //title: "Członkowie",
            desc: "Our open source organization consists of eight computer science enthusiasts, including several experienced programmers. Our main area of work is Minecraft plugins written in Java and projects in other languages such as Vue and JavaScript. We have opened several repositories on GitHub, which are constantly being developed and improved to provide the best possible experience for users.",
            //desc: "Nasza organizacja open source składa się z ośmiu entuzjastów IT, w tym kilku doświadczonych programistów. Głównym obszarem naszej pracy są pluginy do Minecrafta napisane w Javie oraz projekty w innych językach, takich jak Vue i JavaScript. Otworzyliśmy kilkanaście repozytoriów na GitHubie, które są stale rozwijane i ulepszane, aby zapewnić jak najlepsze doświadczenie użytkownikom Minecrafta.",
            icon: "/assets/Opensource/people-icon.webp",
            image: "/assets/Opensource/raports-screenshot.webp",
            isActive: true,
        },
        {
            title: "Our work",
            //title: "Nasza praca",
            desc: "The basis of our development lies in the work we invest in projects, plugins, and extensions. We strive to create increasingly better code that will benefit others. That is why we adopt an Agile approach, putting in efforts to ensure that what we create is of the highest quality.",
            //desc: "Podstawą naszego rozwoju jest praca, którą wkładamy w projekty, pluginy i rozszerzenia. Chcemy tworzyć co raz lepszy kod, który posłuży innym, dlatego pracujemy Agile'owo dokładając starań, by to co tworzymy było jak najlepsze.",
            icon: "/assets/Opensource/repositories-icon.webp",
            image: "/assets/Opensource/repos-screenshot.webp",
            isActive: false,
        },
        {
            title: "Discord",
            //title: "Discord",
            desc: "Discord serves as our primary platform for communication, where we are active. We provide guidance, share memes, and play games. We aim to create an inclusive community open to everyone, encouraging interaction with us. We strive to assist other developers in advancing their projects, don't hesitate to ask us for help!",
            //desc: "Główną platformą naszego kontaktu jest Discord, gdzie jesteśmy aktywni. Udzielamy porad, dzielimy się memami czy gramy w gry. Chcemy stworzyć społeczność otwartą dla każdego, dlatego zachęcamy do interakcji z nami. Chcemy pomagać innym pasjonatom programowania w rozwijaniu ich projektów, dlatego piszcie śmiało!"",
            icon: "/assets/Opensource/discord-icon.webp",
            image: "/assets/Opensource/discord-screenshot.webp",
            isActive: false,
        },
        {
            title: "Entertainment",
            //title: "Rozrywka",
            desc: "In addition to working on open-source projects, our members also value their free time and entertainment. We often play Minecraft and Fortnite to relax and enjoy playing together. Moreover, we like to play many games, such as Sons of the Forest and Witcher, as well as watch anime and other movies to broaden our horizons and draw inspiration for creating our projects.",
            //desc: "Poza pracą nad projektami open-source, nasi członkowie również cenią sobie czas wolny i rozrywkę. Często gramy w Minecrafta i Fortnite, aby odprężyć się i cieszyć się grą ze sobą. Ponadto, lubimy grać w Sons of the Forest oraz wiedźmina, a także oglądać anime i inne filmy, aby poszerzać nasze horyzonty i czerpać inspirację do tworzenia naszych projektów."",
            icon: "/assets/Opensource/gamepad-icon.webp",
            image: "/assets/Opensource/games-screenshot.webp",
            isActive: false,
        },
    ];

    useEffect(() => {
        autoToggleActive();
    }, []);

    const isMobileScreenWidth = () => {
        return window.innerWidth < 1000;
    };

    const handleToggleActive = (index) => {
        const updatedItems = items.map((item, i) => {
            if (i === index) {
                return { ...item, isActive: true };
            } else {
                return { ...item, isActive: false };
            }
        });

        setIsActive(updatedItems[index].isActive);
        setActiveIndex(index);
    };

    const autoToggleActive = () => {
        setTimeout(() => {
            if (!isMobileScreenWidth()) {
                return;
            }
            if (activeIndex === items.length - 1) {
                handleToggleActive(0);
                return;
            }
            handleToggleActive(activeIndex + 1);
        }, 5000);
    };

    return (
        <section id="about">
            <h3 className="title">About us 🎉</h3>
            <p className="desc">Learn more about our organization and our members!</p>

            <div className="gallery">
                {items.map((item, index) => (
                    <Gallery
                        key={index}
                        title={item.title}
                        description={item.desc}
                        icon={item.icon}
                        image={item.image}
                        isActive={item.isActive}
                        toggleActive={() => handleToggleActive(index)}
                    />
                ))}
            </div>
            <div className="description-box">
                <div className={`description ${isActive ? "active" : ""}`}>
                    {items.map((item, index) => (
                    <h3>{item.title}</h3>) )}
                    {items.map((item, index) => (
                    <p>{item.desc}</p> ))}

                </div>
            </div>
        </section>
    );
};

export default Opensource;