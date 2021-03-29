import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
import { listAppContent } from "lib/app";
import { filteredTagsAll } from "lib/tags";
import { filteredUserflowsAll } from "lib/userflows";
import Link from "next/link";
import ArrowIcon from "assets/icons/arrow.svg";
import Button from "components/sections/Button"


const IndexPage = () => {

    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <div className="w-11/12 mx-auto mt-5">
                    <Link href="/">
                        <a className=" ">
                            <Button type="secondary" size="lg">
                                <ArrowIcon className="inline-block mr-2" />
                             Back
                            </Button>
                        </a>
                    </Link>
                </div>

            <main className="lg:w-5/12 w-5/6 pt-24 mx-auto xl:relative">
                

                <div className="text-center">
                    <img src="/img/about.png" alt="" className="" />
                </div>

                <div className="py-4">
                    <h1 className="lg:text-5xl md:text-5xl sm:text-5xl text-3xl"><b>Tackling common design problems</b> in a decentralized industry</h1>
                </div>
                <div>
                    <p className="lg:text-2xl md:text-2xl sm:text-2xl text-base">Lorem ipsum dolor sit amet, consectetur adipiscing eli nullam eu nisi et orci posuere pretium ut eu nisi</p>
                </div>
                <div className="my-10 border-b border-solid border-gray-100 ">
                    <div className="mb-4 flex items-center">

                        <div className="w-10 h-10  border border-solid border-gray-100 rounded-full">
                            <img src="/img/max.png" alt="" />
                        </div>
                        <div className="mx-2 flex-grow">
                            <span>by <b>Maximilian Blazek</b></span>
                             <p className="text-gray-500 md:hidden sm:hidden lg:hiddens">January 28, 2021</p>
                        </div>


                        <div className="justify-end hidden lg:block md:block sm:block text-gray-500">
                            <p>January 28, 2021</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <p>When you text your friends, do you really understand how WhatsApp or Telegram works? Probably not, because text messaging has been built to be simple, useful, and quick for everyone to pick up. You are never faced with the complex infrastructure which lies behind those apps, just a polished, easy-to-use interface.
                    But what about decentralized apps (dApps)? Do you think about the underlying technology, or do you just see the interface? The answer inst so clear in this case, but it isn’t your fault. Often decentralized apps are built with complex interfaces that demand a knowledge of the underlying blockchain technology.
                    Many blockchain apps don’t match the UX standards of conventional consumer-focused apps.
                    While researching common UX pitfalls in blockchain apps, we realized how few free resources are available to start blockchain projects' design process.
                    For projects outside the blockchain space, designers and developers have an endless supply of UX/UI resources (like the ones found at designnotes.co). There's a whole world of resources for finding inspiration or UX best practices for nearly every niche app, website, or product. The exact opposite is true for the blockchain space — where we couldn't find anything similar. Blockchain is a technically complex subject that still in its infancy. So, most of the discussion on Blockchain user experiences occurs within developers' circles on platforms like GitHub, where seasoned UX designers rarely visit. The problem we see is that UX designers often have not been a part of the design, development, and problem-solving process of many blockchain applications. We are going to change this.
                    To make blockchain more accessible to everyone, there needs to be an open innovation process that facilitates discussions between developers and designers. By including designers in the development process of decentralized apps and providing a better starting point for common UX challenges in blockchain, we will improve the overall user experience of blockchain applications.
                    So, that's why we’re building NeueUX: to make blockchain for everyone.
NeueUX is an open-source platform that provides design resources and discusses common design patterns in a decentralized industry.</p>
                </div>

                <div className="pt-14">
                    <h5 className="text-xl font-bold pb-4">Industry Problems & Our Proposition</h5>
                    <p>When you text your friends, do you really understand how WhatsApp or Telegram works? Probably not, because text messaging has been built to be simple, useful, and quick for everyone to pick up. You are never faced with the complex infrastructure which lies behind those apps, just a polished, easy-to-use interface.
                    But what about decentralized apps (dApps)? Do you think about the underlying technology, or do you just see the interface? The answer inst so clear in this case, but it isn’t your fault. Often decentralized apps are built with complex interfaces that demand a knowledge of the underlying blockchain technology.
                    Many blockchain apps don’t match the UX standards of conventional consumer-focused apps.
                    While researching common UX pitfalls in blockchain apps, we realized how few free resources are available to start blockchain projects' design process.
                    For projects outside the blockchain space, designers and developers have an endless supply of UX/UI resources (like the ones found at designnotes.co). There's a whole world of resources for finding inspiration or UX best practices for nearly every niche app, website, or product. The exact opposite is true for the blockchain space — where we couldn't find anything similar. Blockchain is a technically complex subject that still in its infancy. So, most of the discussion on Blockchain user experiences occurs within developers' circles on platforms like GitHub, where seasoned UX designers rarely visit. The problem we see is that UX designers often have not been a part of the design, development, and problem-solving process of many blockchain applications. We are going to change this.
                    To make blockchain more accessible to everyone, there needs to be an open innovation process that facilitates discussions between developers and designers. By including designers in the development process of decentralized apps and providing a better starting point for common UX challenges in blockchain, we will improve the overall user experience of blockchain applications.
                    So, that's why we’re building NeueUX: to make blockchain for everyone.
NeueUX is an open-source platform that provides design resources and discusses common design patterns in a decentralized industry.</p>
                </div>

                <div className="pt-14">
                    <h5 className="text-xl font-bold pb-4">We believe many of these problems could be mitigated by a platform that offers the following resources:</h5>
                    <div className="list-outside list-disc mb-4">
                        <p><span className="mr-3 text-red-500">—</span> Blockchain UX case studies</p>
                        <p><span className="mr-3 text-red-500">—</span>Blockchain UX best practices</p>
                        <p><span className="mr-3 text-red-500">—</span>Collection of screenshots of popular blockchain applications</p>
                        <p><span className="mr-3 text-red-500">—</span>Blockchain specific iconography</p>
                        <p><span className="mr-3 text-red-500">—</span>Blockchain specific illustrations</p>
                        <p><span className="mr-3 text-red-500">—</span>Blockchain UI kit</p>
                        <p><span className="mr-3 text-red-500">—</span>Interviews with designers working in blockchain</p>
                        <p><span className="mr-3 text-red-500">—</span>Blockchain UX/UI specific news</p>
                    </div>

                    <p>These resources should make it easier for designers to work in the blockchain space. NeueUX provides a good starting point to learn about design issues in blockchain and offers resources that make the daily work of designing blockchain applications easier and faster. This won’t just simplify the design process for designers — developers will also benefit from this platform because they can discover the best (UX) practices and directly incorporate them into their applications. When NeueUX gets enough traction, it will spread awareness and enable discussion about common design patterns in a decentralized industry.</p>
                </div>

                <div className="pt-14">
                    <h5 className="text-xl font-bold pb-4">What’s Next?</h5>
                    <p>We received a grant from Moloch DAO to build this platform and create its first content, which we will gradually release in the upcoming weeks. We will continue producing content for NeueUX, however, our goal for the future is that it will become a decentralized platform supported by community-created content. Therefore, we backed a content contribution system directly into the site, which you can already check out here. If you are more comfortable with GitHub, you can also contribute content through GitHub pull-requests.</p>
                    <p className="mt-4">In the next couple of months, we hope to see this platform’s content library grow and together drive the inclusion of more people into the design and development process of blockchain apps forward!</p>
                </div>




            </main>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const apps = listAppContent(1, 30);
    const tags = filteredTagsAll(1, 30);
    const userflows = filteredUserflowsAll(1, 30);
    const pagination = {
        current: 1,
        pages: 1,
    };
    return {
        props: {
            apps,
            pagination,
            filter: {
                tags,
                userflows,
            },
        },
    };
};

export default IndexPage;
