"use client";
import { useState } from "react";
import Strings from "./Strings";
import StringsWrapper from "./StringsWrapper";


const Tuner = () => {
    const [selectedInstrument, setSelectedInstrument] = useState<string>("guitar");

    return (
        <div className="max-w-6xl xl:mx-auto sm:mx-10 mx-5 mt-5">
            <section className="flex justify-between mb-5">
                <div className="flex gap-x-5">
                    <div className="w-6 h-6 rounded-md rotate-45 bg-linear-[135deg,oklch(0.72_0.19_340),oklch(0.62_0.19_300),oklch(0.68_0.19_250)]"></div>
                    <p className="font-extrabold text-lg">Music Buddy</p>
                </div>
                <select value={selectedInstrument} onChange={(e) => setSelectedInstrument(e.target.value)} className="tuner-select text-sm border rounded-xl py-2.5 px-4">
                    <option value="guitar">Guitar</option>
                    <option value="bass">Bass</option>
                    <option value="violin">Violin</option>
                    <option value="ukelele">Ukelele</option>
                </select>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-[360px_1fr] max-w-6xl gap-6">
                <div className="bg-glass border border-white/9 h-96 flex flex-col order-2 md:order-1 rounded-3xl p-6 gap-5">
                    <p className="text-xs text-grey font-bold tracking-widest">STRINGS</p>
                   <StringsWrapper selectedInstrument={selectedInstrument} />
                </div>
                <div className="bg-glass border border-white/9 h-96 flex flex-col order-1 md:order-2 rounded-3xl">Rectangle 2</div>
            </section>
        </div>
    )
}

export default Tuner;