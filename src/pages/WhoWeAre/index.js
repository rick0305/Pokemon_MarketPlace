import React from 'react';
import { Styled, Paragraph, Info } from './styles';
import Footer from '../../components/Footer';

function WhoWeAre() {
  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Title>A história do Pokémon</Styled.Title>
        <h3>Onde, quando e como "Pokémon" foi inventado?</h3>

        <Paragraph>O criador de "Pokémon", Satoshi Tajiri, gosta de contar a história de como ele colecionava insetos e girinos quando criança. A mente criativa por trás dos monstrinhos que conquistaram o mundo diz que foi nos subúrbios de Tóquio, na década de 1970, que nasceu o primeiro conceito por trás da franquia. Tajiri era apaixonado pela ideia de criaturas colecionáveis que podiam ser utilizadas em batalhas, principalmente por causa de "Ultra Seven". Na série, o herói titular guardava monstros gigantes em pequenas esferas, e os libertava quando um outro monstro ameaçava a civilização.</Paragraph>

        <Paragraph>Pouco tempo após fundar seu estúdio de desenvolvimento de jogos, a Game Freak, Tajiri viu dois Game Boys conectados por um cabo Game Link, e imaginou insetos utilizando o acessório como ponte de um sistema para outro. E foi assim que, em 1990, Tajiri e a Game Freak iniciaram o desenvolvimento do projeto "Capsule Monsters".</Paragraph>

        <Paragraph>A ideia era simples: jogadores iriam colecionar monstros, e carregá-los consigo aonde fossem dentro do Game Boy. Através do cabo Game Link, seria possível trocar criaturinhas e batalhar com outras pessoas.</Paragraph>

        
        <Styled.Image src="https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2021/2/jpLR2WuCIEGDMCSs8clB.jpg"></Styled.Image>

        <Info>Imagem retirada de: <a href="https://interativos.globoesporte.globo.com/esports/materia/pokemon-25-anos-como-surgiu-uma-das-maiores-franquias-de-jogos-da-historia"> https://interativos.globoesporte.globo.com/esports/materia/pokemon-25-anos-como-surgiu-uma-das-maiores-franquias-de-jogos-da-historia</a></Info>

        <Paragraph>Em retrospecto, o conceito inicial do game parece genial - um resumo perfeito de todos os fatores que transformaram "Pokémon" em um sucesso global. Mas os planos de Tajiri foram rejeitados pela Nintendo mais de uma vez. Apenas com a intervenção de um amigo pessoal, o designer Shigeru Miyamoto, Tajiri conseguiu a verba para oficializar o desenvolvimento.</Paragraph>

        <Paragraph>O processo criativo foi árduo e demorado. Foram seis anos de desenvolvimento entre a aprovação do projeto e o lançamento japonês de "Pokémon Red & Green", em 27 de fevereiro de 1996. Neste período, cinco funcionários da Game Freak precisaram ser demitidos por causa de dificuldades finaceiras, e o próprio Tajiri admite ter trabalhado por muitas horas extras não remuneradas.</Paragraph>

        <Paragraph>Mas o esforço foi recompensado: até março de 2017, a franquia "Pokémon" já tinha gerado um total de mais de US$ 55 bilhões em vendas. Só em termos de jogos de videogame, já foram mais de 290 milhões de cópias vendidas.</Paragraph>

        <Info>Fonte: <a href="https://www.uol.com.br/start/ultimas-noticias/2017/11/26/onde-quando-e-como-pokemon-foi-inventado.html"> https://www.uol.com.br/start/ultimas-noticias/2017/11/26/onde-quando-e-como-pokemon-foi-inventado.html</a></Info>

      </Styled.Container>
      <Footer />
    </div>
  )
}

export default WhoWeAre;