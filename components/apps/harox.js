import { Component } from "react";
import ReactGA from "react-ga";

export class AboutAiden extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      history: <History />,
      projects: <Projects />,
      skills: <Skills />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="harox vivek"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="harox' education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="history"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="harox' history"
            src="./themes/Yaru/status/work-history.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="vivek' projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="vivek' skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="vivek's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutAiden;

export const displayAboutAiden = () => {
  return <AboutAiden />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-32 mt-4 bg-white rounded-full">
        <img
          className="w-full rounded-full"
          src="./images/logos/aidenmori.png"
          alt="Adrián Martínez Logo"
        />
      </div>
      <div className=" mt-2 text-lg md:text-2xl text-center px-1">
        <div>
          My name is <span className="font-bold">Adrián Martínez</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">
            Junior Full Stack Developer!
          </span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" my-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc my-2 md:text-base">
          Detail oriented professional with over 8 years of experience in{" "}
          <span className="font-bold">Web2</span> and{" "}
          <span className="font-bold">Web3</span> industries.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Experience in <span className="font-bold">Leading a Team</span> of
          front end, back end and smart contract developers at{" "}
          <span className="font-bold">KURONURI</span> project.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Developed <span className="font-bold">a comprehensive DeFi</span>,{" "}
          <span className="font-bold">NFT marketplaces</span>,{" "}
          <span className="font-bold">Tokens</span> and 20+{" "}
          <span className="font-bold">Web3</span> projects including{" "}
          <span className="font-bold">P2E games</span> on Ethereum, Polygon,
          Binance Smart Chain and so on.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Advanced knowledge of multiple programming languages, frameworks and
          several database structures.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Reliable team player offering exceptional analytical and time
          management skills and the important ability to think critically and
          solve complex problems.
        </li>
      </ul>
    </>
  );
}
function History() {
  const project_list = [
    {
      name: (
        <p>
          Back End | Smart Contract Developer,{" "}
          <a
            className="border-b-2"
            href="https://decentreviews.co"
            target="_blank"
            rel="noreferrer"
          >
            Decent Reviews
          </a>
        </p>
      ),
      date: "May 2023 - Nov 2023, Remote",
      link: "https://decentreviews.co",
      description: [
        <p>
          Worked as a back-end and smart contract developer in an agile team
          communicating directly with the CTO.
        </p>,
        <p>
          Created the user review API, automatic review aggregation engine and
          embeddable badge generation engine using node.js/typescript and
          express.js.
        </p>,
        <p>
          Used mongoDB aggregation pipeline for review aggregation engine, and
          integrated with smart contract using web3.js to store the aggregation
          results.
        </p>,
        <p>
          Implemented CI/CD pipeline to automate comprehensive project testing
          and efficient deployment processes using github workflow actions.
        </p>,
        <p>
          Successfully conducted thorough API testing leveraging the Cypress and
          Jest testing libraries, while simultaneously generating API document
          via the Swagger API framework.
        </p>,
        <p>
          Effectively leveraged Docker to efficiently package, deploy, and
          manage applications across diverse environments, guaranteeing
          consistency and portability.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Blockchain, Full Stack Developer,{" "}
          <a
            className="border-b-2"
            href="https://kuronuri.com/pro"
            target="_blank"
            rel="noreferrer"
          >
            KURONURI
          </a>
        </p>
      ),
      date: "Apr 2021 - Aug 2023, Remote",
      link: "https://kuronuri.com/pro",
      description: [
        <p>
          Accomplished in building a comprehensive DeFi ecosystem, Token
          Generation and ICO platforms, 5 play-to-earn games, 2 NFT marketplaces
          including over 20 Web3 projects and tools.
        </p>,
        <p>
          Developed an automated DEX bot for Burn&Drop and a CEX bot for trading
          integrated with the Bitcastle CEX platform.
        </p>,
        <p>
          Designed and developed robust token Bridges for frictionless asset
          transfers between blockchain networks and implemented Cross-Chain
          solutions.
        </p>,
        <p>
          Leveraged Web3.js and Ethers.js to establish seamless interaction
          between the React.js, Vue.js front-end and smart contract.
        </p>,
        <p>
          Managed the CI / CD solution for a development team using the CircleCI
          tool, Bitbucket, Github and AWS Lambda functions.
        </p>,
        <p>
          Utilized GraphQL API to enhance communication performance between the
          front-end and back-end.
        </p>,
        <p>
          Constructed and integrated an internal back-end synchronized with the
          blockchain database, utilizing Node.js and Express.js.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Blockchain Developer,{" "}
          <a className="border-b-2" href="#" target="_blank" rel="noreferrer">
            Defichain Value
          </a>
        </p>
      ),
      date: "Feb 2020 - Mar 2021, Remote",
      link: "#",
      description: [
        <p>Created the BSC Swap and Farm Contract</p>,
        <p>
          Developed the smart contracts to interact with Value DeFi protocol
          including liquidity pools, yield farming strategies and governance
          mechanisms.
        </p>,
        <p>
          Tested the smart contracts using Truffle and Hardhat framework and
          deployed successfully on Binance Smart Chain.
        </p>,
        <p>
          Integrated the smart contracts with front-end using Ethers.js and
          Web3.js to enable users interact with liquidity pools, stake assets
          and participate in yield farming opportunities.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Full Stack Developer,{" "}
          <a
            className="border-b-2"
            href="https://incarta.com.au/"
            target="_blank"
            rel="noreferrer"
          >
            INCARTA
          </a>
        </p>
      ),
      date: "May 2019 - Feb 2020, Australia",
      link: "https://incarta.com.au/",
      description: [
        <p>
          Improved patient treatment rates by 20% through the developing and
          implementing of machine learning algorithms.
        </p>,
        <p>
          Instrumental in designing and developing clinical charts using
          React.js and D3.js, contributed to patient care during the COVID-19
          pandemic.
        </p>,
        <p>
          Developed and delivered multiple healthcare platforms using React.js,
          Angular, Vue.js, with Laravel, PHP framework and Node.js focusing on
          clear client communication.
        </p>,
        <p>
          By using react.js, next.js and node.js, created reusable components
          and made functions modular to connect with the backend, which has led
          to a 15% improvement in site speed and performance.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Front End Developer,{" "}
          <a
            className="border-b-2"
            href="https://www.openagent.com.au/"
            target="_blank"
            rel="noreferrer"
          >
            OpenAgent
          </a>
        </p>
      ),
      date: "Aug 2017 - Apr 2019, Australia",
      link: "https://www.openagent.com.au/",
      description: [
        <p>
          In an Agile, collaborative environment, effectively gathered design
          requirements, and conducted thorough application testing, resulting in
          a notable 25% increase in working speed. • Leading troubleshooting
          efforts, fixed more than 300+ bugs and other issues, and updated sites
          throughout the production lifecycle.
        </p>,
        <p>
          Improved the website's user interface and optimized its speed,
          resulting in a 35% speed improvement and a 20% increase in user
          engagement.
        </p>,
        <p>
          Collaborated with the data science team to develop algorithms that
          matched over 80% of our platform's users with top-performing agents,
          as a result, 25% increase in customer satisfaction.
        </p>,
        <p>
          Be proud of contributing to this project and look forward to applying
          my knowledge and experience in my future career endeavors.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Junior Front End Developer,{" "}
          <a
            className="border-b-2"
            href="https://legrand.jp/"
            target="_blank"
            rel="noreferrer"
          >
            Le Grand Co, Ltd.
          </a>
        </p>
      ),
      date: "Apr 2015 - Nov 2016, Japan",
      link: "https://legrand.jp/",
      description: [
        <p>
          Worked in an Agile, collaborative environment to receive design
          requirements, peer program, and test applications
        </p>,
        <p>
          Maintained and updated 20+ web pages, graphics, and online marketing
          materials in collaboration with the UX manager and development team.
        </p>,
        <p>
          Leading troubleshooting efforts, fixing more than 1,000 bugs and other
          issues, and updated sites throughout the production lifecycle.
        </p>,
        <p>
          Created the complex UI components using react/typescript and scss.
        </p>,
        <p>
          Improved the process of storing app state info by implementing the
          Redux store, and successfully integrated the front-end with Rest APIs.
        </p>,
      ],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Work Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full py-4 px-4 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-center items-center">
                <div className=" text-base font-semibold md:text-lg mr-2">
                  {project.name}
                </div>
              </div>
              <div className="text-gray-300 font-light text-sm">
                {project.date}
              </div>
            </div>
            <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
              {project.description.map((desc, index) => (
                <li
                  key={index}
                  className="list-disc mt-1 text-gray-100 md:text-base"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Computer Engineering, Victoria University
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2012 - 2015</div>
          <div className=" text-sm md:text-base">Bachelor of Engineering</div>
        </li>
      </ul>
      <div className=" font-medium relative text-2xl mt-4 md:mt-4 mb-4">
        Certificate
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <div className="flex w-full flex-col px-20">
        <div className="w-full flex flex-col lg:flex-row gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 ">
          <a
            className="w-full cursor-pointer"
            target="_blank"
            href="https://www.hackerrank.com/certificates/f367d0b2f01b"
            rel="noreferrer"
          >
            <img
              src="./images/certificate/css_cert.webp"
              className="rounded"
              alt="CSS Certificate"
            />
          </a>
        </div>
      </div>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          I am working as a full stack developer.
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              React.js, Web3.js and Smart Contract
            </strong>{" "}
            development
          </div>
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="harox javascript"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Typescript-3178c6?style=flat&logo=typescript&logoColor=ffffff"
              alt="harox typescript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Solidity-ffffff?style=flat&logo=solidity&logoColor=000000&labelColor=%000000"
              alt="harox solidity"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              alt="harox c++"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="harox python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
              alt="harox dart"
            />
            <img
              src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff"
              alt="harox SASS"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="harox git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
              alt="harox firebase"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              alt="harox next"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              alt="harox react"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Angular-dd0031?style=flat&logo=angular&logoColor=ffffff"
              alt="harox angular"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Svelte-ff3e00?style=flat&logo=svelte&logoColor=ffffff"
              alt="harox svelte"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Remix-00ccbb?style=flat&logo=remix&logoColor=000000"
              alt="harox remix"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Web3JS-f16822?style=flat&logo=Web3.js&logoColor=ffffff"
              alt="harox web3"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Hardhat-c5d11700?style=flat&logo=ethereum&logoColor=ffffff"
              alt="harox hardhat"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=react&logoColor=white"
              alt="harox react native"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Ionic-3880ff?style=flat&logo=ionic&logoColor=white"
              alt="harox ionic framework"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
              alt="harox flutter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="harox tailwind css"
            />
            <img
              src="https://img.shields.io/badge/-NodeJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="harox node.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-ExpressJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="harox express.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
              alt="harox jquery"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              alt="harox redux"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Docker-02569B?style=flat&logo=docker&logoColor=white"
              alt="harox docker"
            />
          </div>
        </div>
      </div>
    </>
  );
}
function Projects() {
  const project_list = [
    {
      name: "Roppongi Ai",
      date: "Feb 2024 - Feb 2024",
      link: "https://roppongi-ai.netlify.app/",
      imgUrl: "./images/projects/roppongi-ai.webp",
      description: [
        <p>AI website development</p>,
        <p>Wordpress theme</p>,
        <p>Elementor Pro</p>,
      ],
      domains: ["Wordpress", "AI", "Elementor", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "Plinko Lotto Dapp",
      date: "Jan 2024 - Jan 2024",
      link: "https://plinko-lotto.netlify.app/",
      imgUrl: "./images/projects/plinko-lotto.webp",
      description: [
        <p>Lotto game development</p>,
        <p>Blockchain game development</p>,
        <p>Lotto token integration</p>,
      ],
      domains: [
        "Dapp",
        "Lotto",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
      ],
    },
    {
      name: "Roppongi Lotto Dapp",
      date: "Jan 2024 - Jan 2024",
      link: "https://lotto-droplocker.netlify.app/",
      imgUrl: "./images/projects/roppongi-lotto.webp",
      description: [
        <p>Lotto game development</p>,
        <p>Blockchain game development</p>,
        <p>Lotto token integration</p>,
      ],
      domains: [
        "Dapp",
        "Lotto",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
      ],
    },
    {
      name: "Lucky Wheel Lotto Dapp",
      date: "Feb 2024 - Feb 2024",
      link: "https://lucky-wheel-lotto.netlify.app/",
      imgUrl: "./images/projects/lucky-wheel.webp",
      description: [
        <p>Lotto game development</p>,
        <p>Blockchain game development</p>,
        <p>Lotto token integration</p>,
      ],
      domains: [
        "Dapp",
        "Lotto",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
      ],
    },
    {
      name: "Decent Reviews",
      date: "Mar 2023 - Nov 2023",
      link: "https://www.linkedin.com/company/decentreviews/about/",
      imgUrl: "./images/projects/decent-reviews.webp",
      description: [
        <p>Worked on backend and smart contract develoment</p>,
        <p>
          Created the user review API, automatic review aggregation engine,
          automatic review logo generation engine
        </p>,
        <p>
          Integrated with smart contract using web3.js and synced with backend
        </p>,
        <p>
          Implemented the backend including database using cypress and jext
          testing library and finalize the API document using swagger API
          framework
        </p>,
      ],
      domains: [
        "Node.js",
        "Express.js",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
        "MongoDB",
        "CI/CD",
        "Github",
      ],
    },
    {
      name: "AI Play - Video Generator",
      date: "Dec 2023 - Dec 2023",
      link: "https://ai-play.netlify.app/",
      imgUrl: "./images/projects/ai-video-generator.webp",
      description: [
        <p>Used D-ID API for generation video from image</p>,
        <p>Genrate AI video from image</p>,
        <p>Upload image</p>,
        <p>Choose voice, voice style and language</p>,
      ],
      domains: [
        "react.js",
        "css",
        "AI",
        "D-ID",
        "API integration",
        "animation",
        "video",
      ],
    },
    {
      name: "Speaking Girl AI",
      date: "Nov 2023 - Nov 2023",
      link: "https://speakingai.difines.io",
      imgUrl: "./images/projects/ai-speaking-girl.webp",
      description: [
        <p>Use chatGPT</p>,
        <p>Use Microsoft Azure for TTS function</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "AI",
        "chatGPT",
        "microsoft",
        "tts",
      ],
    },
    {
      name: "SHIBUYA Ecosystem",
      date: "Dec 2021 - Apr 2022",
      link: "https://shibuya.difines.io",
      imgUrl: "./images/projects/shibuya.webp",
      description: [
        <p>
          Has <span className="font-medium">special mechanism</span> called{" "}
          <span className="font-medium">Golden Tree</span> that can make the
          token price <span className="font-medium">never go down</span>, and{" "}
          <span className="font-medium">rise day by day</span>
        </p>,
        <p>
          Designed that <span className="font-medium">SMTC token</span> that is
          the main token of Golden Tree that has the special mechanism will be{" "}
          <span className="font-medium">over 100K BUSD</span> finally
        </p>,
        <p>Has 7 ladder system</p>,
        <p>has many rewards system</p>,
        <p>has referral function</p>,
        <p>has team manage feature as being a boss of the team</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "defi",
        "binance smart chain",
      ],
    },
    {
      name: "Staking Platform",
      date: "Nov 2023 - Dec 2023",
      link: "https://stakes.difines.io",
      imgUrl: "./images/projects/stake-referral-reward.webp",
      description: [
        <p>Has 5 level referral system working on CEX</p>,
        <p>Staking with multiple tokens working on DEX</p>,
        <p>Re-staking, withdrawing and add-staking are possible</p>,
        <p>Strong reward system based on star earning for each actions</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "dex",
        "cex",
        "binance smart chain",
      ],
    },
    {
      name: "FC Marketplace",
      date: "August 2023",
      link: "https://fcmarket.difines.io",
      imgUrl: "./images/projects/fcmarket.webp",
      description: [
        <p>
          Users can swap the crypto to real cash using this platform. We made
          the secure pool that user can deposit token to make a contract.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "firebase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "PEPE Sushi",
      date: "May 2023",
      link: "https://pepesushi.vip",
      imgUrl: "./images/projects/pepe-sushi.webp",
      description: [
        <p>
          PEPE SUSHI is a member of the PEPE family. The PEPE family loved sushi
          and wanted to become a sushi chef, so they came to learn the technique
          Japan. It also offers a service called The Messages, which will be a
          platform where the messages you post will be permanently recorded on
          the blockchain. Every time a message is posted, PEPES is inspired by
          mysterious tokens that burn indefinitely!
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "DEX Orderbook",
      date: "Oct 2023",
      link: "https://orderbook.pepesushi.vip",
      imgUrl: "./images/projects/dex-orderbook.webp",
      description: [
        <p>Dex orderbook platform</p>,
        <p>
          Support PEPE Bep20, PEPE Sushi, PEPE MSG and more than 11 meme tokens
        </p>,
        <p>Added TradinvView</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "PEPE Bep20 | Burn & Drop",
      date: "June 2023",
      link: "https://pepe.markets/",
      imgUrl: "./images/projects/burn_drop.webp",
      description: [
        <p>
          Burn & Drop is the service that burns and airdrop each token to make a
          token price rising up.
        </p>,
        <p>
          Support PEPE Bep20, PEPE Sushi, PEPE MSG and more than 11 meme tokens
        </p>,
        <p>PEPE Syndicate</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "Genogram",
      date: "Sep 2021",
      link: "https://genogram-gojs.netlify.app/",
      imgUrl: "./images/projects/genogram.webp",
      description: [
        <p>Genorgram using react.js and gojs</p>,
        <p>Generate the data from the database and editable by drag.</p>,
      ],
      domains: ["react.js", "gojs", "gosj-react", "html", "css"],
    },
    {
      name: "Food Website",
      date: "Aug 2023",
      link: "#",
      imgUrl: "./images/projects/food.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Dentist Website",
      date: "Aug 2023",
      link: "#",
      imgUrl: "./images/projects/dentist.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Fashion Website",
      date: "July 2023",
      link: "https://aura-fashion-theme.netlify.app/",
      imgUrl: "./images/projects/fashion.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Crypto Website",
      date: "July 2023",
      link: "https://crypto-aura-theme.netlify.app/",
      imgUrl: "./images/projects/crypto.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Xocial Media App",
      date: "Feb 2017",
      link: "#",
      imgUrl: "./images/projects/xocial.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "PEPE Brother",
      date: "May 2023",
      link: "https://brothers.pepesushi.vip",
      imgUrl: "./images/projects/pepe.webp",
      description: [
        <p>Two token support, PEPEP and PEPEG</p>,
        <p>Burn one token and get same amount of another token</p>,
        <p>Pepe police and pepe gang story</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "PEPE MSG",
      date: "May 2023",
      link: "https://intro.themessages.xyz/",
      imgUrl: "./images/projects/pepe-msg.webp",
      description: [
        <p>The Messages. Combining Meme culture with utility.</p>,
        <p>
          Experience the Fusion of Meme Coin and Social Media: Power Up Your
          Blockahin Experience!
        </p>,
        <p>
          $TBNB, $ARMY, and $MSG. $MSG is on Binance Smart Chain, while the
          others are on the testnet.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "Token Faucet Platform",
      date: "Mar 2023",
      link: "https://faucet.themessages.xyz",
      imgUrl: "./images/projects/faucet.webp",
      description: [
        <p>ERC20 Token faucet platform</p>,
        <p>Binance smart chain tesetnet support</p>,
        <p>Time limitation implemented</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "Home Of 12V",
      date: "May 2020",
      imgUrl: "./images/projects/12v.webp",
      link: "#",
      description: [
        <p>Front end working</p>,
        <p>Mobile responsive using tailwindCSS and Next.js</p>,
      ],
      domains: ["next.js", "typescript", "tailwindCSS", "react.js", "netlify"],
    },
    {
      name: "Voice Emailer App",
      date: "Oct 2016",
      link: "#",
      imgUrl: "./images/projects/voice.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "Catch Me App",
      date: "Dec 2016",
      link: "#",
      imgUrl: "./images/projects/catch.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "NFT Marketplace",
      date: "July 2022 - Aug 2022",
      imgUrl: "./images/projects/nftmarket.webp",
      link: "https://nftmarket.difines.io",
      description: [
        <p>Minting, Selling, Buying and Listing NFTs</p>,
        <p>
          Has the <span className="font-medium">royalty</span> for the{" "}
          <span className="font-medium">NFT creators</span>
        </p>,
        <p>
          <span className="font-medium">Swap place</span> where user can swap
          <span className="font-medium">two NFT properties</span>
        </p>,
        <p>
          Planning to develop <span className="font-medium">combine place</span>{" "}
          where makes NFT more <span className="font-medium">stronger</span>
        </p>,
        <p>
          NFTs will be used as the{" "}
          <span className="font-medium">game assets</span>
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "firebase",
        "web3.js",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "KOILLECTIBLE",
      date: "Oct 2022 - Nov 2022",
      imgUrl: "./images/projects/koi.webp",
      link: "https://koi.difines.io",
      description: [
        <p>
          The platform that brings fundraising to the global stage by combining
          traditional web2 and the emerging web3 industries.
        </p>,
        <p>Koi fishes will be growing day by day</p>,
        <p>Change water function</p>,
        <p>
          Fish swimming speed will be decreased based on the weight growing day
          by day
        </p>,
        <p>
          NFTs will be used as the{" "}
          <span className="font-medium">game assets</span>
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "firebase",
        "web3.js",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "NFT Marketplace (Bloodshed)",
      date: "Oct 2019 - Dec 2019",
      imgUrl: "./images/projects/nftfront.webp",
      link: "#",
      description: [<p>Minting, Selling, Buying, Bidding, Listing NFTs</p>],
      domains: [
        "react.js",
        "scss",
        "node.js",
        "express.js",
        "mongodb",
        "ethers.js",
        "solidity",
        "truffle",
        "ethereum",
      ],
    },
    {
      name: "White Creator Token Minting Platform",
      date: "Jun 2022",
      link: "https://whitecreator.difines.io",
      imgUrl: "./images/projects/whitecreator.webp",
      description: [
        <p>
          Support <span className="font-medium">binance</span> and{" "}
          <span className="font-medium">ethereum</span> chains for now.
        </p>,
        <p>
          Create token easily within{" "}
          <span className="font-medium">10 seconds by one click</span>
        </p>,
        <p>
          Plan to add <span className="font-medium">more evm chains</span> such
          like polygon, avax and etc.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "NFT Minting Platform",
      date: "Jun 2022",
      link: "https://nft.difines.io",
      imgUrl: "./images/projects/nft.webp",
      description: [
        <p>
          Support <span className="font-medium">binance</span> and{" "}
          <span className="font-medium">ethereum</span> chains for now.
        </p>,
        <p>
          Create NFT easily within{" "}
          <span className="font-medium">10 seconds by one click</span>
        </p>,
        <p>
          Plan to add <span className="font-medium">more evm chains</span> such
          like polygon, avax and etc.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "Electon JS Project",
      date: "Feb 2020",
      imgUrl: "./images/projects/movie-electron.webp",
      link: "#",
      description: [<p>ElectronJS</p>, <p>Tailwind</p>, <p>React.js</p>],
      domains: ["electronJS", "react.js", "tailwind"],
    },
    {
      name: "Guessing App",
      date: "Sep 2017",
      link: "#",
      imgUrl: "./images/projects/hairshop.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "Web3.0 Messaging Platform - Chat Fi",
      date: "Feb 2023",
      imgUrl: "./images/projects/chatfi.webp",
      link: "https://chatfi.difines.io",
      description: [
        <p>Chat each other using wallet address</p>,
        <p>Create the group and invite people</p>,
        <p>Transfer token easily</p>,
        <p>Create the token airdrop and voting event</p>,
        <p>Plan to add many feature</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "chatscope",
        "web3.js",
        "firebase",
        "binance smart chain",
      ],
    },
    {
      name: "The Messages (record)",
      date: "Mar 2023",
      imgUrl: "./images/projects/message.webp",
      link: "https://record.themessages.xyz",
      description: [
        <p>
          Create the gold, silver and bronze types of congratulation messages to
          the blockchain
        </p>,
        <p>Use the WBC token</p>,
        <p>Share more SNS information by choosing the gold message</p>,
        <p>Plan to add more feature</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "web3.js",
        "solidity",
        "binance smart chain",
      ],
    },
    {
      name: "The Messages (booker)",
      date: "Apr 2023",
      imgUrl: "./images/projects/booker.webp",
      link: "https://bettor.pepesushi.vip",
      description: [
        <p>Post to earn web3 project</p>,
        <p>Integrated wallet connect, coinbase, metamask</p>,
        <p>Use the nft.storage SDK to save metadata</p>,
        <p>Post, Edit, Delete, Buy article</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "web3.js",
        "solidity",
        "binance smart chain",
      ],
    },
    {
      name: "Mining P2E Game",
      date: "Apr 2023",
      imgUrl: "./images/projects/mining.webp",
      link: "https://intro.mining.difines.io",
      description: [
        <p>Play to Earn web3 mining game</p>,
        <p>Integrate NFT assets with the game</p>,
        <p>Buy the NFTs to earn much more token</p>,
      ],
      domains: [
        "vue.js",
        "web3.js",
        "play to earn",
        "solidity",
        "binance smart chain",
      ],
    },
    {
      name: "Partner",
      date: "Mar 2023",
      imgUrl: "./images/projects/partner.webp",
      link: "https://partner.difines.io",
      description: [
        <p>Create the backend using openAI api with node.js and express.js</p>,
        <p>Made the backend as serverless to run on the netlify</p>,
        <p>Integrated react.js frontend with the backend</p>,
      ],
      domains: ["chatGPT", "react.js", "node.js", "express.js"],
    },
    {
      name: "Clinicial Chart (Alarta)",
      date: "2020 - 2021",
      imgUrl: "./images/projects/clinical.webp",
      link: "https://incarta.com.au/",
      description: [
        <p>
          With over 25 years experience in the Health and Life Sciences sector,
          Incarta has a demonstrated history of innovation in hardware and
          software development. Our leading clinical records platform “Alarta”
          is amongst the most advanced cloud based critical care medical record
          systems available anywhere. It is also one of the most cost effective.
          Alarta can be deployed within a few hours auto-configuring itself via
          HL7.
        </p>,
      ],
      domains: ["chatGPT", "react.js", "node.js", "express.js"],
    },
    {
      name: "Facial Recognize",
      date: "Feb 2020",
      imgUrl: "./images/projects/facial-recognize.webp",
      link: "https://github.com/aiden77mori/facial-recognization",
      description: [
        <p>Face dectection project using face-api.js</p>,
        <p>API integration with react</p>,
        <p>Multi faces recognize possible</p>,
        <p>Recognize face using the camera</p>,
      ],
      domains: ["react.js", "face-api.js", "restful-api", "integration"],
    },
    {
      name: "Art Worker",
      date: "Dec 2019",
      imgUrl: "./images/projects/art.webp",
      link: "https://nft.difines.io/art",
      description: [
        <p>Photo Edition tools using fabric.js and react.js</p>,
        <p>Filter, Adjust, Overlay, Drawing functions</p>,
      ],
      domains: ["fabric.js", "react.js", "typescript", "nft"],
    },
    {
      name: "DIOR Virtual Shop",
      date: "Oct 2020",
      imgUrl: "./images/projects/dior.webp",
      link: "https://dior-vrstore.netlify.app",
      description: [
        <p>Admin can upload the images and 3D assets</p>,
        <p>Add or edit map with hubspot</p>,
        <p>Purchase the product in VR environment</p>,
      ],
      domains: ["html", "javascript", "php", "panolens", "css", "three.js"],
    },
    {
      name: "Album App",
      date: "Feb 2021",
      imgUrl: "./images/projects/app.webp",
      link: "#",
      description: [
        <p>Sign up by OTP</p>,
        <p>User can post images</p>,
        <p>Make friend</p>,
        <p>Social platform integration</p>,
        <p>Upload and edit image using uploadcare widget</p>,
        <p>Display address book of the mobile</p>,
      ],
      domains: [
        "ionic",
        "angular",
        "node.js",
        "express.js",
        "postgreSql",
        "scss",
      ],
    },
    {
      name: "Kingdom Battle",
      date: "July 2022",
      imgUrl: "./images/projects/kingdom.webp",
      link: "https://kingdom.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 battle type of
          game
        </p>,
        <p>
          Support <span className="font-medium">multiplayer</span> mode in which
          up to <span className="font-medium">8 players</span> playing together
        </p>,
        <p>Defeat goblins and enemy boss to get the more token</p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "World Speed",
      date: "Sep 2022",
      imgUrl: "./images/projects/worldspeed.webp",
      link: "https://hamadeco.jp/cargame/",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 car racing game
        </p>,
        <p>
          Play with 4 computer players on the{" "}
          <span className="font-medium">easy, middle and hard</span> game mode
        </p>,
        <p>Be top winner to get the more token</p>,
        <p>
          Plan to add <span className="font-medium">multiplayer</span> mode
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "Crypto Snaker",
      date: "Aug 2022",
      imgUrl: "./images/projects/cryptosnake.webp",
      link: "https://snake.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 snake game
        </p>,
        <p>
          Play with many <span className="font-medium">snake bots</span>
        </p>,
        <p>
          Survive <span className="font-medium">as long as possible</span> to
          get the more token
        </p>,
        <p>
          Plan to add <span className="font-medium">multiplayer</span> mode
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "Puzzle",
      date: "Oct 2022",
      imgUrl: "./images/projects/puzzle.webp",
      link: "https://puzzle.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 puzzle game
          (2048)
        </p>,
        <p>
          Play on the <span className="font-medium">easy, middle and hard</span>{" "}
          mode with the limited time
        </p>,
        <p>
          Solve the puzzle{" "}
          <span className="font-medium">as soon as possible</span> before time
          is up to get the more token
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "BlockDown",
      date: "Nov 2022",
      imgUrl: "./images/projects/blockdown.webp",
      link: "https://blockdown.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 block down game
          (tetris)
        </p>,
        <p>
          Play on the <span className="font-medium">easy, middle and hard</span>{" "}
          mode
        </p>,
        <p>
          Match the block to the{" "}
          <span className="font-medium">right place</span> and break{" "}
          <span className="font-medium">as much as possible</span> get the more
          token
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "Crypto Works Metaverse",
      date: "Jan 2023",
      imgUrl: "./images/projects/metaverse.webp",
      link: "https://cryptoworks.difines.io",
      description: [
        <p>Meet the friends and chat each other</p>,
        <p>Buy and sell your NFT assets</p>,
        <p>Plan to add many features</p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "metaverse",
        "play to earn",
        "binance smart chain",
      ],
    },
  ];

  const tag_colors = {
    "react.js": "blue-300",
    typescript: "yellow-300",
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    firebase: "red-300",
    html5: "pink-600",
    sass: "pink-400",
    scss: "pink-300",
    tensorflow: "yellow-600",
    django: "green-600",
    unity3D: "green-400",
    hardhat: "green-300",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
    "web3.js": "purple-300",
    metaverse: "blue-400",
    "play to earn": "blue-500",
    webgl: "blue-600",
    "binance smart chain": "yellow-300",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full flex flex-col lg:flex-row gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 ">
            <a
              className="w-full cursor-pointer"
              target="_blank"
              href={project.link}
              rel="noreferrer"
            >
              <img
                src={project.imgUrl}
                className="rounded"
                alt={project.name}
              />
            </a>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base font-semibold md:text-lg mr-2">
                    {project.name}
                  </div>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
                {project.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-disc mt-2 text-gray-100 md:text-base"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-4">
                {project.domains
                  ? project.domains.map((domain, index) => (
                      <span
                        key={index}
                        className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
                      >
                        {domain}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/PResume.pdf"
      title="aiden mori resume"
      frameBorder="0"
    ></iframe>
  );
}
