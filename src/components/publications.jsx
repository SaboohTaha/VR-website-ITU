
export default function Publications() {
    const publications_info = [
        {
            title: "Photorealistic avatars to enhance the efficacy of Self-attachment psychotherapy",
            description: "We have designed, developed, and tested an Immersive virtual reality (VR) platform to practice the protocols of Self-attachment psychotherapy. We made use of customized photorealistic avatars for the implementation of both the high-end version (based on Facebook's Oculus) and the low-end version (based on Google's cardboard) of our platform. Under the Self-attachment therapeutic framework, the causes of mental disorders such as chronic anxiety and depression are traced back to the individual's insecure attachment with their primary caregiver during childhood and their subsequent problems in affect regulation. The conventional approach (without VR) to Self-attachment requires that the individual uses their childhood photographs to recall their childhood memories and then imagine that the child that they were is present with them. They thus establish a compassionate relationship with their childhood self and then, using love songs and dancing, create an affectional bond with them. Their adult self subsequently role plays a good parent and interacts with their imagined childhood self to perform various developmental and re-parenting activities to earn secure attachment. Our immersive virtual reality platform enables the users to interact with their customized 3D photorealistic childhood avatar in the VR. The platform takes advantage of the itSeez3D Avatar SDK for generating a customized photorealistic 3D avatar head from a 2D childhood image of the user. Furthermore, it allows modifications to the avatar body (height/ width) and clothing color. A study to compare the use of the avatar based approach (VR) to Self-attachment with the conventional photo based approach showed promising results; 85% of the participants reported that their photorealistic childhood avatar in VR was more relatable than their childhood photo.",
            link: "https://www.computer.org/csdl/proceedings-article/aivr/2020/746300a060/1qpzCwDcDKM",
        },
        {
            title: "Usability evaluation of an immersive virtual reality platform for Self-attachment psychotherapy",
            description: "Virtual Reality (VR) is the state-of-the-art human-computer interface; it uses computer graphics to create a realistic-looking virtual world that the user can interact with in real-time. Recent advances in VR have shown promise in the pursuit of devising new techniques to combat mental disorder(s). Harnessing the power of VR, we have developed a customiseds immersive virtual reality platform to practise protocols of selfattachment psychotherapy. Consumer-level VR is a recent phenomenon; for wide scale adaptation of such platforms it is important that they are built taking into account usability engineering principles specific to virtual environments (VE). In this work, we share our experience applying systematic heuristic and formative evaluations to our VR platform to make it more usable. The participants who evaluated our platform were asked (via a follow-up questionnaire) to rate their level-of-immersion, learn-ability and overall usability of the platform. Insights from our usability evaluation could help developers build better and more usable psycho-therapeutic VR platforms in the future.",
            link: "http://mentalhealth.media.mit.edu/wp-content/uploads/sites/15/2019/04/CMH2019_paper_45.pdf",
        },
        {
            title: "Immersive Virtual reality platform for Self-attachment psychotherapy",
            description: "Psychotherapy is among the most effective techniques for combating mental health issues, and Virtual Reality is beginning to be explored as a way to enhance the efficacy of various psychotherapeutic treatments. In this work, we propose an Immersive Virtual Reality platform for Self-Attachment psychotherapy. Under the Self-Attachment therapeutic framework, the causes of disorders such as chronic anxiety and depression are traced back to the quality of the individual's attachment with their primary caregiver during childhood. Our proposed platform aims to assist the user in enhancing their capacities for self-regulation of emotion, by means of earning secure attachment through the experience of positive attachment interactions, missed in their childhood. In the virtual environment provided by the platform, the adult-self of the user learns to create and strengthen an affectional and supportive bond with the inner-child. It is hypothesised that by long term potentiation and neuroplasticity, the user gradually develops new neural pathways and matures into an effective secure attachment object for the inner-child, thereby enabling the self-regulation of emotions.",
            link: "https://spiral.imperial.ac.uk:8443/handle/10044/1/46191",
        },
        {
            title: "Rescue Base Station - RBS",
            description: "Rescue Base Station (RBS) is a drop-in, solar power compatible, open-source GSM communication system for scenarios where a large-scale calamity disrupts traditional modes of communication. The system operates using asynchronously connected autonomous nodes and gathers useful information from users, eventually synchronizing this data across the network using distributed network protocols. It connects people through conventional GSM services allowing calls, SMS and smart phone features when available. The networks also provides a series of services for use during a disaster, such as intelligent call routing, attribute based search on different characteristics (name, occupation and blood group), voice-mail services, SMS broadcast alerts, and emergency short-codes, through which a victim can contact available doctors, fire fighters, police and rescue workers.",
            link: "http://ibrahimghaznavi.com/paper/Rescue%20Base%20Station.pdf",
        },
        {
            title: "Village Apps",
            description: "Village apps is a platform to educate underprivileged communities in their mother tongue. It consists of a web and a mobile application; the web application provides an interface to upload content and record its page by page audio translation; the mobile application provides an interface to view each page and simultaneously listen to its audio translation.",
            link: "http://ibrahimghaznavi.com/paper/Village%20Apps.pdf",
        },
        {
            title: "SpeakMyText",
            description: "SpeakMyText is an android app which enables reading-illiterates understand written text. It automatically registers users without requiring any signup/login. It provides a 2-click interface to let its users upload images of the documents, forms, newspaper etc. There is also an interface for the volunteer translators to view the uploaded images and simultaneously submit their audio recordings, which are then played back to the users. The app requires an internet connection; however, it has been tested to work responsively on a 2.5G GPRS connection.To learn more, download the app from google playstore.",
            link: "https://dl.acm.org/citation.cfm?id=2998597",
        },
    ]
    return <>
        <div className="p-10 pt-20 sm:px-20 lg:px-32">
            <h1 className="text-zinc-950 mb-10 text-center drop-shadow-2xl text-3xl lg:text-5xl font-semibold">
                Publications
            </h1>
            <div className="flex flex-col flex-wrap space-y-6 justify-evenly ">
                {publications_info.map((item) => {
                    return <div className="w-full px-8 py-4 bg-blue-50 rounded-lg overflow-hidden shadow-sm">
                        <h1 className="text-zinc-950 text-center text-lg lg:text-xl font-semibold">
                            {item.title}
                        </h1>
                        <hr class="h-px my-4 border-0 bg-zinc-700/20"></hr>
                        <p className="text-zinc-900 drop-shadow-2xl text-justify text-sm lg:text-md font-normal lg:basis-4/5">
                            {item.description}
                        </p>
                        <center>
                            <a href={item.link} target="_" className="text-blue-700 hover:text-white border transition-colors duration-300 inline-block my-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-4 text-center">Publication</a>
                        </center>
                    </div>
                })}
            </div>
        </div>
    </>
};