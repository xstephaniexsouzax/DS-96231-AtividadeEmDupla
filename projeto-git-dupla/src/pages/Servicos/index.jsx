import './styles.css';

function Servicos() {
    return (
        <main className="services-container">
            <section className="services-hero">
                <h1 className="services-title">Como funciona o processo terapêutico?</h1>
                <p className="services-subtitle">
                    Cuidar da saúde mental é um processo contínuo. Conheça as modalidades de atendimento
                    e encontre a que melhor se adapta ao seu momento de vida.
                </p>
            </section>

            {/* Lista detalhada de serviços */}
            <section className="services-list">
                <div className="service-item">
                    <div className="service-info">
                        <h2>Psicoterapia Individual (Adultos)</h2>
                        <p>Focada em demandas como ansiedade, depressão, transições de carreira, luto e desenvolvimento pessoal. Um espaço semanal de 50 minutos dedicado exclusivamente a você.</p>
                        <span className="service-tag">Online ou Presencial</span>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-info">
                        <h2>Terapia de Casal</h2>
                        <p>Indicada para casais que buscam melhorar a comunicação, resolver conflitos crônicos ou passar por momentos de crise, reconstruindo a cumplicidade e o respeito mútuo.</p>
                        <span className="service-tag">Presencial</span>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-info">
                        <h2>Orientação Profissional e de Carreira</h2>
                        <p>Para jovens em escolha de curso ou profissionais que desejam mudar de área. Utilizamos ferramentas e sessões estruturadas para mapear suas habilidades e objetivos.</p>
                        <span className="service-tag">Online</span>
                    </div>
                </div>
            </section>

            {/* Seção de Informações Importantes */}
            <section className="info-section">
                <h3>Informações sobre os Atendimentos</h3>
                <div className="info-grid">
                    <div className="info-box">
                        <h4>Duração</h4>
                        <p>As sessões têm duração padrão de 50 minutos e ocorrem, geralmente, uma vez por semana.</p>
                    </div>
                    <div className="info-box">
                        <h4>Sigilo Profissional</h4>
                        <p>Tudo o que é dito em sessão é estritamente confidencial, protegido pelo Código de Ética do Psicólogo.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Servicos;