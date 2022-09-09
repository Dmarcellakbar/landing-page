import { Box, Center, HStack } from '@chakra-ui/react'
import React from "react";
import times from "lodash/times";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
// import TokoLogo from '../../../assets/images/toko-logo.png';
// import EkuidLogo from '../../../assets/images/logo_ekuid.png';
// import IdrpLogo from '../../../assets/images/logo-idrp.png';
// import SurveinLogo from '../../../assets/images/logo-survein.png';
// import NanoLogo from '../../../assets/images/logo-nano.png';
// import RaizLogo from '../../../assets/images/raiz-colour.svg';
// import OndeLogo from '../../../assets/images/onde-logo.png';
// import JagoLogo from '../../../assets/images/jagoLogo.svg';
import LogoPartner from '../../../assets/images/logo-partner.png'

export default function Running() {
  return (
    <Box bg='#011C3F' p={0}>
        <Marquee gradient={false} speed={150}>
            <HStack>
                <Image
                    // width={'100%'}
                    src={LogoPartner}
                />
                <Image
                    // width={'100%'}
                    src={LogoPartner}
                />
                <Image
                    // width={'100%'}
                    src={LogoPartner}
                />
                <Image
                    // width={'100%'}
                    src={LogoPartner}
                />
                {/* <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'100%'}
                        height={'30%'}
                        src={TokoLogo}
                    />
                </Center>
                <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'100%'}
                        height={'20%'}
                        src={EkuidLogo}
                    />
                </Center>
                <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'30%'}
                        height={'30%'}
                        src={IdrpLogo}
                    />
                </Center>
                <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'100%'}
                        height={'25%'}
                        src={SurveinLogo}
                    />
                </Center>
                <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'100%'}
                        height={'40%'}
                        src={NanoLogo}
                    />
                </Center>
                <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'100%'}
                        height={'30%'}
                        src={RaizLogo}
                    />
                </Center>
                <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'100%'}
                        height={'50%'}
                        src={OndeLogo}
                    />
                </Center>
                <Center w='60px' h='70px' bg='transparent' color='white'>
                    <Image
                        width={'100%'}
                        height={'50%'}
                        src={JagoLogo}
                    />
                </Center> */}
            </HStack>
        </Marquee>
    </Box>
  )
}
