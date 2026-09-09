import airframe from "./media/airframe-1280.webp";
import team from "./media/team-1280.webp";
import aircraft from "./media/aircraft-1280.webp";
import controls from "./media/controls-1280.webp";
import competition from "./media/competition-1280.webp";
import airframeSmall from "./media/airframe-640.webp";
import teamSmall from "./media/team-640.webp";
import aircraftSmall from "./media/aircraft-640.webp";
import controlsSmall from "./media/controls-640.webp";
import competitionSmall from "./media/competition-640.webp";

export const email = "engrlatuazon@gmail.com";
// A public PDF can be configured once the owner approves a publishable revision.
export const resumeUrl: string | undefined = import.meta.env.VITE_RESUME_URL;
export const media = { airframe, team, aircraft, controls, competition };
export const smallMedia: Record<string, string> = {
  [airframe]: airframeSmall,
  [team]: teamSmall,
  [aircraft]: aircraftSmall,
  [controls]: controlsSmall,
  [competition]: competitionSmall,
};
export const stages = [
  {
    name: "Design",
    heading: "From geometry to a buildable airframe.",
    text: "I designed the wings and control surfaces, tail section, and rotor mount in SolidWorks, and performed stability analysis in XFLR5.",
    scope: "My work: CAD, drawings, stability analysis",
    caption:
      "Assembled prototype showing the wing, tail, and propulsion layout. Detailed CAD files are available only with permission.",
    image: airframe,
    alt: "The assembled fixed-wing UAV with black wings, white tail, and front-mounted propeller on a blue workshop floor.",
  },
  {
    name: "Build",
    heading: "Individual responsibilities. A shared build.",
    text: "I allocated work across our nine-person team and contributed to 3D printing, integration, and assembly. The completed prototype was a team outcome.",
    scope: "Shared work: fabrication, integration, assembly",
    caption:
      "Project team with the assembled aircraft. Other team members and third-party components contributed to the final assembly.",
    image: team,
    alt: "Members of the UAV project team standing behind the assembled aircraft and radio transmitter.",
  },
  {
    name: "Validation",
    heading: "Be precise about what was tested.",
    text: "We performed limited ground testing and visual checks. The aircraft was not flight-tested before I transferred leadership following my move to the United States.",
    scope: "Status: limited ground testing; no flight test",
    caption:
      "Prototype on the ground. This photograph documents the build, not flight performance. No measured peer-performance claim is made.",
    image: airframe,
    alt: "The fixed-wing UAV resting on its landing gear; the photograph does not show a flight test.",
  },
];
export const projects = [
  {
    title: "Quadcopter drone",
    discipline: "Electronic integration",
    role: "Electronic Integration Engineer / BOM Manager",
    methods: "Betaflight · Soldering · BOM",
    summary: "Integrating the electrical system behind a flying prototype.",
    detail:
      "I handled procurement, BOM spreadsheets, soldering, electronic assembly, and Betaflight configuration. The team built and flew the drone. Approximately 30-minute durations were reported across multiple stable, low-aggression flights with hovering, standard battery configuration, and no additional payload. The exact trial count is unavailable.",
    evidence: "Assembly + flight observations",
    image: undefined,
    alt: "",
    year: "2026",
  },
  {
    title: "Aircraft design",
    discipline: "Aircraft configuration",
    role: "Individual academic project",
    methods: "SolidWorks · CAD · Drawings",
    summary: "Turning course requirements into an aircraft configuration.",
    detail:
      "I created the aircraft configuration, calculations, drawings, and renders to meet instructor-provided design requirements. The SolidWorks assembly is design evidence; it is not a flight-tested aircraft.",
    evidence: "CAD assembly",
    image: aircraft,
    alt: "Lee’s aircraft assembly in SolidWorks with wings, cockpit, landing gear, and conventional tail.",
    year: "",
  },
  {
    title: "Open wind tunnel",
    discipline: "Test equipment",
    role: "Lead Design Engineer",
    methods: "SolidWorks · Assembly · Visual testing",
    summary: "Designing a physical setup to observe airflow.",
    detail:
      "I produced the assembly, drawings, and simulation; parts were co-created with a colleague. A third-party professional manufactured parts, and our five-person team assembled the tunnel. It was used for visual testing only and collected no numerical experimental data. Project artifacts are described here in accordance with publication restrictions.",
    evidence: "Project description / restricted artifacts",
    image: undefined,
    alt: "",
    year: "2025",
  },
  {
    title: "Functional control surfaces",
    discipline: "Mechanisms + fabrication",
    role: "Academic scale-model project",
    methods: "Physical model · Ailerons · Flaps",
    summary: "Making control-surface movement tangible.",
    detail:
      "The scale model demonstrates functional ailerons and flaps. The supplied build imagery documents the mechanism; individual component attribution and further test details remain to be confirmed.",
    evidence: "Physical model",
    image: controls,
    alt: "Physical aircraft control-surface scale model from the project documentation.",
    year: "",
  },
];
