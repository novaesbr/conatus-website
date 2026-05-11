"use client"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { Target, Eye, Gem, ShieldCheck, Activity, Zap, FileCheck, Globe, Server, Cpu, Users } from 'lucide-react';

export default function Institutional() {
    const { t } = useContext(LanguageContext)

    return (
      <section className="institutional" id="institucional">
        <div className="institutional__container">
          <header className="institutional__head">
            <h2>{t("inst.title")}</h2>
            <p>
              {t("inst.subtitle")}
            </p>
          </header>
   
          <div className="institutional__grid">
            <article className="institutional__card">
              <div className="institutional__card-header">
                <Target className="institutional__icon" />
                <h3>{t("inst.mission.title")}</h3>
              </div>
              <p>
                {t("inst.mission.text")}
              </p>
              <div className="institutional__badges">
                <div className="institutional__badge">
                  <ShieldCheck size={18} />
                  <span>{t("nav.home") === "Início" ? "Segurança" : (t("language.en") === "English" ? "Security" : "Seguridad")}</span>
                </div>
                <div className="institutional__badge">
                  <Activity size={18} />
                  <span>{t("nav.home") === "Início" ? "Confiabilidade" : (t("language.en") === "English" ? "Reliability" : "Confiabilidad")}</span>
                </div>
                <div className="institutional__badge">
                  <Zap size={18} />
                  <span>{t("nav.home") === "Início" ? "Eficiência" : (t("language.en") === "English" ? "Efficiency" : "Eficiencia")}</span>
                </div>
                <div className="institutional__badge">
                  <FileCheck size={18} />
                  <span>{t("nav.home") === "Início" ? "Conformidade" : (t("language.en") === "English" ? "Compliance" : "Cumplimiento")}</span>
                </div>
              </div>
            </article>
  
            <article className="institutional__card">
              <div className="institutional__card-header">
                <Eye className="institutional__icon" />
                <h3>{t("inst.vision.title")}</h3>
              </div>
              <p>
                {t("inst.vision.text")}
              </p>
              <div className="institutional__badges">
                <div className="institutional__badge">
                  <Globe size={18} />
                  <span>{t("nav.home") === "Início" ? "Referência" : (t("language.en") === "English" ? "Reference" : "Referencia")}</span>
                </div>
                <div className="institutional__badge">
                  <ShieldCheck size={18} />
                  <span>{t("nav.home") === "Início" ? "Resiliência" : (t("language.en") === "English" ? "Resilience" : "Resiliencia")}</span>
                </div>
                <div className="institutional__badge">
                  <Server size={18} />
                  <span>{t("nav.home") === "Início" ? "Infraestrutura" : (t("language.en") === "English" ? "Infrastructure" : "Infraestructura")}</span>
                </div>
                <div className="institutional__badge">
                  <Cpu size={18} />
                  <span>{t("nav.home") === "Início" ? "Mundo Digital" : (t("language.en") === "English" ? "Digital World" : "Mundo Digital")}</span>
                </div>
              </div>
            </article>
  
            <article className="institutional__card">
              <div className="institutional__card-header">
                <Gem className="institutional__icon" />
                <h3>{t("inst.values.title")}</h3>
              </div>
              <ul className="institutional__list">
                <li>{t("inst.values.item1")}</li>
                <li>{t("inst.values.item2")}</li>
                <li>{t("inst.values.item3")}</li>
                <li>{t("inst.values.item4")}</li>
                <li>{t("inst.values.item5")}</li>
              </ul>
            </article>
          </div>
          <p className="institutional__footer-text">
            <Users className="institutional__footer-icon" />
            {t("inst.footer")}
          </p>
        </div>
      </section>
    )
  }