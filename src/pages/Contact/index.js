import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Input,
  TextArea,
  Button,
  Line,
} from "components";

const ContactPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-spectralsc items-center justify-end mx-[auto] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <header className="w-[78%]">
          <Row className="items-center p-[3px] w-[100%]">
            <Img
              src="images/img_close.svg"
              className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] ml-[3px] lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"
              alt="close"
            />
            <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-red_400 w-[auto]">
              Nexus
            </Text>
            <Stack className="font-sourcesanspro lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[399px] xl:ml-[457px] 2xl:ml-[514px] 3xl:ml-[617px] mt-[1px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] w-[39%]">
              <Row className="absolute items-center justify-between right-[0] top-[0] w-[67%]">
                <Text className="font-bold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  About
                </Text>
                <Text className="font-bold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  Works
                </Text>
                <Text className="font-bold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_400 w-[auto]">
                  Contact
                </Text>
              </Row>
              <Column className="absolute bottom-[0] inset-x-[0] mx-[auto] w-[87%]">
                <Text className="font-bold lg:mr-[260px] xl:mr-[298px] 2xl:mr-[335px] 3xl:mr-[402px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  Home
                </Text>
                <div className="bg-red_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[290px] xl:ml-[332px] 2xl:ml-[374px] 3xl:ml-[449px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
              </Column>
            </Stack>
          </Row>
        </header>
        <Column className="font-sourcesanspro items-center lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[83%]">
          <Stack className="bg-blue_50 lg:h-[503px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] lg:px-[32px] xl:px-[37px] 2xl:px-[42px] 3xl:px-[50px] rounded-radius90 w-[100%]">
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[66%]">
              <Text className="font-bold lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-black_900 w-[auto]">
                <span className="text-black_900 font-sourcesanspro">
                  Get in{" "}
                </span>
                <span className="text-red_400 font-sourcesanspro">touch</span>
              </Text>
              <Text className="font-normal lg:leading-[31px] xl:leading-[35px] 2xl:leading-[40px] 3xl:leading-[48px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[82px] 3xl:mt-[98px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_700 w-[100%]">
                Stay connected with us, we will help you with your various
                needs. we will provide the best service in technical and
                consulting matters. You can provide your needs or something you
                ask in the form below
              </Text>
            </Column>
            <Img
              src="images/img_group767.svg"
              className="absolute lg:h-[297px] xl:h-[339px] 2xl:h-[382px] 3xl:h-[458px] inset-[0] justify-center m-[auto] w-[89%]"
              alt="Group767"
            />
          </Stack>
          <Row className="items-center justify-between 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
            <Stack className="bg-white_A700 lg:h-[466px] xl:h-[533px] 2xl:h-[600px] 3xl:h-[720px] 3xl:px-[104px] lg:px-[67px] xl:px-[77px] 2xl:px-[87px] rounded-radius20 shadow-bs4 w-[66%]">
              <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:pb-[56px] xl:pb-[64px] 2xl:pb-[72px] 3xl:pb-[86px] rounded-radius5 w-[74%]">
                <Input
                  className="font-bold p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Group280"
                  placeholder="Send Message"
                  size="md"
                ></Input>
                <Column className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius5 w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Input
                      className="font-bold p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                      wrapClassName="w-[47%]"
                      type="text"
                      name="Group750"
                      placeholder="Your Name"
                      shape="RoundedBorder5"
                      variant="FillGray100"
                    ></Input>
                    <Input
                      className="font-bold p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                      wrapClassName="w-[47%]"
                      type="email"
                      name="Group751"
                      placeholder="Your Email"
                      shape="RoundedBorder5"
                      variant="FillGray100"
                    ></Input>
                  </Row>
                  <TextArea
                    className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    name="Group748"
                    placeholder="Your Message"
                  ></TextArea>
                </Column>
              </Column>
              <Button
                className="absolute bottom-[1%] font-normal left-[2%] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[23%]"
                shape="CircleBorder25"
                size="sm"
              >
                Send
              </Button>
            </Stack>
            <Column className="bg-white_A700 lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius20 shadow-bs4 w-[32%]">
              <Input
                className="font-bold p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="2xl:mt-[46px] 3xl:mt-[55px] lg:mt-[35px] w-[87%] xl:mt-[40px]"
                name="Group762"
                placeholder="Contact Information"
                size="lg"
              ></Input>
              <Row className="ml-[4px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[58%]">
                <Img
                  src="images/img_vector.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[12%]"
                  alt="Vector"
                />
                <Text className="font-semibold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_402 w-[auto]">
                  hello@nexus.com
                </Text>
              </Row>
              <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[55%]">
                <Img
                  src="images/img_globe.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                  alt="globe"
                />
                <Text
                  className="common-pointer font-semibold lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[3px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_402 w-[auto]"
                  onClick={handleNavigate1}
                >
                  www.nexus.com
                </Text>
              </Row>
              <Row className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[73%]">
                <Img
                  src="images/img_location.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[7%]"
                  alt="location"
                />
                <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] mt-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_402 w-[auto]">
                  Sudirman street, holgan, melbourne
                </Text>
              </Row>
              <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[42%]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                  alt="call"
                />
                <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] mt-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_402 w-[auto]">
                  0361 - 8878
                </Text>
              </Row>
              <Text className="font-bold lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 w-[auto]">
                Social Media
              </Text>
              <Line className="bg-gray_200 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[87%]" />
              <Row className="items-center justify-center lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[80%]">
                <Img
                  src="images/img_group270.png"
                  className="lg:h-[37px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] lg:w-[36px] xl:w-[41px] 2xl:w-[47px] 3xl:w-[56px]"
                  alt="Group270"
                />
                <Img
                  src="images/img_group271.png"
                  className="lg:h-[37px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:w-[36px] xl:w-[41px] 2xl:w-[47px] 3xl:w-[56px]"
                  alt="Group271"
                />
                <Img
                  src="images/img_group268.png"
                  className="lg:h-[37px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:w-[36px] xl:w-[41px] 2xl:w-[47px] 3xl:w-[56px]"
                  alt="Group268"
                />
                <Img
                  src="images/img_group269.png"
                  className="lg:h-[37px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:w-[36px] xl:w-[41px] 2xl:w-[47px] 3xl:w-[56px]"
                  alt="Group269"
                />
              </Row>
            </Column>
          </Row>
        </Column>
        <Column className="xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] pr-[1px] w-[92%]">
          <footer className="bg-gray_800 rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[100%]">
            <Row className="lg:ml-[115px] xl:ml-[132px] 2xl:ml-[149px] 3xl:ml-[178px] lg:mr-[36px] xl:mr-[41px] 2xl:mr-[47px] 3xl:mr-[56px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[85%]">
              <Column className="w-[76%]">
                <Row className="font-spectralsc items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[90%]">
                  <Img
                    src="images/img_close.svg"
                    className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"
                    alt="close One"
                  />
                  <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                    Naxus
                  </Text>
                  <Stack className="font-sourcesanspro lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] lg:ml-[206px] xl:ml-[235px] 2xl:ml-[265px] 3xl:ml-[318px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pr-[4px] w-[15%]">
                    <Column className="absolute h-[max-content] inset-y-[0] left-[1%] my-[auto] pb-[2px] w-[89%]">
                      <Text className="font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 w-[auto]">
                        ABOUT
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                        About
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                        What we do
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                        Works
                      </Text>
                      <Text className="font-semibold ml-[1px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                        Testimonial
                      </Text>
                    </Column>
                    <Line className="absolute bg-deep_orange_A100 h-[2px] left-[0] top-[13%] w-[40%]" />
                  </Stack>
                  <Column className="font-sourcesanspro 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] py-[2px] w-[18%]">
                    <Text className="font-bold mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 w-[auto]">
                      FOLLOW US
                    </Text>
                    <Line className="bg-deep_orange_A100 h-[2px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[33%]" />
                    <Text className="font-semibold lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                      Dribbble
                    </Text>
                    <Text className="font-semibold lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                      Instagram
                    </Text>
                    <Text className="font-semibold lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                      Behance
                    </Text>
                    <Text className="font-semibold lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                      Pinterest
                    </Text>
                  </Column>
                </Row>
                <Text className="font-bold font-sourcesanspro lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                  Oracle Brand - All Rights Reserved
                </Text>
              </Column>
              <Img
                src="images/img_group710.svg"
                className="lg:h-[242px] xl:h-[277px] 2xl:h-[312px] 3xl:h-[374px] xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] lg:mt-[87px] w-[24%]"
                alt="Group710"
              />
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default ContactPage;
