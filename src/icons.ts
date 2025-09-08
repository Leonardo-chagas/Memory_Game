import { library } from "@fortawesome/fontawesome-svg-core";
import {  faVuejs, faJsSquare, faCss3Alt, faPython, faJava, faAngular, faRust, faGolang, faFlutter, faBootstrap } from "@fortawesome/free-brands-svg-icons";

export const loadIcons = () => {
    library.add(faPython, faVuejs, faJsSquare, faCss3Alt, faJava, faAngular, faRust, faGolang, faFlutter, faBootstrap);
}