import { Fragment } from "react"

export default function Team() {
    const team_info = [{
        Name: "Dr Ibrahim Ghaznavi",
        Image: "/Images/team/Sir Ibrahim.jfif",
        Role: "Founding Director",
        Additionals: [{ subrole: "Assistant Professor" }, { subrole: "XR/Metaverse Consultant" }]
    },
    {
        Name: "Zubaira Naz",
        Image: "/Images/team/Miss Zubaira.jpg",
        Role: "Co-Founding Director",
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
    }
    ]
    return <div className="repeating-background">
        <div className="p-10 pt-20 sm:px-20 lg:px-32">
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
}