

const Tuner = () => {
    return (
        <div className="max-w-6xl mx-10 mt-5">
            <section className="flex justify-between mb-5">
                <div className="flex gap-x-5">
                    <div className="w-6 h-6 rounded-md rotate-45 bg-linear-[135deg,oklch(0.72_0.19_340),oklch(0.62_0.19_300),oklch(0.68_0.19_250)]"></div>
                    <p className="font-extrabold text-lg">Music Buddy</p>
                </div>
                {/* TODO: Fix font in select dropdown */}
                <select className="text-sm bg-white/6 border rounded-xl py-2.5 px-4">
                    <option>Guitar</option>
                    <option>Bass</option>
                    <option>Violin</option>
                    <option>Ukelele</option>
                </select>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-[360px_1fr] max-w-6xl gap-6">
                <div className="bg-white/4.5 h-96 flex flex-col order-2 md:order-1 rounded-3xl">
                    <p>Rectangle 1</p>
                </div>
                <div className="bg-white/4.5 h-96 flex flex-col order-1 md:order-2 rounded-3xl">Rectangle 2</div>
            </section>
        </div>
    )
}

export default Tuner;