import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Register.css';
import '../styles/react-date.css';
import { AiOutlineLogin } from 'react-icons/ai';
const ProductField = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [productInfo, setProductInfo] = useState({
    productType: '',
    productName: '',
    tradenames: '',
    model: '',
    unit: '',
    price: '',
    classificationRisk: '',
    manufacturer: '',
    countryOfManufacture: '',
    owningCountry: '',
    ownerFirm: '',
    yearOfManufacture: '',
    origin: '',
    dateOfManufacture: '',
    expirationDate: '',
    NameOfBusinessAnnouncingPrice: '',
    contactPhoneNumber: '',
    businessAddress: '',
    quantity: '',
    productUrl: '',
    generalInfo: '',
    userManual: '',
  });

  // function handleChange(value) {
  //   console.log(`selected &{value}`);
  // }

  const handleImage = (e) => {
    setProductInfo({
      ...productInfo,
      productUrl: e.target.files[0],
    });
  };

  const handleOnSubmit = async (e) => {
    console.log(productInfo);
    let result = await fetch('http://localhost:8000/product', {
      method: 'post',
      body: JSON.stringify({ ...productInfo }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      alert('you have successfully register product ');
      setProductInfo({
        productType: '',
        productName: '',
        tradenames: '',
        model: '',
        unit: '',
        price: '',
        classificationRisk: '',
        manufacturer: '',
        countryOfManufacture: '',
        owningCountry: '',
        ownerFirm: '',
        yearOfManufacture: '',
        origin: '',
        dateOfManufacture: '',
        expirationDate: '',
        NameOfBusinessAnnouncingPrice: '',
        contactPhoneNumber: '',
        businessAddress: '',
        quantity: '',
        productUrl: '',
        generalInfo: '',
        userManual: '',
      });
    }
  };
  return (
    <Container maxW="1200px" bg={'white'} centerContent>
      <Box w={'96%'}>
        <Link to="/" display={'flex'} alignItems="center" mt={'8px'}>
          <AiOutlineLogin />
          <Text marginLeft={'4px'}>Quay l???i Trang ch???</Text>
        </Link>
        <Text color={'#003265'}>
          <b>Nh???p th??ng tin s???n ph???m</b>
        </Text>

        {/* BOX CHO THONG TIN TAI KHOAN   */}
        <Box w="100%">
          <fieldset className="fieldset__box">
            <legend className="fieldset__title">
              <b>Th??ng tin Ch??nh</b>
            </legend>
            <VStack w="100%" mb={'10px'} justifyContent={'space-between'}>
              <HStack w="100%" mb="10px">
                <HStack w="100%">
                  <FormControl w="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="ltb">
                          <b className="input__title">Lo???i s???n ph???m</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Select
                          id="type"
                          className="input__field"
                          size="sm"
                          placeholder="-- Ch???n Thu???c / Thi???t b??? y t??? --"
                          value={productInfo.productType}
                          onChange={(e) =>
                            setProductInfo({
                              ...productInfo,
                              productType: e.target.value,
                            })
                          }
                        >
                          <option value="Thu???c">Thu???c</option>
                          <option value="Thi???t b??? y t???">Thi???t b??? y t???</option>
                        </Select>
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="ttb">
                          <b className="input__title">T??n s???n ph???m</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="ttb"
                          type="ttb"
                          placeholder="Nh???p t??n s???n ph???m"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.productName}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              productName: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="ttm">
                          <b className="input__title">T??n th????ng m???i</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="ttm"
                          type="ttm"
                          placeholder="Nh???p t??n th????ng m???i"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.tradenames}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              tradenames: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </HStack>
              </HStack>
              <HStack w="100%" mb="10px">
                <HStack w="100%">
                  <FormControl w="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="model">
                          <b className="input__title">Model</b>
                          <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          id="model"
                          type="model"
                          size="sm"
                          placeholder="Nh???p model "
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.model}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              model: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="dvt">
                          <b className="input__title">????n v??? t??nh</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="dvt"
                          type="dvt"
                          placeholder="Nh???p ????n v??? t??nh"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.unit}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              unit: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="gia">
                          <b className="input__title">Gi?? (ch??a bao g???m VAT)</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="gia"
                          type="gia"
                          placeholder="Nh???p gi?? s???n ph???m"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.price}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              price: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </HStack>
              </HStack>
              <HStack w="100%" mb="10px">
                <HStack w="100%">
                  <FormControl w="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="pl">
                          <b className="input__title">Ph??n lo???i TTB theo ????? r???i ro </b>
                          <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          id="pl"
                          type="pl"
                          size="sm"
                          placeholder="Nh???p ph??n lo???i TTB theo ????? r???i ro"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.classificationRisk}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              classificationRisk: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="hsx">
                          <b className="input__title">H??ng s???n xu???t</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="hsx"
                          type="hsx"
                          placeholder="Nh???p h??ng s???n xu???t"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.manufacturer}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              manufacturer: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="nsx">
                          <b className="input__title">N?????c s???n xu???t</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="nsx"
                          type="nsx"
                          placeholder="Nh???p n?????c s???n xu???t"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.countryOfManufacture}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              countryOfManufacture: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </HStack>
              </HStack>
              <HStack w="100%" mb="10px">
                <HStack w="100%">
                  <FormControl w="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="nsh">
                          <b className="input__title">N?????c s??? h???u </b>
                          <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          id="nsh"
                          type="nsh"
                          size="sm"
                          placeholder="Nh???p n?????c s??? h???u"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.owningCountry}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              owningCountry: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="hsx">
                          <b className="input__title">H??ng ch??? s??? h???u</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="hsx"
                          type="hsx"
                          placeholder="Nh???p h??ng ch??? s??? h???u"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.ownerFirm}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              ownerFirm: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="nsx">
                          <b className="input__title">N??m s???n xu???t</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="nsx"
                          type="nsx"
                          placeholder="Nh???p n??m s???n xu???t"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.yearOfManufacture}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              yearOfManufacture: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </HStack>
              </HStack>
              <HStack w="100%" mb="10px">
                <HStack w="100%">
                  <FormControl w="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="xx">
                          <b className="input__title">Xu???t x??? </b>
                          <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          id="xx"
                          type="xx"
                          size="sm"
                          placeholder="Nh???p xu???t x???"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.origin}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              origin: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="date">
                          <b className="input__title">Ng??y s???n xu???t</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <DatePicker
                          className="input__field"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Nh???p s???n xu???t"
                          id="date-start"
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="date">
                          <b className="input__title">Ng??y h???t h???n</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <DatePicker
                          className="input__field"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Nh???p h???t h???n"
                          id="date-end"
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </HStack>
              </HStack>
              <HStack w="100%" mb="10px">
                <HStack w="100%">
                  <FormControl w="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="tdn">
                          <b className="input__title">T??n doanh nghi???p c??ng b??? gi?? </b>
                          <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          id="tdn"
                          type="tdn"
                          size="sm"
                          placeholder="Nh???p t??n doanh nghi???p c??ng b??? gi??"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.NameOfBusinessAnnouncingPrice}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              NameOfBusinessAnnouncingPrice: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="sdtlh">
                          <b className="input__title">S??? ??i???n tho???i li??n h???</b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="sdtlh"
                          type="sdtlh"
                          placeholder="Nh???p s??? ??i???n tho???i li??n h???"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.contactPhoneNumber}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              contactPhoneNumber: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl width="50%">
                    <Box className="box__field">
                      <Box>
                        <FormLabel htmlFor="dcdn">
                          <b className="input__title">?????a ch??? doanh nghi???p </b> <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <Input
                          className="input__field"
                          size="sm"
                          id="dcdn"
                          type="dcdn"
                          placeholder="Nh???p ?????a ch??? doanh nghi???p"
                          _placeholder={{ color: '#ccc' }}
                          value={productInfo.businessAddress}
                          onChange={(e) => {
                            setProductInfo({
                              ...productInfo,
                              businessAddress: e.target.value,
                            });
                          }}
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </HStack>
              </HStack>
              <HStack w="100%" mb="10px" margin={'12px 0'} justifyContent="center">
                <Box w={'390px'} h={'265px'} border="1px solid #26a9e0" borderRadius={'10px'} marginRight="12px">
                  <Image
                    src={
                      'data:image/png;base64,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'
                    }
                    h={'100%'}
                    alt=""
                    objectFit="fill"
                    p={6}
                  />
                </Box>
                <Input
                  colorScheme={'gray.200'}
                  h="30px"
                  p="0 15px"
                  color="black !important"
                  type={'file'}
                  w="120px"
                  onChange={handleImage}
                ></Input>
                <FormControl width="30%">
                  <Box className="box__field">
                    <Box>
                      <FormLabel htmlFor="soluong">
                        <b className="input__title">S??? L?????ng </b> <span style={{ color: 'red' }}>*</span>
                      </FormLabel>
                      <Input
                        className="input__field"
                        size="sm"
                        id="soluong"
                        type="soluong"
                        placeholder="Nh???p s??? l?????ng s???n ph???m"
                        mb={'12px'}
                        _placeholder={{ color: '#ccc' }}
                        value={productInfo.quantity}
                        onChange={(e) => {
                          setProductInfo({
                            ...productInfo,
                            quantity: e.target.value,
                          });
                        }}
                      />
                    </Box>
                  </Box>
                </FormControl>
              </HStack>
            </VStack>
          </fieldset>
        </Box>

        {/* BOX x??c y???u t??? khac */}
        <Box w="100%" mt={'12px'} mb={'34px'}>
          <fieldset className="fieldset__box">
            <legend className="fieldset__title">
              <b>C??c y???u t??? kh??c</b>
            </legend>
            <VStack w="100%" mb={'10px'} justifyContent={'space-between'}>
              <FormControl width="100%">
                <Box className="box__field">
                  <Box>
                    <FormLabel htmlFor="ttm">
                      <b className="input__title">Th??ng tin chung v??? thi???t b???</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Textarea
                      placeholder="Th??ng tin chung v??? thi???t b???"
                      value={productInfo.generalInfo}
                      onChange={(e) =>
                        setProductInfo({
                          ...productInfo,
                          generalInfo: e.target.value,
                        })
                      }
                    />
                  </Box>
                </Box>
              </FormControl>

              <FormControl width="100%">
                <Box className="box__field">
                  <Box>
                    <FormLabel htmlFor="ttm">
                      <b className="input__title">H?????ng d???n s??? d???ng</b> <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Textarea
                      placeholder=" H?????ng d???n s??? d???ng"
                      value={productInfo.userManual}
                      onChange={(e) =>
                        setProductInfo({
                          ...productInfo,
                          userManual: e.target.value,
                        })
                      }
                    />
                  </Box>
                </Box>
              </FormControl>
            </VStack>
          </fieldset>
        </Box>

        <Box>
          <Button onClick={() => handleOnSubmit()}> ????ng s???n ph???m </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductField;
