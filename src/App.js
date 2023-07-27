// import Card from "./components/Card";
import CodeWindow from "./components/CodeWindow";
import Hero from "./components/Hero";

export default function App() {
    let aboutMeStr = `Hello! My name is Alex, and I'm currently pursuing a degree in Computer Science.
My primary interests lie within systems programming and cybersecurity. 
I've always been fascinated by how the inner workings of computers and operating systems can be exploited.
Through my coursework and personal projects I've gained experience in solving complex problems 
and creating software to simplify tasks using a plethora of languages and technologies.
Please feel free to browse my projects and reach out to me if you'd like to connect!`;

    return (
        <div className="flex flex-col w-full gap-10">
            <Hero id="Home" />
            <div id="AboutMe" className="self-center">
                <CodeWindow command="whois snit.ski" output={aboutMeStr}  />
            </div>
            <div />
        </div>
    );
}