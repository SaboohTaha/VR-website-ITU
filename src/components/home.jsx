import { Fragment } from "react"
import { Player, BigPlayButton, ControlBar } from "video-react"


export default function Home() {
    const video_src = ""

    return (
        <Fragment>
            <div className="home-gradient h-auto p-20 w-full gap-x-12">
                <div className="grid lg:grid-cols-2 h-auto sm:mx-20 place-items-center">
                    <div className="lg:mx-20">
                        <h1 className="text-zinc-900 drop-shadow-2xl text-left text-3xl lg:text-5xl font-semibold">Virtuality Labs ITU</h1>
                        <p className="text-zinc-900 drop-shadow-2xl my-12 xl:my-12 lg:my-8 text-justified text-base lg:text-lg font-medium">At Virtuality Lab, we elevate industries with metaverse and XR tech for education, medical, and police training.</p>
                        <a href="/about" className="rounded-full flex items-center justify-center w-40 h-12 tracking-wider font-medium bg-blue-200 transition text-md select-none cursor-pointer duration-300 hover:bg-blue-600 hover:text-white">Learn more</a>
                    </div>
                    <Player fluid={true} muted={true} src={video_src} className="mt-10 rounded-xl overflow-hidden">
                        <BigPlayButton position="center" />
                        <ControlBar />
                    </Player>
                </div>
            </div>
        </Fragment>
    )
}