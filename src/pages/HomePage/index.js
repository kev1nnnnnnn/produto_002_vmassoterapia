import React from "react";
import { Navbar }   from "../../components/Navbar";
import { Carousel } from "../../components/Carousel";
import { Works }    from "../../components/Works";

export function HomePage() {

    return(
       <>
       <Navbar />
       <Carousel />
       <Works />
       </>
    )
}