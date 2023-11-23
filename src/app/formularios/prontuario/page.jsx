export default function Prontuario() {
    return (
        <> 
            <div> 
                <h1 className="introducao"> Olá seja-bem vindo a parte de prontuário! </h1>
                <p className="introducao-informacao"> Aqui é possivel acessar os canais de <strong> Agendanto Exame </strong> e <strong> Agendamento Consulta </strong>. Mas antes fique a vontade para responder esse formulário médico! </p>
                <p className="introducao-informacao mb-10"> É de extrema importância que você faça ele, para que todas as suas informações fiquem  armazenadas em nosso banco de dados. </p> 
            </div> 

            <div className="flex justify-around"> 
                <h2 className="agendamento"> Deseja fazer um agendamento de exames? </h2>
                <h2 className="agendamento"> Deseja fazer um agendamento de consulta? </h2>        
            </div> 
                <div className="flex justify-around"> 
                    <a href='/formularios/agenda/exame'> 
                        <button className='btn-agenda'> Agende seu exame já!</button>
                    </a>
                    <a href='/formularios/agenda/consulta'> 
                        <button className='btn-agenda'> Agende sua consulta já!</button>
                    </a>
                </div>

                <div className="cardzao"> 
                    <div className="conteudo-pai">Prontuário Médico:</div>
                    <div className="conteudo-filho mb-10">Seja bem-vindo(a)! Para uma melhor experiência vamos precisar de algumas informações!</div>

                    <form> 
                        <div>
                            <label className="prontuario">Nome Completo:</label>
                            <input className="w-[500px] bg-neutral-300 rounded-[5px] mb-4" type="text" required /> 
                        </div>

                        <div> 
                            <label className="prontuario">Data Nascimento:</label>
                            <input className="mb-4" type="date" required /> 
                        </div>

                        <div className="prontuario-separacao"> 
                            <label className="prontuario">Digite seu CPF:</label>
                            <input className="prontuario-estilo" type="text" required /> 

                            <label className="prontuario"> Digite sua Etina:</label>
                            <input className="prontuario-estilo" type="text" required /> 
                        </div>

                        <div> 
                            <label className="prontuario"> Qual seu gênero? </label>
                                <input className="m-2" type="radio" required />
                                <span>Masculino</span>

                                <input className="m-2" type="radio" required />
                                <span>Feminino</span>

                                <input className="m-2 mb-6" type="radio" required />
                                <span>Outro</span>
                        </div>

                        <div className="prontuario-separacao"> 
                            <label className="prontuario">Digite seu E-mail:</label>
                            <input className="prontuario-estilo" type="text" required /> 

                            <label className="prontuario"> Digite seu Telefone:</label>
                            <input className="prontuario-estilo" type="number" required /> 
                        </div>

                        <div> 
                            <label className="prontuario">Digite seu convênio: </label>
                            <input className="prontuario-estilo" type="text" required /> 
                        </div>

                        <div className="prontuario-separacao"> 
                            <label className="prontuario">Digite seu endereço: </label>
                            <input className="w-[500px] bg-neutral-300 rounded-[5px] mb-4" type="text" required /> 

                            <label className="prontuario">Digite seu CEP: </label>
                            <input className="prontuario-estilo" type="number" required /> 
                        </div>
                    </form>

                    <div> 
                        <p className="px-3"> Se houve termino do prontuário, clique aqui em baixo para registrar suas informações </p>
                        <input className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 ... rounded-md m-2 bg-pink-200 px-3 mb-12' type="submit" value="Termino Prontuário"/>
                    </div>
                </div>

                <div className="cardzao"> 
                    <div className="conteudo-pai">Histórico Médico:</div>
                    <div className="conteudo-filho mb-10">Adicione aqui todas suas informações médicas!</div>

                    <form> 
                        <div> 
                            <label className="prontuario"> Teve febre frequentemente? </label>
                                <input className="m-4" type="checkbox" required />
                                <span>NÃO</span>

                                <input className="m-4" type="checkbox" required />
                                <span>SIM</span>
                        </div>

                        <div> 
                        <label className="prontuario"> Ingestão de álcool? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                    </div>

                    <div> 
                        <label className="prontuario"> Possui alergias? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text" required /> 
                    </div>

                    <div> 
                        <label className="prontuario"> Faz uso de antibioticos? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text" required /> 
                    </div>

                    <div> 
                        <label className="prontuario"> Faz uso de medicamentos? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text" required /> 
                    </div>

                    <div> 
                        <label className="prontuario"> Possui alguma doenças presente? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text" required /> 
                    </div>
                    
                    <div> 
                        <label className="prontuario"> Possui alguma doenças no coração? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text" required /> 
                    </div>

                    <div> 
                        <label className="prontuario"> Fumante? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                    </div>

                    <div> 
                        <label className="prontuario"> Possui diabete? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, qual tipo? </label>
                            <input className="prontuario-resposta" type="text" required /> 
                    </div>

                    <div> 
                        <label className="prontuario"> Possui dificuldade de cicatrização </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                    </div>
                    
                    <div> 
                        <label className="prontuario"> Está grávida? </label>
                            <input className="m-4" type="checkbox" required />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" required />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quantos meses? </label>
                            <input className="prontuario-resposta" type="number" required /> 
                        </div>

                        <div> 
                            <p className="p-5"> Se houve termino no histórico médico, clique aqui em baixo para registrar suas informações </p>
                            <input className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 ... rounded-md m-2 bg-pink-200 px-3 mb-12' type="submit" value="Termino Prontuário"/>
                        </div>
                    </form>
                </div>
        </>
    )
}