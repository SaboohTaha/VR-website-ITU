
export default function Projects() {
    const projects_info = [
        {
            name: "Virtual Emergency Response Training (VERT)",
            image: "/Images/Projects/VERT.png",
            description: "The Virtual Emergency Response Training (VERT) project is dedicated to elevating preparedness and crisis management by utilizing virtual reality (VR) training and interactive learning to train rescue workers. Leveraging the immersive capabilities of VR, specifically with Meta Quest 3 and hand tracking technology.",
            contributors: ["Husnain Ali", "Muhammad Omer Nawaz", "Farrukh Hussain", "Aqsa Fatima"],
        },
        {
            name: "Beat Saber: A Rhythmic Adventure in VR",
            image: "/Images/Projects/BeatSaber.png",
            description: "Beat Saber: A Rhythmic Adventure in VR is a VR game where players wield virtual sabers to break blocks that appear to the beat of music in different virtual environments. The game is inspired by and like Beat Saber available on Steam VR.",
            contributors: ["Muhammad Sabooh Taha", "Uzair Amin", "Hajira Qazi", "Syeda Minal Batool"],
        },
        {
            name: "ITU Virtual Tour",
            image: "/Images/Projects/ITUVirtualTour.png",
            description: "The following project is a virtual Information Technology University (ITU) tour. Users can visit ITU virtually anytime and on any platform using this project. The project consists of a tour of the old campus in Arfa Kareem Software Technology Park (ASTP) and a 3D visualization of the new campus that will soon be constructed. This project consists of an Android application comprising both VR and WebXR-based tour for ITU.",
            contributors: ["Ibrahim Siddiqui", "Amna Akbar", "Ibrahim Khan", "Hassan Ahmed", "Abdullah Nezami"],
        },
        {
            name: "dARse",
            image: "./Images/Projects/dARse.png",
            description: "dARse is a project that seeks to improve Pakistan’s teaching standards by helping augment schoolbooks. We have augmented Punjab Textbook Board’s Grade 5 Science textbook in the current Android application version. The application serves as a tool for teachers and students to help teach and learn scientific concepts using animated 3D models alongside audio explanations of the concept.",
            contributors: ["Maria Marrium", "Ramsha Imran", "Sadia Saeed", "Salwa Batool", "Momna Ibrahim"],
        },
        {
            name: "Space Shooter Game",
            image: "./Images/Projects/spaceshooter.jpeg",
            description: "Space Shooter VR is a game designed on the Google Cardboard that uses remote input through any Bluetooth mouse, controller, and even a Shinecon remote. In this game, a user has to look around himself and destroy the asteroids coming towards it via the remote/controller. This game consists of three difficulties that allow people from various experiences to enjoy it and is also a look into the potential of the vast industry of VR gaming.",
            contributors: ["Anas Mansha", "Maryam Bibi", "Omer Mansoor", "Sufian Saeed"],
        }
    ]

    return <>
        <div className="p-10 pt-20 sm:px-20 lg:px-32">
            <h1 className="text-zinc-950 mb-10 text-center drop-shadow-2xl text-3xl lg:text-5xl font-semibold">
                Our Projects
            </h1>
            <div className="flex flex-col flex-wrap space-y-6 justify-evenly">
                {projects_info.map((item) => {
                    return <div className="flex flex-col lg:flex-row w-full bg-blue-50  rounded-lg overflow-hidden shadow-sm">
                        <img src={item.image} alt={item.name} className="w-auto lg:w-96 h-96 lg:h-auto object-cover" />
                        <div className="w-full px-8 my-4">
                            <h1 className="text-zinc-950 text-center text-lg lg:text-xl font-semibold">
                                {item.name}
                            </h1>
                            <hr class="h-px my-4 border-0 bg-zinc-700/20"></hr>
                            <p className="text-zinc-900 drop-shadow-2xl text-justify text-sm lg:text-md font-normal">
                                {item.description}
                            </p>
                            <h2 className="text-zinc-950 my-4 text-left text-md lg:text-lg font-semibold">
                                Contributors:
                            </h2>
                            <ul>
                                {item.contributors.map((person) => {
                                    return <li className="text-zinc-900 drop-shadow-2xl text-justified text-sm lg:text-md font-normal">
                                        {person}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
};