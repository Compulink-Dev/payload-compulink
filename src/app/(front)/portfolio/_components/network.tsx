import React from "react";
import Projects from "./projects";
function Networking() {
    return (
        <>
            <h1 className="text-2xl text-gray-700 text-center pb-2 pt-10">
                Networking
                <hr className="w-20 mb-6 bg-blue-400 border-blue-400 border mx-auto" />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6 mb-14">
                <Projects
                    name="Cabs Marondera"
                    description="The Society offers a diverse range of financial products and services that includes transaction and savings accounts, mobile banking, mortgage loans, money market investments, term deposits and pay-roll loans."
                    link='/services/networks'
                    image={'/images/cabs.png'}
                />
                <Projects
                    name="Old Mutual"
                    description="Old Mutual Zimbabwe provides financial solutions to individuals, small and medium-sized businesses, corporates and institutions."
                    link='/services/networks'
                    image={'/images/oldMutual.jpeg'}
                />
            </div>
        </>
    );
}

export default Networking;
