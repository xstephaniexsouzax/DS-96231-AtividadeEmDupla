
import './styles.css';

function Produtos() {
    return (
        <main className="products-container">
            <section className="products-hero">
                <span className="products-badge">Recursos para o teu Bem-Estar</span>
                <h1 className="products-title">Materiais de Apoio à Saúde Mental</h1>
                <p className="products-subtitle">
                    Ferramentas práticas e guias terapêuticos desenvolvidos para complementar
                    o teu processo de autoconhecimento e cuidado diário, onde quer que estejas.
                </p>
            </section>

            {/* Grelha de Produtos */}
            <section className="products-grid">

                {/* Produto 1 */}
                <div className="product-card">
                    <div className="product-icon">📘</div>
                    <h3>Guia Prático Contra a Ansiedade</h3>
                    <p className="product-description">
                        Um e-book completo com exercícios baseados na Terapia Cognitivo-Comportamental
                        para ajudar-te a acalmar a mente e gerir crises no dia a dia.
                    </p>
                    <div className="product-footer">
                        <span className="product-price">R$ 14,90</span>
                        <button className="product-button">Adquirir E-book</button>
                    </div>
                </div>

                {/* Produto 2 */}
                <div className="product-card">
                    <div className="product-icon">🎧</div>
                    <h3>Packs de Meditação Guiada</h3>
                    <p className="product-description">
                        Áudios diários de Mindfulness (Atenção Plena) projetados para reduzir o stress,
                        melhorar o foco e proporcionar uma noite de sono mais reparadora.
                    </p>
                    <div className="product-footer">
                        <span className="product-price">R$ 19,90</span>
                        <button className="product-button">Aceder aos Áudios</button>
                    </div>
                </div>

                {/* Produto 3 */}
                <div className="product-card">
                    <div className="product-icon">🎟️</div>
                    <h3>Workshop: Inteligência Emocional</h3>
                    <p className="product-description">
                        Inscrição para o próximo evento online ao vivo, onde vamos aprender a mapear,
                        compreender e acolher as nossas emoções de forma saudável.
                    </p>
                    <div className="product-footer">
                        <span className="product-price">R$ 29,90</span>
                        <button className="product-button">Garantir Vaga</button>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Produtos;