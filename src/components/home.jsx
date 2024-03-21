import { Fragment } from "react"
import { Player, BigPlayButton, ControlBar } from "video-react"

export default function Home() {
    const video_src = "/media/introduction.mp4"
    const team_info = [{
        Name: "Dr Ibrahim Ghaznavi",
        Image: "/Images/team/Sir Ibrahim.jfif",
        Role: "Director",
        Additionals: [{ subrole: "Assistant Professor" }, { subrole: "XR/Metaverse Consultant" }]
    },
    {
        Name: "Zubaira Naz",
        Image: "/Images/team/Miss Zubaira.jpg",
        Role: "Lab Lead (Research)",
        Additionals: [{ subrole: "Teaching Fellow" }]
    },
    {
        Name: "Muhammad Sabooh Taha",
        Image: "/Images/team/Sabooh.jfif",
        Role: "Lab Lead",
        Additionals: [{ subrole: "Final Year CS Student" }]
    },
    {
        Name: "Abdullah Mushtaq",
        Image: "/Images/team/Abdullah.jpg",
        Role: "Lab Lead",
        Additionals: [{ subrole: "Final Year CS Student" }]
    },
    {
        Name: "Muhammad Omer Nawaz",
        Image: "/Images/team/Omer.jpeg",
        Role: "Lab Lead",
        Additionals: [{ subrole: "Final Year CS Student" }]
    },
    {
        Name: "Husnain Ali",
        Image: "/Images/team/Husnain.jpeg",
        Role: "Lab Lead",
        Additionals: [{ subrole: "Final Year CS Student" }]
    }
    ]

    return (
        <Fragment>
            <div className="home-gradient h-auto p-10 sm:py-12 sm:px-20 lg:py-20
                            lg:px-32 w-full gap-x-12">
                <div className="grid lg:grid-cols-2 h-auto place-items-center">
                    <div className="lg:mr-20">
                        <h1 className="text-zinc-900 drop-shadow-2xl 
                                    text-left text-3xl lg:text-5xl font-semibold">
                            Virtuality Labs ITU
                        </h1>
                        <p className="text-zinc-900 drop-shadow-2xl my-12 xl:my-12 lg:my-8
                                    text-justified text-base lg:text-lg font-medium">
                            Virtuality Labs is a research institute focused on solving locally relevant problems by
                            harnessing immersive technologies such as Augmented Reality, Mixed Reality, and Virtual Reality.
                        </p>
                        <a href="/aboutus" className="rounded-full flex items-center justify-center
                                                    w-40 h-12 tracking-wider font-medium bg-blue-200
                                                    transition text-md select-none cursor-pointer
                                                    duration-500 hover:bg-blue-600 hover:text-white">
                            Learn more
                        </a>
                    </div>
                    <Player fluid={true} muted={true} src={video_src} className="mt-10 rounded-xl overflow-hidden">
                        <BigPlayButton position="center" />
                        <ControlBar />
                    </Player>
                </div>
            </div>

            <div className="my-20 p-10 sm:px-20 lg:px-32">
                <div className="text-zinc-900 text-center drop-shadow-2xl text-3xl lg:text-4xl font-semibold">
                    Introducing our Virtual Information Technology University (ITU) Tour
                </div>
                <div className="text-zinc-900 text-left drop-shadow-lg text-base lg:text-lg my-12 font-medium">
                    Take a virtual tour of the ITU campus from anywhere, anytime, and on any device via our website or mobile app.
                    The immersive tour lets you visit our campus and navigate between different lecture theatres, auditoriums, libraries,
                    cafeterias, and other facilities at the Campus. Our platform offers a comprehensive tour of the historic Arfa Kareem
                    Software Technology Park (ASTP) campus, as well as a captivating 3D visualization of the forthcoming state-of-the-art ITU campus.
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <a href="https://drive.google.com/file/d/1TVQUFfCjDD_YzwtqC6OLnpO9xVQksVMr/view?usp=sharing" className="rounded-full shadow-md duration-500 hover:bg-right hover:text-white text-zinc-900 my-5 sm:mx-10 lg:mx-20
                                flex items-center justify-center w-40 h-12 font-semibold text-md select-none cursor-pointer
                                bg-[length:200%] bg-gradient-to-r from-[#36D1DC] via-[#5B86E5] to-[#36D1DC]">
                        Try Project
                    </a>
                    <a href="https://playcanv.as/p/VUTEkFYq/" className="rounded-full shadow-md duration-500 bg-right hover:bg-left hover:text-white text-zinc-900 my-5 sm:mx-10 lg:mx-20
                                flex items-center justify-center w-40 h-12 font-semibold text-md select-none cursor-pointer
                                bg-[length:200%] bg-gradient-to-l from-[#36D1DC] via-[#5B86E5] to-[#36D1DC]">
                        Try WebXR
                    </a>
                </div>
            </div>

            <div className="repeating-background">
                <div className="mt-20 p-10 pt-20 sm:px-20 lg:px-32">
                    <h1 className="text-zinc-950 mb-10 text-center drop-shadow-2xl text-3xl lg:text-5xl font-semibold">
                        Our Team
                    </h1>
                    <div className="flex flex-row flex-wrap justify-evenly">
                        {team_info.map((item) => {
                            return <div className="p-1 w-96 h-auto mx-4 my-6 bg-blue-100 drop-shadow-2xl rounded-s-3xl rounded-t-3xl">
                                <img src={item.Image} alt={item.Name} className="w-36 h-36 mt-2 bg-black m-auto object-cover rounded-full drop-shadow-2xl" />
                                <div className="my-4">
                                    <h2 className="text-zinc-900 drop-shadow-2xl text-center text-2xl font-semibold">{item.Name}</h2>
                                    <p className="text-zinc-900 drop-shadow-2xl text-center text-lg font-normal">{item.Role}</p>
                                    <hr className="h-px my-2 mx-8 bg-zinc-400 border-0" />
                                    {item.Additionals.map((subroles) => {
                                        return <p className="text-zinc-900 drop-shadow-2xl text-center text-md font-normal">{subroles.subrole}</p>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}