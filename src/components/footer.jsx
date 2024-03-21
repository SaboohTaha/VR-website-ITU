export default function Footer() {
    return <>
        <footer className="bg-blue-900 text-blue-100 py-4 px-10 sm:py-6 sm:px-20 lg:py-8 lg:px-32 flex flex-row flex-wrap justify-between space-x-2 space-y-6">
            <div className="flex flex-shrink-0 items-center">
                <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="VR Lab logo"
                />
                <p className='text-blue-100 mx-8 text-md font-semibold'>ITU Virtuality Labs</p>
            </div>
            <div>
                <h2 className="text-blue-100 text-md font-bold mb-2">
                    Contact Us
                </h2>
                <p className="text-blue-100">🖂 virtualitylabs@itu.edu.pk</p>
                <p className="text-blue-100">📞 (042) 99046061</p>
            </div>
            <div>
                <h2 className="text-blue-100 text-md font-bold mb-2">
                    Address
                </h2>
                <p className=" max-w-md text-blue-100">Information Technology University (ITU) 6th Floor, Arfa Software Technology Park 346-B, Ferozepur Road, Lahore</p>
            </div>
        </footer>
    </>
}
