import './Skills.css';
import {useState} from "react";

export const Skills = () => {
    const [active, setActive] = useState(false);


    return (
        <div>
        <div className="Skills">
            <div className="Skills-text">
                <h2>Moje umiejętności</h2>
                <p>Technologie, których potrafię używać:
                </p>
                <ul >
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>JavaFx</li>
                </ul>
                <p>Podczas studiów nauczyłem się również:</p>
                <ul>
                    <li>Podstaw projektowania baz danych</li>
                    <li>Poznałem podstawy cyberbezpieczeństwa</li>
                    <li>Projektowania systemów informatycznych</li>
                    <li>Projektowania architektury korporacyjnej w oparciu o metodykę TOGAF</li>
                    <li>Projektowania aplikacji mobilny
                    <ul>
                        <li>Tworzenia makiet aplikacji mobilnych</li>
                        <li>Formowania wymagań wysoko i niskopoziomowych</li>
                        <li>Biznesowej analizy rynku</li>
                        <li>Tworzenia profili klientów i przypadków użycia</li>
                        <li>Projektowania procesów w notacji BPMN</li>
                    </ul>
                    </li>
                    <li>Zarządzania systemami informatycznymi</li>
                    <li>Podstaw zarządzania sieciami internetowymi</li>
                    <li>Poznałem metodyki pracy Agile
                    <ul>
                        <li>Potrafię pracować w sprintach</li>
                        <li>Korzystać i wspierać backlogi</li>
                        <li>Opisywać user story</li>
                        <li>Analizować burndown chart</li>
                        <li>Tworzyć diagramy Gantta</li>
                    </ul>
                    </li>
                </ul>
                <p>Biegle posługuję się:</p>
                <ul>
                    <li>IntelliJ IDEA</li>
                    <li>MS Office</li>
                    <ul>W tym:
                        <li>Word</li>
                        <li>Excel</li>
                        <li>PowerPoint</li>
                        <li>Forms</li>
                        <li>Sharepoint</li>
                    </ul>
                    <li>Mockups</li>
                    <li>Draw.io</li>
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>SAS Viya (tu podstawy analizy danych)</li>
                    <li>Jira</li>
                    <li>Gimp lub inne programy graficzne (preferuje paint.net)</li>
                    <li>ChatGPT</li>
                </ul>



                <button onClick={() => setActive(!active)}>Kliknij</button>
                <div className={`Skills-text-box ${active ? "active" : ""}`}>
                    <p>TEST</p>
                </div>
            </div>
        </div>
            <div className="Skills-examples">
            </div>
        </div>
    )
}

export default Skills;