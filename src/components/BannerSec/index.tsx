import { Button } from "../Button/index";
import React from "react";
import Image from "next/image";
import styles from "../Banner/banner.module.css";
import script from "../Banner/tailwind.config";
import reuniaomesa from "../../../public/reuniaomesa.png";
import pessoa from "../../../public/pessoa.png";
import whatsapp from "../../../public/whatsapp.png";
import parc1 from "../../../public/porc1.png";
import parc2 from "../../../public/porc2.png";
import parc3 from "../../../public/porc3.png";
import banner3 from "../../../public/banner3.png";
import casa from "../../../public/loremipsumcasa.png";
import tel from "../../../public/loremipsumtel.png";
import livro from "../../../public/loremipsumlivro.png";
import imagebanner from "../../../public/imageloremipsum.png";
import gsagrande from "../../../public/gsagrande.png";
import trofeu from "../../../public/trofeu.png";
import quadradomaior from "../../../public/quadradomaior.png";
import quadradomenor from "../../../public/quadradomenor.png";
import gsatransparente from "../../../public/gsatransparente.png";
import linearbranco from "../../../public/linearbranco.png";
import quadradobanner from "../../../public/quadradobanner.png";
import Script from "next/script";

export function BannerSec() {
  const bannersec = {
    titlesec: "Fale com quem entende",
    subsec:
      "Entender a necessidade dos nossos clientes, buscar a solução e gerar resultados. Assim construímos nossos relacionamentos.",
    imagesec: pessoa,
    Button: {},
    num1: "7O",
    soma: "+",
    num2: "4OO",
    num3: "1O",
    subt: "ativos",
    subt2: "espaços alugados",
    subt3: "empreendimentos administrados",
    subt4: "anos de mercado",
    quadradobanner: quadradobanner,
  };

  const parcerias = {
    titleterc: "NOSSOS PARCEIROS DE CONFIANÇA",
    parc1: parc1,
    parc2: parc2,
    parc3: parc3,
  };

  const bannertres = {
    titlefor: "NOSSOS PROCESSOS",
    titlefive: "Lorem Ipsum is simply dummy text of the",
    subt5:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe",
    subttrof:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    imagecasa: casa,
    imagetel: tel,
    imagelivro: livro,
    imagebanner: imagebanner,
    imagegsagrande: gsagrande,
    imagebackg: banner3,
    trofeu: trofeu,
  };

  return (
    <section className="max-w-1440">
      <section>
        <center>
          <h1 className="w-714 h-[92px] text-[42px] font-visby font-800 leading-[46.2px] fixed ml-[363px] mt-[39px]">
            Temos opções certas exclusivas
            <br />
            para todo tipo de negócio.
          </h1>
          <Image
            className="fixed ml-[583px] mt-[163px]"
            src={whatsapp}
            alt=""
          ></Image>
          <Image
            className="w-1194 h-[250px] left-[0.5px] rounded-lg mt-[80px] max-w-[1194px]"
            src={reuniaomesa}
            alt=""
            quality={100}
            sizes="1000vw"
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </center>
      </section>
      <div>
        <Image
          className="fixed z-10 mt-[84px]"
          src={bannersec.imagesec}
          alt=""
        ></Image>
        {/* <Image
          className="fixed z-10 mt-[510px] ml-[1160px] overflow-hidden"
          src={bannersec.quadradobanner}
          alt=""
        ></Image> */}
      </div>
      <section className="bg-white max-w-1440 h-[668px] mt-[111px] z-1">
        <div>
          <h1 className="text-black z-10 w-588 h-[55px] text-[50px] font-visby font-800 leading-[55px] text-left ml-[667.5px] fixed mt-[108px]">
            {bannersec.titlesec}
          </h1>
          <p className="text-black z-10 max-w-[660px] h-[41px] text-[16px] font-din font-500 leading-[17.6px] text-center ml-[651px] fixed mt-[173px] align-center">
            {bannersec.subsec}
          </p>
          <ul className="flex flex-col">
            <li>
              <h1 className="text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[680px] mt-[278px] text-[#219c6f]">
                {bannersec.num1}
              </h1>
              <h1 className="text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[651.5px] mt-[300px] text-[#219c6f]">
                {bannersec.soma}
              </h1>
              <p className="text-black text-[18px] font-normal leading-[19.8px] text-left mt-[330px] ml-[795.5px] fixed z-50">
                {bannersec.subt}
              </p>
            </li>
            <li>
              <h1 className="text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[680px] mt-[398px] text-[#219c6f]">
                {bannersec.num1}
              </h1>
              <h1 className="text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[651.5px] mt-[420px] text-[#219c6f]">
                {bannersec.soma}
              </h1>
              <p className="text-black max-w-[173.33px] h-[40px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 ml-[795.5px] mt-[430px]">
                {bannersec.subt3}
              </p>
            </li>
          </ul>
          <ul className="flex flex-col">
            <li>
              <h1 className="text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[1040px] mt-[278px] text-[#219c6f]">
                {bannersec.num2}
              </h1>
              <h1 className="text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[1006.5px] mt-[300px] text-[#219c6f]">
                {bannersec.soma}
              </h1>
              <p className="text-black max-w-[76px] h-[45px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 ml-[1220px] mt-[310px]">
                {bannersec.subt2}
              </p>
            </li>
            <li>
              {/* A fonte não está conseguindo adapitar ao número 10*/}
              <h1 className="text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[1040px] mt-[398px] text-[#219c6f]">
                {bannersec.num3}
              </h1>
              <h1 className="text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[1006.5px] mt-[420px] text-[#219c6f]">
                {bannersec.soma}
              </h1>
              <p className="text-black max-w-[74px] h-[45px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 ml-[1160px] mt-[434px]">
                {bannersec.subt4}
              </p>
            </li>
          </ul>
          <Image
            className="fixed z-50 mt-[518px] ml-[824.5px]"
            src={whatsapp}
            alt=""
          ></Image>
        </div>
      </section>
      <section>
        <div className="">
          <h1 className="w-352 h-[22px] text-[20px] font-black leading-[22px] mt-[60px] text-center text-[#94a3b8]">
            {parcerias.titleterc}
          </h1>
          <Image
            className="mt-[60px] ml-[249.87px]"
            src={parcerias.parc1}
            alt=""
          ></Image>
          <Image
            className="mt-[40px] ml-[201.46px]"
            src={parcerias.parc2}
            alt=""
          ></Image>
          <Image
            className="mt-[40px] ml-[162.75px]  "
            src={parcerias.parc3}
            alt=""
          ></Image>
        </div>
      </section>
      <section>
        <div>
          <ul>
            <h1 className="w-494 h-[26px] text-[24px] font-extrabold leading-[26.4px] text-left mt-[83.71px] ml-[110px] z-30 fixed">
              {bannertres.titlefor}
            </h1>
            <h1 className="max-w-[494px] h-[92px] text-[42px] font-extrabold leading-[46.2px] text-left mt-[125.71px] ml-[110px] z-30 fixed">
              {bannertres.titlefive}
            </h1>
            <p className="max-w-[540px] h-[54px] text-[16px] font-medium leading-[17.6px] text-left mt-[233.71px] ml-[110px] z-30 fixed">
              {bannertres.subt5}
            </p>
          </ul>
          <ul>
            <li className="flex-row">
              <Image
                className="max-w-40 h-[40px] mt-[319.71px] ml-[110px] z-30 fixed"
                src={bannertres.trofeu}
                alt=""
              ></Image>
              <p className="max-w-[438px] h-[36px] text-[16px] font-medium leading-[17.6px] text-left mt-[321.71px] ml-[166px] z-30 fixed">
                {bannertres.subttrof}
              </p>
            </li>
            <li className="flex-row">
              <Image
                className="max-w-40 h-[40px] mt-[391.71px] ml-[110px] z-30 fixed"
                src={bannertres.trofeu}
                alt=""
              ></Image>
              <p className="max-w-[438px] h-[36px] text-[16px] font-medium leading-[17.6px] text-left mt-[393.71px] ml-[166px] z-30 fixed">
                {bannertres.subttrof}
              </p>
            </li>
            <li className="flex-row">
              <Image
                className="max-w-40 h-[40px] mt-[463.71px] ml-[110px] z-30 fixed"
                src={bannertres.trofeu}
                alt=""
              ></Image>
              <p className="max-w-[438px] h-[36px] text-[16px] font-medium leading-[17.6px] text-left mt-[465.71px] ml-[166px] z-30 fixed">
                {bannertres.subttrof}
              </p>
            </li>
          </ul>
          <Image
            className="mt-[535.71px] ml-[110px] z-30 fixed"
            src={whatsapp}
            alt=""
          ></Image>
        </div>
        <Image
          className="w-238 h-[40px] mt-[325.42px] ml-[1187px] z-20 fixed"
          src={bannertres.imagetel}
          alt=""
        ></Image>
        <Image
          className="w-238 h-[40px] mt-[107.42px] ml-[701px] z-20 fixed"
          src={bannertres.imagecasa}
          alt=""
        ></Image>
        <Image
          className="w-238 h-[40px] mt-[494.42px] ml-[656px] z-20 fixed"
          src={bannertres.imagelivro}
          alt=""
        ></Image>
        <Image
          className="w-[398.52px] h-[208.95px] mt-[462.51px] ml-[1036px] z-20 fixed"
          src={bannertres.imagegsagrande}
          alt=""
        ></Image>
        <Image
          className="w-546 h-[546px] mt-[69.71px] left-[792px] z-10 fixed"
          src={bannertres.imagebanner}
          alt=""
        ></Image>
        <Image
          className="w-1440 h-[668px] z-1 mt-[60px]"
          src={bannertres.imagebackg}
          alt=""
        ></Image>
      </section>
      <div className="max-w-[1,440px] h-[94px]">
        <h2 className="text-black mt-[48px] ml-[80px]">
          @ 2023 GSA, Inc. All rights reserved.
        </h2>
      </div>
    </section>
  );
}
