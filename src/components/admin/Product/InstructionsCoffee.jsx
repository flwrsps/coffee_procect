import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import URLCOFFEE1 from "../..//../image/16722-ed4_wide.jpg";
import URLCOFFEE2 from "../..//../image/3d241ded-5128-4a22-968c-79d4137265b511111111.jpeg";

import URLCOFFEE3 from "../..//../image/content_kofe_v_ents1.jpg";
import URLCOFFEE4 from "../..//../image/Morning_Owl_Freshly_Roasted_Coffee_Beans_In_House.webp";

import HeaderUp from "../Haeder/HeaderUp";
import Header from "../Haeder/Header";
import HeaderNavigate from "../Haeder/HeaderNavigate";

const InstructionsCoffee = () => {
  return (
    <Box>
      <HeaderUp />
      <Header />
      <HeaderNavigate />
      <Box>
        <Box className="container">
          <img
            style={{ width: "80%", height: "300px" }}
            src={URLCOFFEE4}
            alt=""
          />
          <Box>
            <Typography sx={{ margin: "30px 0" }} variant="h4">
              Как сделать вкусный кофе?
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "1200px",
              }}
            >
              <img style={{ marginBottom: "30px" }} src={URLCOFFEE1} alt="" />
              <div>
                <Typography
                  sx={{
                    marginBottom: "30px",
                    width: "400px",
                    fontSize: "16px ",
                    color: "rgb(77, 33, 15);",
                  }}
                >
                  Вкусный кофе поможет вам проснуться утром, сохранить бодрость
                  в течение дня, добавит в вашу жизнь ощущение полноты бытия. А
                  вот сварить такой кофе почему-то получается не у всех.
                </Typography>
              </div>
            </Box>
            <Typography sx={{ margin: "30px 0" }} variant="h4">
              Самый вкусный кофе - натуральный
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "1300px",
              }}
            >
              {" "}
              <img
                style={{
                  width: "570px",
                  height: "400px",
                  marginBottom: "30px",
                }}
                src={URLCOFFEE2}
                alt=""
              />
              <Typography
                sx={{
                  marginBottom: "30px",
                  width: "600px",
                  fontSize: "16px ",
                  color: "rgb(77, 33, 15);",
                }}
              >
                Вкусный кофе и растворимый кофе – исключающие друг друга
                понятия. Растворимый кофе можно пить только в самых
                экстремальных ситуациях, когда под рукой больше ничего нет. Так
                что дальше речь пойдет только о натуральном кофе, для
                изготовления которого используются качественные кофейные зерна,
                обжаренные и смолотые по всем правилам. И, конечно, говорить
                будем о кофе, сваренном вручную: с кофемашинами и кофеварками
                хороший бариста соревноваться принципиально не станет.
              </Typography>
            </Box>
            <Typography sx={{ marginBottom: "30px" }} variant="h4">
              Свежий кофе – залог успеха
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                marginBottom: "30px",
                // width: "500px",
                fontSize: "16px ",
                color: "rgb(77, 33, 15);",
              }}
              s
            >
              Сорт кофе для неспециалиста особого значения обычно не имеет.
              Неискушенные в кофе люди предпочитают кофе с сахаром и
              ароматизированный: кофе с ароматами вишни, шоколада, корицы,
              ванили и различных орехов. Кофеманы же обращают внимание не только
              на сорт, но и на степень обжарки, тонкость помола, плотность
              пенки. Снобов среди кофеманов едва ли не больше, чем среди
              любителей вин. Но в любом случае первое, что нужно сделать –
              купить хороший кофе в зернах.
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                marginBottom: "30px",
                //   width: "500px",
                fontSize: "16px ",
                color: "rgb(77, 33, 15);",
              }}
            >
              При покупке смотрите, чтобы кофе, который вы покупаете, не стоял
              поблизости от ламп, освещающих витрину. Свет и тепло губительно
              воздействуют на зерна. Покупать нужно самый свежий кофе, какой
              только сможете найти. Если умеете обжаривать зерна – берите
              зеленый, чтобы каждый раз готовить свежайший напиток. Купленный
              кофе храните в герметичной таре. И не делайте стратегических
              запасов: достаточно недельного. Отдайте предпочтение 100% арабике
              – робуста на вкус грубее, к тому же кислит и содержит больше
              кофеина.
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                marginBottom: "30px",
                fontSize: "16px ",
                // width: "700px",

                color: "rgb(77, 33, 15);",
              }}
            >
              Молотый кофе сразу же после помола начинает терять аромат и вкус,
              поэтому молоть впрок его не следует. Положите в кофемолку ровно
              столько кофейных зерен, сколько нужно на одну или две чашки. Помол
              кофе, который вы будете варить в турке (джезве, и даже простом
              ковшике) должен быть очень тонким.
            </Typography>

            <Typography sx={{ marginBottom: "30px" }} variant="h4">
              Варим кофе правильно
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "1400px",
              }}
            >
              <img
                style={{
                  marginBottom: "30px",
                }}
                src={URLCOFFEE3}
                alt=""
              />
              <Box>
                <Typography
                  sx={{
                    marginBottom: "30px",
                    fontSize: "16px ",
                    width: "700px",

                    color: "rgb(77, 33, 15);",
                  }}
                >
                  Как только вы смололи зерна кофе (а получиться должна
                  практически кофейная пудра), приступайте к приготовлению кофе.
                  В турку наливается чистая родниковая вода, добавляются две
                  чайные ложки молотого кофе на порцию, и при желании – ложка
                  или две сахара. Вода должна доходить до самого горлышка
                  джезвы. Варить кофе следует на маленьком огне. В идеале для
                  этого должен использоваться раскаленный песок, но для
                  среднестатистической кухни это явно перебор. Что касается
                  воды, то ничто не может испортить вкус кофе так, как
                  хлорированная вода из-под крана. Используйте чистую воду, но
                  все-таки не дистиллированную, иначе вкус напитка существенно
                  обеднеет.
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "30px",
                    fontSize: "16px ",
                    color: "rgb(77, 33, 15);",
                  }}
                >
                  Как только кофе начинает закипать, а пенка поднимается все
                  выше, уберите джезв
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "30px",
                    fontSize: "16px ",
                    width: "400px",
                    color: "rgb(77, 33, 15);",
                  }}
                >
                  у с огня и дайте кофе немного «успокоиться». Пенка осела –
                  ставьте джезву опять на огонь. Повторите три раза. После этого
                  кофе готов, можно разливать его по чашкам.{" "}
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ marginBottom: "30px" }} variant="h4">
              Эксперименты с кофе
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                fontSize: "16px ",
                color: "rgb(77, 33, 15);",
              }}
            >
              Многим нравится расцвечивать вкус кофе разными добавками.
              Например, в турку добавляют корицу, ваниль, какао, молотую
              гвоздику, черный перец, и даже свежий чеснок. Популярная добавка к
              кофе – морская соль. Добавляет кофе остроты корень имбиря,
              пикантности – бадьян. Очень вкусный кофе получается, если варить
              его вместе с размолотым фундуком или грецким орехом. Вместо сахара
              иногда можно положить в турку с кофе мед. Но, честно говоря,
              настоящий кофе не нуждается ни в каких улучшателях вкуса. В
              крайнем случае, к нему можно добавить молока или сливок.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructionsCoffee;
