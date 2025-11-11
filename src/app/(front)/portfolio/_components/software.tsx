import React from "react";
import Projects from "./projects";

function Software() {
    return (
        <>
            <h1 className="text-2xl text-gray-700 text-center pb-2">Software</h1>
            <hr className="w-20 mb-6 bg-blue-400 border-blue-400 border mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6">
                <Projects
                    name="CoinSwap"
                    description="Coin exchange application that help with the ease of cash shortages and ensure proper cash flow"
                    link='/services/software'
                    image={'/images/coinswap.jpeg'}
                />
                <Projects
                    name="E-Store"
                    description="E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These e-commerce transactions typically fall within four types: business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business."
                    link='/services/software'
                    image={'/images/ecommerce.jpeg'}
                />
                <Projects
                    name="E-Education"
                    description="An electronic learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools, and resources to support and enhance education delivery and management. One type of eLearning software is a learning management system (LMS)."
                    link='/services/software'
                    image={'/images/e-learn.jpeg'}
                />
                <Projects
                    name="H.R Platform"
                    description="A digital employee experience platform, the technology is being used to make the employees more collaborative and better at communication. Unlike a human capital system, which is focused on managing employee data around their work, including payroll, timekeeping, and benefits.
                    "
                    link='/services/software'
                    image={'/images/crm.jpeg'}
                />
            </div>
        </>
    );
}

export default Software;
