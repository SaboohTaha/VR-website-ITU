
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
            description: "Beat Saber: A Rhythmic Adventure in VR is a VR game where players wield virtual sabers to break blocks that appear to the beat of music in different virtual environments. The game is inspired by one of the most popular games in VR called the Beat Saber available on Steam VR.",
            contributors: ["Muhammad Sabooh Taha", "Uzair Amin", "Hajira Qazi", "Syeda Minal Batool"],
        },
        {
            name: "Harnessing Mixed Reality and Drones",
            image: "/Images/Projects/VR Drone.gif",
            description: "Revolutionizing security surveillance with our cutting-edge solution that integrates Spatial Computing and UAVs like Drone, offering unparalleled flexibility, dynamic coverage, and comprehensive monitoring capabilities to overcome the limitations of conventional CCTV systems and enhance situational awareness in real-time.",
            contributors: ["Abdullah Mushtaq", "Aizaz ul Haq", "Muhammad Shaharyar"],
        },
        {
            name: "ITU Virtual Tour",
            image: "/Images/Projects/ITUVirtualTour.png",
            description: "The following project is a virtual Information Technology University (ITU) tour. Users can visit ITU virtually anytime and on any platform. The project consists of a tour of the old campus in Arfa Kareem Software Technology Park (ASTP) and a 3D visualization of the new campus that will soon be constructed. The users can virtually tour ITU via both our Android application or WebXR.",
            contributors: ["Ibrahim Siddiqui", "Amna Akbar", "Ibrahim Khan", "Hassan Ahmed", "Abdullah Nezami"],
        },
        {
            name: "dARse",
            image: "./Images/Projects/dARse.png",
            description: "dARse is a project that seeks to making science teaching fun and interactive via harnessing augmented reality technologies. A marker-based Augmented reality android application is created, as a prototype, to make the Grade 5 science book more interactive and engaging. The application serves as a tool for teachers and students to help teach and learn scientific concepts using animated 3D models alongside audio explanations of the concept in Urdu and English languages. The project can be extended to offer illustrations in other languages such as Pushto, Sundhi and Balochi.",
            contributors: ["Maria Marrium", "Ramsha Imran", "Sadia Saeed", "Salwa Batool", "Momna Ibrahim"],
        },
        {
            name: "Space Shooter Game",
            image: "./Images/Projects/spaceshooter.jpeg",
            description: "Space Shooter VR is mobileVR game based on google cardboard platform. It uses remote input through bluetooth mouse or a controller. The user has to strike the incoming asteroids via the remote/controller. This game consists of three difficulty levels: easy, medium and hard; the player can choose to make the game play more challenging by increasing its level.",
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