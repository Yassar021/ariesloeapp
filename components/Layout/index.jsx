import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Layout(props){
    const {children,pageTitle} = props;
    return ( 
       <>
       <Head>
            <title>Arieloe | {pageTitle}</title>
            <meta name="description" content="Ariesloe Studio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Box>
            {children}
        </Box>
        </>
    )
}