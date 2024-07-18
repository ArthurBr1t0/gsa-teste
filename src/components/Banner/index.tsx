import React from "react";
import { Button } from "../Button/index";
import Image from "next/image";
import styles from "../Banner/banner.module.css";
import gsapicture from "../../../public/gsa.png";
import bannersala from "../../../public/bannersala.jpeg";
import bannerazul from "../../../public/bannerazul.png";
import quadradoverde from "../../../public/quadradoverde.png";
import pessoa from "../../../public/pessoa.png";
import negocio from "../../../public/negocio.png";
import whatsapp from "../../../public/whatsapp.png";
import barra from "../../../public/barra.png";
import parc1 from "../../../public/porc1.png";
import parc2 from "../../../public/porc2.png";
import parc3 from "../../../public/porc3.png";
import banner3 from "../../../public/banner3.png";
import Script from "next/script";

export function Banner() {
  const content = {
    title: "Os melhores espaços comerciais para o seu",
    subtitle:
      "Espaços cuidadosamente selecionados para atender as necessidades do seu negócio.",
    Button: {},
    background: bannersala,
    image: bannerazul,
    image2: negocio,
    image3: whatsapp,
    quadrado: quadradoverde,
    soma: "+",
    num1: "7O",
    subt1: "empreendimentos administrados",
    barra: "/",
    num2: "4OO",
    subt2: "espaços alugados",
  };
  return (
    <section className="max-w-1440">
      <center>
        <Image
          src={gsapicture}
          alt=""
          className="w-84 h-[44.04px] mt-[24px]"
        ></Image>
      </center>
      <section className="max-w-[1440px] h-[800px] mt-[24px] box-border">
        <div className="relative">
          <h1 className="max-w-[640px] h-[124px] font-visby font-light text-[56px] leading-[61.6px] fixed mt-[143.5px] ml-[110px] z-30">
            {content.title}
          </h1>
          <Image
            className="max-w-231 h-[71px] justify-betweent fixed z-40 mt-[273.5px] ml-[110px]"
            src={content.image2}
            alt=""
          ></Image>
          <p className="max-w-[680px] h-[68px] font-normal text-[24px] leading-[33.6px] mt-[368px] ml-[110px] fixed z-20">
            {content.subtitle}
          </p>
          <Image
            className="max-w-278 h-[48px] gap-[8px] fixed z-50 mt-[478px] ml-[110px]"
            src={content.image3}
            alt=""
          ></Image>
          <div>
            <ul className="flex flex-col">
              <li>
                <h1 className="text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[140px] mt-[624px]">
                  {content.num1}
                </h1>
                <h1 className="text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[110px] mt-[650px] text-green-500">
                  {content.soma}
                </h1>
                <p className="max-w-[173.33px] h-[40px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 mt-[715px] ml-[110px]">
                  {content.subt1}
                </p>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                <Image
                  className="max-w-[150.36px] fixed z-50 ml-[291.33px] mt-[620px]"
                  src={barra}
                  alt=""
                ></Image>
              </li>
            </ul>
            <ul>
              <li>
                <h1 className="text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[410.33px] mt-[624px]">
                  {content.num2}
                </h1>
                <h1 className="text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[371.33px] mt-[650px] text-green-500">
                  {content.soma}
                </h1>
                <p className="max-w-[173.33px] h-[20px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 mt-[715px] ml-[371.33px]">
                  {content.subt2}
                </p>
              </li>
            </ul>
          </div>
          <Image
            src={quadradoverde}
            alt=""
            className=" mt-[40px] ml-[790px] fixed z-20"
            width={142.23}
            height={142.23}
          />
          <Image src={content.background} alt="" className="ml-[597px]" fill />
          <Image
            src={content.image}
            alt=""
            className="relative z-10 w-[940px] h-[800px]"
            width={0}
            height={0}
          />
        </div>
      </section>
    </section>
  );
}
