import React from "react";

import { Column, Row, Img, Text, Stack, Button, List, Line } from "components";

const HomepagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-sourcesanspro items-center justify-end mx-[auto] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <header className="w-[77%]">
          <Row className="items-center p-[3px] w-[100%]">
            <Img
              src="images/img_close.svg"
              className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] ml-[3px] my-[3px] lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"
              alt="close"
            />
            <Text className="font-bold font-spectralsc lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-red_400 w-[auto]">
              Nexus
            </Text>
            <Column className="font-sourcesanspro items-center lg:ml-[420px] xl:ml-[481px] 2xl:ml-[541px] 3xl:ml-[649px] w-[4%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_400 w-[auto]">
                Home
              </Text>
              <div className="bg-red_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
            </Column>
            <Text className="font-bold font-sourcesanspro lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              About
            </Text>
            <Text className="font-bold font-sourcesanspro lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Works
            </Text>
            <Text className="font-bold font-sourcesanspro lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Contact
            </Text>
          </Row>
        </header>
        <Column className="items-center lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[82%]">
          <Stack className="lg:h-[503px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
            <div className="absolute bg-cyan_50 lg:h-[503px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] right-[0] rounded-radius35 w-[100%]"></div>
            <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[94%]">
              <Column className="rounded-radius5 w-[49%]">
                <Text className="font-bold ml-[4px] lg:text-[58px] xl:text-[66px] 2xl:text-[75px] 3xl:text-[90px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-sourcesanspro">
                    Maximize your business with{" "}
                  </span>
                  <span className="text-red_400 font-sourcesanspro">us</span>
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900_60 w-[75%]">
                  Maximize your business with a variety of services and services
                  from us
                </Text>
                <Row className="items-center lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] rounded-radius5 w-[79%]">
                  <Button
                    className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[47%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillBlack900"
                  >
                    Contact Us
                  </Button>
                  <Button
                    className="font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[47%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineBlack900"
                  >
                    About Us
                  </Button>
                </Row>
              </Column>
              <Stack className="lg:h-[368px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[568px] w-[49%]">
                <Img
                  src="images/img_rectangle100.png"
                  className="absolute lg:h-[368px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[568px] left-[14%] right-[17%] rounded-radius40 w-[69%]"
                  alt="Rectangle100"
                />
                <Stack className="absolute bg-white_A700 bottom-[27%] lg:h-[109px] xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] left-[0] lg:px-[18px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] rounded-radius20 shadow-bs5 lg:w-[108px] xl:w-[123px] 2xl:w-[139px] 3xl:w-[166px]">
                  <div className="absolute bg-lime_500 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] inset-[0] justify-center m-[auto] rounded-radius50 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"></div>
                  <Text className="absolute bg-white_A700 flex font-bold h-[max-content] inset-[0] items-center justify-center m-[auto] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] rounded-radius50 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_800 text-shadow-ts w-[max-content]">
                    75%
                  </Text>
                </Stack>
                <Row className="absolute bg-red_400 items-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] right-[0] rounded-radius10 shadow-bs6 top-[6%] w-[34%]">
                  <Button
                    className="flex items-center justify-center my-[2px] w-[31%]"
                    shape="icbRoundedBorder24"
                    variant="icbFillWhiteA70023"
                  >
                    <Img
                      src="images/img_cart.svg"
                      className="flex items-center justify-center"
                      alt="cart"
                    />
                  </Button>
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[20%]">
                    <Text className="font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                      340
                    </Text>
                    <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                      Sales
                    </Text>
                  </Column>
                </Row>
              </Stack>
            </Row>
          </Stack>
          <Row className="items-center justify-between 2xl:mt-[101px] 3xl:mt-[121px] lg:mt-[78px] xl:mt-[89px] w-[99%]">
            <Text className="font-bold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
              Meet our team
            </Text>
            <Text className="font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_400 w-[auto]">
              View All
            </Text>
          </Row>
          <Row className="items-center justify-between lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
            <List
              className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[66%]"
              orientation="horizontal"
            >
              <Column className="items-center lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle16.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleSixteen"
                />
                <Text className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_801 w-[auto]">
                  Sarah Jae
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900_68 w-[auto]">
                  Branding Specialist
                </Text>
              </Column>
              <Column className="items-center lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[100%]">
                <Img
                  src="images/img_rectangle15.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleFifteen"
                />
                <Text className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_801 w-[auto]">
                  John Doe
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900_68 w-[auto]">
                  Product Designer
                </Text>
              </Column>
            </List>
            <Column className="items-center rounded-radius10 w-[32%]">
              <Column className="items-center lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle17.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleSeventeen"
                />
                <Column className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[32%]">
                  <Text className="font-bold lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_801 w-[auto]">
                    Samantha
                  </Text>
                  <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900_68 w-[auto]">
                    SEO Specialist
                  </Text>
                </Column>
              </Column>
            </Column>
          </Row>
          <Text className="font-bold 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
            What we do
          </Text>
          <Row className="bg-red_50 items-center justify-end lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] 2xl:p-[112px] 3xl:p-[134px] lg:p-[87px] xl:p-[99px] rounded-radius90 w-[100%]">
            <Column className="3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] 2xl:pr-[9px] w-[32%]">
              <Button
                className="flex lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] items-center justify-center lg:w-[35px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                variant="icbOutlineRed3007c"
              >
                <Img
                  src="images/img_cut.svg"
                  className="flex items-center justify-center lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px]"
                  alt="cut"
                />
              </Button>
              <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                UIUX Design
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_700 w-[62%]">
                We can make your website or application design better with this
                service
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius30 shadow-bs7 w-[28%]">
              <Button
                className="flex lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:w-[35px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                variant="icbOutlineCyan40087"
              >
                <Img
                  src="images/img_settings.svg"
                  className="flex items-center justify-center lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px]"
                  alt="settings"
                />
              </Button>
              <Text className="font-bold lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Website Dev
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_700 w-[92%]">
                Make your business more leverage by having an optimal website
                and we are ready to help
              </Text>
            </Column>
            <Column className="3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[25%]">
              <Button
                className="flex lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] items-center justify-center lg:w-[35px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                variant="icbOutlineLime80087"
              >
                <Img
                  src="images/img_vector_white_A700.svg"
                  className="flex items-center justify-center"
                  alt="Vector"
                />
              </Button>
              <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Branding & Product
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_700 w-[99%]">
                we can also help you in the affairs of product branding so that
                your products can be more riveting
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
          <Stack className="lg:h-[435px] xl:h-[498px] 2xl:h-[560px] 3xl:h-[672px] w-[100%]">
            <Column
              className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[38px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group276.png')" }}
            >
              <Row className="justify-between lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[88%]">
                <Text className="font-bold mt-[2px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                  What our clients are saying
                </Text>
                <Img
                  src="images/img_group685.svg"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[13%]"
                  alt="Group685"
                />
              </Row>
              <List
                className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] lg:mt-[52px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[88%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 items-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 shadow-bs8 w-[100%]">
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius12 w-[98%]">
                    <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[100%]">
                      I am very satisfied with the work on the Nexus team. good
                      service, satisfying work results and can also increase my
                      business turnover. Thank you so much to the Nexus team.
                    </Text>
                    <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:pr-[6px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] rounded-radius12 w-[64%]">
                      <Img
                        src="images/img_rectangle52.png"
                        className="lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] rounded-radius12 lg:w-[38px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"
                        alt="RectangleFiftyTwo"
                      />
                      <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[60%]">
                        <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                          John Richard
                        </Text>
                        <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_700 w-[auto]">
                          Businessman
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius10 shadow-bs8 w-[100%]">
                  <Column className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mt-[2px] rounded-radius12 w-[91%]">
                    <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[100%]">
                      since branding with the oracle team i feel my business has
                      a very fast and good development, everything also always
                      goes through a process of discussion that is really valid
                    </Text>
                    <Row className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] rounded-radius12 w-[76%]">
                      <Img
                        src="images/img_rectangle52_49X49.png"
                        className="lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] rounded-radius12 lg:w-[38px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"
                        alt="RectangleFiftyTwo One"
                      />
                      <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[62%]">
                        <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                          Andrew Smith
                        </Text>
                        <Text className="font-normal ml-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_700 w-[auto]">
                          Founder Ulala
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius10 shadow-bs8 w-[100%]">
                  <Column className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mt-[2px] rounded-radius12 w-[99%]">
                    <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[100%]">
                      I can say, this team is indeed extraordinarily perfect. I
                      will do a lot of teamwork with this team next time. I do
                      not hesitate to cooperate because the results are very
                      satisfying
                    </Text>
                    <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] rounded-radius12 w-[66%]">
                      <Img
                        src="images/img_rectangle52_1.png"
                        className="lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] rounded-radius12 lg:w-[38px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"
                        alt="RectangleFiftyTwo Two"
                      />
                      <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[58%]">
                        <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                          Steve John
                        </Text>
                        <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_700 w-[auto]">
                          CEO rumahku.ox
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
            <Text className="absolute bg-red_400 border-bw9 border-solid border-white_A700 flex font-bold items-center left-[9%] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius50 lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 top-[0] w-[68px]">
              ,,
            </Text>
          </Stack>
          <footer className="bg-gray_800 lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[91%]">
            <Row className="lg:ml-[115px] xl:ml-[132px] 2xl:ml-[149px] 3xl:ml-[178px] lg:mr-[36px] xl:mr-[41px] 2xl:mr-[47px] 3xl:mr-[56px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[85%]">
              <Column className="w-[76%]">
                <Row className="font-spectralsc items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[90%]">
                  <Img
                    src="images/img_close.svg"
                    className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"
                    alt="close One"
                  />
                  <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                    Nexus
                  </Text>
                  <Stack className="font-sourcesanspro lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] lg:ml-[206px] xl:ml-[236px] 2xl:ml-[266px] 3xl:ml-[319px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pr-[4px] w-[15%]">
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

export default HomepagePage;
