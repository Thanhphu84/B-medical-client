import { CloseIcon, EmailIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useActiveWeb3React } from 'hooks/useActiveWeb3React';
import React, { useEffect, useState } from 'react';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { FaInfoCircle } from 'react-icons/fa';
import { GiMedicalPack, GiMedicines, GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
// import { getOrdering, getOwners, mintNFT } from "utils/callContract";
import '../styles/Home.css';

const Home = () => {
  const { account, library } = useActiveWeb3React();

  const [nft, setNFT] = useState();
  const [minting, setMinting] = useState(false);
  const [nftOrdering, setNftOrdering] = useState([]);
  const [owners, setOwners] = useState([]);

  // useEffect(() => {
  //   (() => {
  //     if (!account || !library) return;
  //     getOwners(library, account).then(setOwners).catch(console.error);
  //   })();
  // }, [account, library]);
  // useEffect(() => {
  //   if (!library) return;
  //   getOrdering(library)
  //     .then((res) => res && setNftOrdering(res))
  //     .catch(console.error);
  //   console.log(nftOrdering);
  // }, [library]);

  // const handleMintNFT = async () => {
  //   if (!account || !library) return alert("please connect wallet");
  //   //connect the wallet is require
  //   if (!nft) return alert("please choose a nft image");
  //   try {
  //     setMinting(true);
  //     await mintNFT(library, account, nft);
  //     alert("mint success");
  //     setMinting(false);
  //   } catch (error) {
  //     console.log(error);
  //     setMinting(false);
  //     if (error.data?.message) {
  //       alert(error.data.message);
  //     }
  //   }
  // };

  const NFTList = () => {
    return (
      <Link to="/nft/1">
        <GridItem w="100%" bg="transparent" border="1px" borderRadius={'6px'} borderColor={'gray.400'} p={'14px'}>
          <VStack>
            <Center>
              <Box boxSize={'180px'}>
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Box>
            </Center>
            <Box>
              <Text color={'#1890ff'} mb={'8px'}>
                <b>M??y x??t nghi???m sinh h??a t??? ?????ng - BS-360E</b>
              </Text>
              <Text color={'gray.500'} fontSize={'14px'}>
                <b>Model</b>: BS-360E
              </Text>
              <Text color={'gray.500'} fontSize={'14px'}>
                <b>HSX</b>: Shenzhen Mindray Bio-Medical Electronics Co., Ltd.
              </Text>
              <Text color={'gray.500'} fontSize={'14px'}>
                <b>C??ng ty</b>: C??ng ty TNHH V???n Ni??n
              </Text>
              <Text color={'red.500'} fontSize={'24px'}>
                <b>
                  530.000.000<sup>VND</sup>
                </b>
              </Text>
              <Text color={'black'} fontSize={'14px'}>
                (Gi?? ???? bao g???m VAT)
              </Text>
              <Button
                border="1px"
                borderColor={'9dc2ff'}
                colorScheme="teal"
                leftIcon={<FaInfoCircle />}
                variant="solid"
                fontSize={'14px'}
                display={'block'}
                mt="8px"
              >
                Th??ng tin chi ti???t
              </Button>
            </Box>
          </VStack>
        </GridItem>
      </Link>
    );
  };
  const property = [
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
    },
  ];

  const MedicinePopular = () => {
    return (
      <Link to="/nft/1">
        <GridItem w="100%" bg="transparent" border="1px" borderRadius={'6px'} borderColor={'gray.400'} p={'14px'}>
          <VStack>
            <Center>
              <Box>
                <Image
                  src="https://nhathuocngocanh.com/wp-content/uploads/2018/04/paracetamol-e1523184921509.jpg"
                  alt="Paracetamol"
                />
              </Box>
            </Center>
            <Box>
              <Text color={'#1890ff'} mb={'8px'}>
                <b>Thu???c Paracetamol</b>
              </Text>
            </Box>
          </VStack>
        </GridItem>
      </Link>
    );
  };

  const EquipmentPopular = () => {
    return (
      <Link to="/nft/1">
        <GridItem w="100%" bg="transparent" border="1px" borderRadius={'6px'} borderColor={'gray.400'} p={'14px'}>
          <VStack>
            <Center>
              <Box>
                <Image
                  src="https://vuhoangtelecom.vn/wp-content/uploads/2021/12/kit-test-nhanh-covid-19-qua-mui-humasis-5.jpg"
                  alt="Que Test Nhanh"
                />
              </Box>
            </Center>
            <Box>
              <Text color={'#1890ff'} mb={'8px'}>
                <b>Kit test nhanh Covid-19 qua m??i Humasis (1 c??i)</b>
              </Text>
            </Box>
          </VStack>
        </GridItem>
      </Link>
    );
  };
  // HOME- content

  return (
    <Box>
      {/* HEADER */}
      <HStack mb={'34px'}>
        <Box className="box__header">
          <Center>
            <Link to="/" cursor={'pointer'} onClick={() => console.log('Click')}>
              <p className="header__link">Trang ch???</p>
            </Link>

            <span className="header__space">/</span>
            <Link to="/register" cursor={'pointer'}>
              <p className="header__link">????ng k?? th??nh vi??n</p>
            </Link>

            <span className="header__space">/</span>
            <Link to="/product-field" cursor={'pointer'} onClick={() => console.log('Click')}>
              <p className="header__link">Cung c???p th??ng tin s???n ph???m</p>
            </Link>

            <span className="header__space">/</span>
            <Link to="/:account" cursor={'pointer'} onClick={() => console.log('Click')}>
              <p className="header__link">S???n ph???m ???? mua</p>
            </Link>
          </Center>

          <Center bgColor={'white'} borderRadius={'5px'}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
              <Input
                type="tel"
                color={'black'}
                height={'40px'}
                _placeholder={{ color: 'gray.200' }}
                placeholder="T??m ki???m"
              />
              <InputRightElement children={<CloseIcon color="gray.300" />} />
            </InputGroup>
          </Center>
          <Box>
            <Button className="header__looking" colorScheme="teal" variant="solid">
              T??m ki???m n??ng cao
            </Button>
          </Box>
        </Box>
      </HStack>

      {/* THUOC  */}
      <Box mb={'34px'}>
        <Box className="box__medicine">
          <Box className="box__medicine-header">
            <Box className="box__medicine-left">
              <GiHamburgerMenu color="#382e87" fontSize={'26px'} />
              <Text>Thu???c ( C?? th??? b???n ??ang t??m ) </Text>
            </Box>
            <Box className="box__medicine-right">
              <Link>Xem t???t c???</Link>
            </Box>
          </Box>
          <Box className="box__medicine-content">
            <MedicinePopular />
            <MedicinePopular />
            <MedicinePopular />
            <MedicinePopular />
            <MedicinePopular />
          </Box>
        </Box>
      </Box>

      {/* BOX THIET BI */}
      <Box mb={'34px'}>
        <Box className="box__medicine">
          <Box className="box__medicine-header">
            <Box className="box__medicine-left">
              <GiHamburgerMenu color="#382e87" fontSize={'26px'} />
              <Text>Thi???t b??? y t??? ( C?? th??? b???n ??ang t??m ) </Text>
            </Box>
            <Box className="box__medicine-right">
              <Link>Xem t???t c???</Link>
            </Box>
          </Box>
          <Box className="box__medicine-content">
            <EquipmentPopular />
            <EquipmentPopular />
            <EquipmentPopular />
            <EquipmentPopular />
            <EquipmentPopular />
          </Box>
        </Box>
      </Box>

      {/* BOX CHUNG */}
      <Box className="box__container">
        <Box className="box__container-header">
          <Box className="box__container-left">
            <BsFillMenuButtonWideFill className="box__icon" />
            <Text className="box__title">C??c trang thi???t b??? y t???, thu???c hi???n c??</Text>
          </Box>
          <Box className="box__container-right">
            <Button className="box__button" leftIcon={<GiMedicalPack />}>
              Thi???t b??? y t???
            </Button>

            <Button className="box__button" leftIcon={<GiMedicines />}>
              Thu???c
            </Button>
            <Select
              id="province"
              className="input__field"
              size="sm"
              placeholder="L???c Theo ..."
              width={'30%'}
              height="40px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>
        <Grid bg="white" templateColumns="repeat(4, 1fr)" gap={6}>
          <NFTList />
          <NFTList />
          <NFTList />
          <NFTList />
          <NFTList />
          <NFTList />
          <NFTList />
          <NFTList />
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
