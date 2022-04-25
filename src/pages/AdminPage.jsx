import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle, AiOutlineFileSearch } from 'react-icons/ai';
import '../styles/AdminPage.css';

AdminPage.propTypes = {};

const CompanyList = (props) => {
  return (
    <Box className="body__box">
      <Box className="box__body-left">
        <Box className="box__content-header">
          <Text className="content__title">Tên doanh nghiệp </Text>
          <span>:</span>
          <Text>{props.businessName}</Text>
        </Box>
        <Box className="main__content">
          <Box>
            <Box className="content">
              <Text className="content__title">Mã số thuế </Text>
              <span>:</span>
              <Text>{props.taxcode}</Text>
            </Box>
            <Box className="content">
              <Text className="content__title">Email </Text>
              <span>:</span>
              <Text>{props.email}</Text>
            </Box>
            <Box className="content">
              <Text className="content__title">Địa chỉ ví </Text>
              <span>:</span>
              <Text w={'64%'}>{props.walletAddress}</Text>
            </Box>
          </Box>
          <Box>
            <Box className="content">
              <Text className="content__title">Người Đại Diện </Text>
              <span>:</span>
              <Text>{props.representName}</Text>
            </Box>
            <Box className="content">
              <Text className="content__title">Số Điện Thoại </Text>
              <span>:</span>
              <Text>{props.representPhone}</Text>
            </Box>
            <Box className="content">
              <Text className="content__title">Chức Vụ </Text>
              <span>:</span>
              {props.representPosition ? <Text>{props.representPosition}</Text> : null}
            </Box>
          </Box>
          <Box>
            <Box className="content">
              <Text className="content__title">Fax </Text>
              <span>:</span>
              <Text>{props.businessFax}</Text>
            </Box>
            <Box className="content">
              <Text className="content__title">Tên giao dịch quốc tế </Text>
              <span>:</span>
              <Text>{props.businessNameInternational}</Text>
            </Box>
            <Box className="content">
              <Button className="button__view" leftIcon={<AiOutlineFileSearch fontSize={'24px'} color="white" />}>
                Giấy phép kinh doanh
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="box__body-right">
        <Button
          className="button__accept"
          leftIcon={<AiFillCheckCircle color="white" fontSize={'20px'} fontWeight="700" onClick={'console.log()'} />}
        >
          Đồng ý
        </Button>
        <Button
          className="button__refuse"
          leftIcon={<AiFillCloseCircle color="white" fontSize={'20px'} fontWeight="700" />}
        >
          Từ chối
        </Button>
      </Box>
    </Box>
  );
};

function AdminPage(props) {
  const [data, setData] = useState([
    {
      taxcode: '',
      email: '',
      representName: '',
      representPosition: '',
      representPhone: '',
      representId: '',
      daterange: '',
      issuedby: '',
      businessName: '',
      businessNameInternational: '',
      businessAddress: '',
      businessPhone: '',
      businessFax: '',
      walletAddress: '',
    },
  ]);

  const getData = async (e) => {
    let result = await fetch('http://localhost:8000/user/provider/getall', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    setData(result.provider);
    console.log(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box w="100%" height="1400px">
      <Box className="box__container">
        <Text className="container__header">Danh Sách Doanh Nghiệp Đăng Ký</Text>
        {data.map((e) => {
          return (
            <CompanyList
              businessName={e.businessName}
              taxcode={e.taxcode}
              email={e.email}
              walletAddress={e.walletAddress}
              representName={e.representName}
              representPhone={e.representPhone}
              representPosition={e.representPosition}
              businessFax={e.businessFax}
              businessNameInternational={e.businessNameInternational}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default AdminPage;
