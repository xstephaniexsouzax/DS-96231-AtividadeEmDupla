import './styles.css';

function Home() {
    return (
        <main className="home-container">
            {/* Seção Principal (Hero) */}
            <section className="hero-section">
                <span className="hero-badge">Sua mente em equilíbrio</span>
                <h1 className="home-title">Um espaço seguro para cuidar da sua saúde mental.</h1>
                <p className="home-text">
                    Encontre apoio profissional e humanizado para passar por momentos difíceis,
                    superar a ansiedade e reconectar-se com você mesmo. Atendimentos confidenciais,
                    focados no seu bem-estar emocional, de forma presencial ou online.
                </p>
                <div className="hero-actions">
                    <button className="cta-button">Agendar uma Consulta</button>
                </div>
            </section>

            {/* Seção de Cards de Especialidades */}
            <section className="cards-container">
                <div className="card">
                    <div className="card-icon">🌱</div>
                    <h3>Psicoterapia Individual</h3>
                    <p>Sessões personalizadas para tratar ansiedade, depressão e estresse, promovendo o seu amadurecimento e inteligência emocional.</p>
                </div>

                <div className="card">
                    <div className="card-icon">🧠</div>
                    <h3>Autoconhecimento</h3>
                    <p>Desenvolva ferramentas internas para entender seus padrões de comportamento, pensamentos e tomar decisões com mais leveza.</p>
                </div>

                <div className="card">
                    <div className="card-icon">🤍</div>
                    <h3>Terapia de Casal</h3>
                    <p>Mediação profissional para alinhar a comunicação, resolver conflitos e fortalecer os vínculos afetivos do relacionamento.</p>
                </div>
            </section>
        </main>
    );
}

export default Home;