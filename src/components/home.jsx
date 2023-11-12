import { Fragment } from "react"
import { Player, BigPlayButton, ControlBar } from "video-react"


export default function Home() {
    const video_src = "/media/introduction.mp4"

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
                            At Virtuality Lab, we elevate industries with metaverse
                            and XR tech for education, medical, and police training.
                        </p>
                        <a href="/about" className="rounded-full flex items-center justify-center
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
                    Discover the ITU campus from anywhere, anytime, and on any device with our immersive project.
                    Our platform offers a comprehensive tour of the historic Arfa Kareem Software Technology Park (ASTP) campus,
                    as well as a captivating 3D visualization of the forthcoming state-of-the-art ITU campus.
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <a className="rounded-full shadow-md duration-500 hover:bg-right hover:text-white text-zinc-900 my-5 sm:mx-10 lg:mx-20
                                flex items-center justify-center w-40 h-12 font-semibold text-md select-none cursor-pointer
                                bg-[length:200%] bg-gradient-to-r from-[#36D1DC] via-[#5B86E5] to-[#36D1DC]">
                        Try Project
                    </a>
                    <a className="rounded-full shadow-md duration-500 bg-right hover:bg-left hover:text-white text-zinc-900 my-5 sm:mx-10 lg:mx-20
                                flex items-center justify-center w-40 h-12 font-semibold text-md select-none cursor-pointer
                                bg-[length:200%] bg-gradient-to-l from-[#36D1DC] via-[#5B86E5] to-[#36D1DC]">
                        Try WebXR
                    </a>
                </div>
            </div>
        </Fragment>
    )
}