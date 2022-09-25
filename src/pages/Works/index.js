import React from "react";

import { Column, Row, Img, Text, Stack, Line } from "components";

const WorksPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-sourcesanspro justify-end mx-[auto] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <Column className="items-center lg:mr-[31px] xl:mr-[36px] 2xl:mr-[41px] 3xl:mr-[49px] 2xl:px-[107px] 3xl:px-[128px] lg:px-[83px] xl:px-[95px] w-[97%]">
          <header className="w-[95%]">
            <Row className="items-end p-[3px] w-[100%]">
              <Img
                src="images/img_close.svg"
                className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] ml-[3px] my-[3px] lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"
                alt="close"
              />
              <Text className="font-bold font-spectralsc lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-red_400 w-[auto]">
                Nexus
              </Text>
              <Stack className="font-sourcesanspro lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[420px] xl:ml-[481px] 2xl:ml-[541px] 3xl:ml-[649px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[25%]">
                <Row className="absolute items-center justify-between right-[0] top-[0] w-[59%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    About
                  </Text>
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_400 w-[auto]">
                    Works
                  </Text>
                </Row>
                <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] w-[93%]">
                  <Text className="font-bold lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    Home
                  </Text>
                  <div className="bg-red_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[199px] xl:ml-[227px] 2xl:ml-[256px] 3xl:ml-[307px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                </Column>
              </Stack>
              <Text className="font-bold font-sourcesanspro lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                Contact
              </Text>
            </Row>
          </header>
        </Column>
        <Column className="items-end lg:mr-[31px] xl:mr-[36px] 2xl:mr-[41px] 3xl:mr-[49px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] lg:pl-[100px] xl:pl-[114px] 2xl:pl-[129px] 3xl:pl-[154px] w-[97%]">
          <Column className="w-[100%]">
            <Column className="bg-green_A100 justify-end ml-[1px] p-[4px] rounded-radius90 w-[94%]">
              <Row className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mr-[auto] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[76%]">
                <Img
                  src="images/img_rectangle57.svg"
                  className="xl:h-[102px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] rounded-radius10 xl:w-[101px] 2xl:w-[114px] 3xl:w-[136px] lg:w-[88px]"
                  alt="RectangleFiftySeven"
                />
                <div className="bg-deep_orange_A100 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[595px] xl:ml-[681px] 2xl:ml-[766px] 3xl:ml-[919px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] rounded-radius50 lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"></div>
              </Row>
              <Row className="lg:ml-[101px] xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] mr-[auto] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[52%]">
                <div className="bg-light_blue_400 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rounded-radius50 lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"></div>
                <Text className="font-bold lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[264px] xl:ml-[302px] 2xl:ml-[340px] 3xl:ml-[408px] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-sourcesanspro">
                    What we{" "}
                  </span>
                  <span className="text-red_400 font-sourcesanspro">do</span>
                  <span className="text-black_900 font-sourcesanspro"> </span>
                </Text>
              </Row>
              <Text className="font-normal lg:leading-[31px] xl:leading-[35px] 2xl:leading-[40px] 3xl:leading-[48px] 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] 2xl:mt-[94px] mx-[auto] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_700 w-[66%]">
                We have completed many projects from various companies in the
                world, we have made many of our clients feel happy and satisfied
                with the results we have provided
              </Text>
              <Row className="lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mr-[16px] xl:mr-[18px] 2xl:mr-[21px] 3xl:mr-[25px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[94%]">
                <Stack className="xl:h-[102px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:w-[101px] 2xl:w-[114px] 3xl:w-[136px] lg:w-[88px]">
                  <div className="absolute bg-orange_A200 xl:h-[102px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] rounded-radius50 xl:w-[101px] 2xl:w-[114px] 3xl:w-[136px] lg:w-[88px]"></div>
                  <Text className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_A100 w-[max-content]">
                    75%
                  </Text>
                </Stack>
                <Img
                  src="images/img_polygon1.svg"
                  className="lg:h-[153px] xl:h-[175px] 2xl:h-[197px] 3xl:h-[236px] lg:ml-[579px] xl:ml-[662px] 2xl:ml-[745px] 3xl:ml-[894px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius15 lg:w-[152px] xl:w-[174px] 2xl:w-[196px] 3xl:w-[235px]"
                  alt="PolygonOne"
                />
                <div className="bg-deep_purple_800 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] rounded-radius50 lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"></div>
              </Row>
            </Column>
            <Row className="items-center ml-[4px] xl:mt-[104px] 2xl:mt-[117px] 3xl:mt-[140px] lg:mt-[91px] w-[58%]">
              <Text className="font-bold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                Latest Project
              </Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                this is the last variety of projects we have worked on
              </Text>
            </Row>
            <Stack className="lg:h-[457px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[94%]">
              <div className="absolute bg-orange_A200 lg:h-[386px] xl:h-[442px] 2xl:h-[497px] 3xl:h-[596px] inset-x-[0] rounded-radius30 top-[0] w-[100%]"></div>
              <Row className="absolute bottom-[0] justify-between right-[0] w-[91%]">
                <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[27%]">
                  <Text className="font-extrabold font-nunito lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-white_A700 w-[auto]">
                    Foodie.
                  </Text>
                  <Text className="font-bold font-sourcesanspro leading-[normal] lg:mt-[112px] xl:mt-[128px] 2xl:mt-[144px] 3xl:mt-[172px] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-white_A700 w-[100%]">
                    Launching website for Apps
                  </Text>
                  <Line className="bg-white_A700 h-[2px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[25%]" />
                </Column>
                <Column
                  className="bg-cover bg-repeat items-center 3xl:p-[100px] lg:p-[65px] xl:p-[74px] 2xl:p-[84px] w-[73%]"
                  style={{ backgroundImage: "url('images/img_group21.png')" }}
                >
                  <Column
                    className="bg-cover bg-repeat items-center justify-end lg:mb-[24px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] p-[1px] w-[88%]"
                    style={{ backgroundImage: "url('images/img_group20.png')" }}
                  >
                    <div className="bg-white_A701 lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:mt-[251px] xl:mt-[287px] 2xl:mt-[323px] 3xl:mt-[387px] w-[22%]"></div>
                  </Column>
                </Column>
              </Row>
            </Stack>
            <Stack className="lg:h-[452px] xl:h-[516px] 2xl:h-[581px] 3xl:h-[697px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
              <div className="absolute bg-indigo_800 lg:h-[452px] xl:h-[516px] 2xl:h-[581px] 3xl:h-[697px] left-[0] rounded-radius30 w-[94%]"></div>
              <Column className="absolute right-[0] top-[7%] w-[92%]">
                <div className="bg-orange_A200 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[343px] xl:ml-[393px] 2xl:ml-[442px] 3xl:ml-[530px] rounded-radius5 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                <Row className="items-center justify-evenly mt-[1px] w-[100%]">
                  <Column className="w-[42%]">
                    <Text className="bg-clip-text bg-gradient  font-bold lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-transparent w-[auto]">
                      Floops
                    </Text>
                    <Text className="font-bold lg:mt-[157px] xl:mt-[180px] 2xl:mt-[203px] 3xl:mt-[243px] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-white_A700 w-[auto]">
                      Landing page for Website Service
                    </Text>
                    <Line className="bg-white_A700 h-[2px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[14%]" />
                  </Column>
                  <Img
                    src="images/img_group6211.png"
                    className="lg:h-[322px] xl:h-[369px] 2xl:h-[415px] 3xl:h-[498px] rounded-radius30 w-[58%]"
                    alt="Group6211"
                  />
                </Row>
              </Column>
            </Stack>
            <Stack className="bg-red_A200 lg:h-[452px] xl:h-[516px] 2xl:h-[581px] 3xl:h-[697px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[97px] rounded-radius30 w-[94%]">
              <Img
                src="images/img_web192021.png"
                className="absolute lg:h-[452px] xl:h-[516px] 2xl:h-[581px] 3xl:h-[697px] right-[0] rounded-radius30 w-[32%]"
                alt="Web192021"
              />
              <Column
                className="absolute bg-cover bg-repeat lg:p-[55px] xl:p-[63px] 2xl:p-[71px] 3xl:p-[85px] rounded-radius30 w-[100%]"
                style={{ backgroundImage: "url('images/img_group275.png')" }}
              >
                <Row className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[17%]">
                  <Img
                    src="images/img_group511.png"
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[2px] w-[31%]"
                    alt="Group511"
                  />
                  <Text className="font-bold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[4px] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-white_A700 w-[auto]">
                    Insight
                  </Text>
                </Row>
                <Column className="lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mr-[597px] xl:mr-[683px] 2xl:mr-[768px] 3xl:mr-[922px] lg:mt-[139px] xl:mt-[159px] 2xl:mt-[179px] 3xl:mt-[214px] w-[23%]">
                  <Text className="font-bold leading-[normal] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-white_A700 w-[100%]">
                    Website for creative agency
                  </Text>
                  <Line className="bg-white_A700 h-[2px] xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] lg:mt-[87px] w-[30%]" />
                </Column>
              </Column>
            </Stack>
          </Column>
        </Column>
        <footer className="bg-gray_800 xl:mr-[102px] 2xl:mr-[115px] 3xl:mr-[138px] lg:mr-[89px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[97px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[92%]">
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
    </>
  );
};

export default WorksPage;
