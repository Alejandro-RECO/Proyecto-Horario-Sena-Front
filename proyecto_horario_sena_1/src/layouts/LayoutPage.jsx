
// sedeData viene de la carpeta data, la cual contiene el fetch del endpoint pasado por parametros

import { useState } from "react";

import { RiAddLine } from "react-icons/ri";
import { Tab } from '@headlessui/react'


const LayoutPage = ({title, children, desc})=>{
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    return(
    <Tab.Group>
        <div className="flex items-center justify-center font-bold tracking-wide text-gray-600 gap-4 flex-wrap">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 p-4 border-b-2 border-gray-300 w-full">
                <div className="flex flex-col">
                    <h1 className="uppercase text-3xl md:text-4xl text-secondary-900 md:text-start ">{title}</h1>
                    <p className="font-light text-base text-left">{desc}</p>
                </div>
                <Tab.List className="flex items-center justify-start gap-3 text-secondary-900 ">
                    <Tab
                    className={`p-2 rounded shadow-lg outline-none bg-primary text-white transition-colors `}
                    onClick={() => handleTabClick(0)}
                    >
                    REGISTRADOS
                    </Tab>
                    <Tab
                    className={`flex gap-2 items-center p-2 rounded shadow-lg outline-none bg-primary text-white transition-colors `}
                    onClick={() => handleTabClick(1)}
                    >
                    <RiAddLine className="text-2xl"/> AGREGAR
                    </Tab>
                </Tab.List>
            </div>
                {children}
        </div>
    </Tab.Group>
    )
}

export default LayoutPage;