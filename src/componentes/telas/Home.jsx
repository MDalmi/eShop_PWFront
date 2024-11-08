import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="texto">
                    Bem-vindo à Invictus!
                    <br />


                    <p className="tx2">A tecnologia pode ser uma aliada poderosa!</p>
                    <br />
                    <p className="textoGrande">Por que escolher nossos robôs?</p>
                    <div class="cards-container">
                        <div class="card">
                            <h2>Versatilidade e Personalização</h2>
                            <p>Nossos robôs são ajustados para atender às necessidades exatas de cada missão, garantindo eficiência e resultados.</p>
                        </div>

                        <div class="card">
                            <h2>Tecnologia de Ponta</h2>
                            <p>Utilizamos as tecnologias mais avançadas em inteligência artificial e automação, oferecendo desempenho de alta qualidade.</p>
                        </div>

                        <div class="card">
                            <h2>Suporte Completo</h2>
                            <p>Desde o planejamento até a execução, nossa equipe estará ao seu lado, garantindo que sua missão seja um sucesso.</p>
                        </div>

                        <div class="card">
                            <h2>Missões Personalizadas</h2>
                            <p>Seja para inspeção em áreas de difícil acesso, monitoramento, transporte de materiais, ou outras missões personalizadas, nossos robôs estão prontos para serem seus aliados em qualquer desafio.</p>
                        </div>
                    </div>
                    <p className="Final">Contrate agora!! <br/> Deixe a tecnologia trabalhar para você!</p>
                </div>
            </div>
        </>
    )
}

export default Home;