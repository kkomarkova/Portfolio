import React from "react";

import { Column, Row, Img, Text, Stack, List, Line } from "components";

const AboutPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-sourcesanspro items-center justify-end mx-[auto] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <header className="w-[78%]">
          <Row className="items-center p-[3px] w-[100%]">
            <Img
              src="images/img_close.svg"
              className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] ml-[3px] my-[3px] lg:w-[28px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]"
              alt="close"
            />
            <Text className="font-bold font-spectralsc lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-red_400 w-[auto]">
              Nexus
            </Text>
            <Stack className="font-sourcesanspro lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[420px] xl:ml-[481px] 2xl:ml-[541px] 3xl:ml-[649px] w-[15%]">
              <Text className="absolute font-bold right-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_400 top-[0] w-[auto]">
                About
              </Text>
              <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] w-[88%]">
                <Text className="font-bold 3xl:mr-[118px] lg:mr-[77px] xl:mr-[88px] 2xl:mr-[99px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  Home
                </Text>
                <div className="bg-red_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[107px] xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
              </Column>
            </Stack>
            <Text className="font-bold font-sourcesanspro lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Works
            </Text>
            <Text className="font-bold font-sourcesanspro lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Contact
            </Text>
          </Row>
        </header>
        <Column className="lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[83%]">
          <Stack className="bg-yellow_100 lg:h-[503px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] lg:px-[41px] xl:px-[47px] 2xl:px-[53px] 3xl:px-[63px] rounded-radius90 w-[100%]">
            <Stack className="absolute lg:h-[161px] xl:h-[184px] 2xl:h-[207px] 3xl:h-[248px] inset-x-[0] mx-[auto] top-[3%] w-[80%]">
              <Row className="absolute bottom-[0] justify-between right-[0] w-[70%]">
                <Text className="font-bold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-sourcesanspro">
                    Get to know more{" "}
                  </span>
                  <span className="text-red_400 font-sourcesanspro">
                    about us
                  </span>
                </Text>
                <Img
                  src="images/img_ellipse13.png"
                  className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] rounded-radius50 3xl:w-[106px] lg:w-[69px] xl:w-[79px] 2xl:w-[89px]"
                  alt="EllipseThirteen"
                />
              </Row>
              <Row className="absolute justify-between left-[0] top-[0] w-[86%]">
                <Img
                  src="images/img_ellipse11.png"
                  className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] rounded-radius50 3xl:w-[106px] lg:w-[69px] xl:w-[79px] 2xl:w-[89px]"
                  alt="EllipseEleven"
                />
                <div className="bg-deep_orange_A100 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"></div>
              </Row>
            </Stack>
            <Column className="absolute bottom-[0] inset-x-[0] items-end mx-[auto] w-[65%]">
              <Text className="font-normal lg:leading-[31px] xl:leading-[35px] 2xl:leading-[40px] 3xl:leading-[48px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_700 w-[100%]">
                We are an agency engaged in the creative industry and business,
                we are ready to help you to improve your business performance
                together with our great team
              </Text>
              <Img
                src="images/img_ellipse12.png"
                className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[87px] rounded-radius50 3xl:w-[106px] lg:w-[69px] xl:w-[79px] 2xl:w-[89px]"
                alt="EllipseTwelve"
              />
            </Column>
            <div className="absolute bg-pink_400 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] left-[7%] rounded-radius50 top-[26%] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"></div>
          </Stack>
          <List
            className="gap-[0] min-h-[auto] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between lg:my-[27px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[42px] w-[100%]">
              <Column className="items-center lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] rounded-radius10 w-[32%]">
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
              <Column className="items-center pb-[1px] pr-[1px] w-[32%]">
                <Img
                  src="images/img_rectangle15.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleFifteen"
                />
                <Text className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_801 w-[auto]">
                  John Doe
                </Text>
                <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900_68 w-[auto]">
                  Product Designer
                </Text>
              </Column>
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
            <Row className="items-center justify-between lg:my-[27px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[42px] rounded-radius10 w-[100%]">
              <Column className="items-center pb-[4px] rounded-radius10 w-[32%]">
                <Img
                  src="images/img_rectangle18.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleEighteen"
                />
                <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Lila laconsia
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900_68 w-[auto]">
                  UI Designer
                </Text>
              </Column>
              <Column className="items-center lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] rounded-radius10 w-[32%]">
                <Img
                  src="images/img_rectangle19.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleNineteen"
                />
                <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Ana louren
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900_68 w-[auto]">
                  Illustrator
                </Text>
              </Column>
              <Column className="items-center pb-[4px] rounded-radius10 w-[32%]">
                <Img
                  src="images/img_rectangle20.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleTwenty"
                />
                <Text className="font-bold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Rico john
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900_68 w-[auto]">
                  UX Principles
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-between lg:my-[27px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[42px] rounded-radius10 w-[100%]">
              <Column className="items-center pb-[4px] rounded-radius10 w-[32%]">
                <Img
                  src="images/img_rectangle21.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleTwentyOne"
                />
                <Text className="font-bold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Randy okla
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900_68 w-[auto]">
                  Interaction Designer
                </Text>
              </Column>
              <Column className="items-center lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] rounded-radius10 w-[32%]">
                <Img
                  src="images/img_rectangle22.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleTwentyTwo"
                />
                <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Sinta Marcus
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900_68 w-[auto]">
                  UX Writer
                </Text>
              </Column>
              <Column className="items-center lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] rounded-radius10 w-[32%]">
                <Img
                  src="images/img_rectangle23.png"
                  className="lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] rounded-radius10 w-[100%]"
                  alt="RectangleTwentyThree"
                />
                <Column className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[40%]">
                  <Text className="font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                    Sam Rivald
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900_68 w-[auto]">
                    Front-end Dev
                  </Text>
                </Column>
              </Column>
            </Row>
          </List>
          <Text className="font-bold 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
            Our Moment
          </Text>
          <Row className="items-center justify-evenly lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
            <Column className="w-[34%]">
              <Img
                src="images/img_rectangle29.png"
                className="lg:h-[160px] xl:h-[183px] 2xl:h-[206px] 3xl:h-[247px] rounded-radius10 w-[93%]"
                alt="RectangleTwentyNine"
              />
              <Img
                src="images/img_rectangle30.png"
                className="lg:h-[295px] xl:h-[338px] 2xl:h-[380px] 3xl:h-[456px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius10 w-[93%]"
                alt="RectangleThirty"
              />
            </Column>
            <Column className="items-center w-[66%]">
              <Row className="items-center justify-between w-[100%]">
                <Img
                  src="images/img_rectangle31.png"
                  className="lg:h-[295px] xl:h-[338px] 2xl:h-[380px] 3xl:h-[456px] rounded-radius10 w-[48%]"
                  alt="RectangleThirtyOne"
                />
                <Column className="items-center w-[48%]">
                  <Img
                    src="images/img_kellysikkemac.png"
                    className="lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] rounded-radius10 w-[100%]"
                    alt="kellysikkemac"
                  />
                  <Img
                    src="images/img_womansittingo.png"
                    className="lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius10 w-[100%]"
                    alt="womansittingo"
                  />
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                <Img
                  src="images/img_manwearingbla.png"
                  className="lg:h-[160px] xl:h-[183px] 2xl:h-[206px] 3xl:h-[247px] rounded-radius10 w-[48%]"
                  alt="manwearingbla"
                />
                <Img
                  src="images/img_personholding.png"
                  className="lg:h-[161px] xl:h-[184px] 2xl:h-[207px] 3xl:h-[248px] rounded-radius10 w-[48%]"
                  alt="personholding"
                />
              </Row>
            </Column>
          </Row>
        </Column>
        <Column className="xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[92%]">
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

export default AboutPage;
