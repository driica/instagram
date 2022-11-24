import { useState } from "react";

function Post(props) {
  const [foiSalvo, setFoiSalvo] = useState(props.foiSalvo);
  const [foiCurtido, setFoiCurtido] = useState(props.foiCurtido);
  const [contador, setContador] = useState(props.curtidasNumero);
  const [animacao, setAnimacao] = useState(false);

  function mudaSalvo() {
    setFoiSalvo(!foiSalvo);
  }

  function mudaCurtido() {
    if (!foiCurtido) {
      setAnimacao(true);
      setContador(contador + 1);
      setFoiCurtido(!foiCurtido);
    } else {
      setContador(contador - 1);
      setFoiCurtido(!foiCurtido);
    }
  }

  function mudaLikeImagem(event) {
    if (event.detail === 2) {
      setAnimacao(true);
      if (!foiCurtido) {
        setContador(contador + 1);
        setFoiCurtido(true);
      }
     setTimeout(() => {
      setAnimacao(false);
     }, 500);
    }
  }

  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          onDoubleClick={mudaLikeImagem}
          src={props.imagemPost}
          data-test="post-image"
        />
        <ion-icon
          name="heart"
          class={`heart ${animacao ? "scale-up-center" : "invisible"}`}
        ></ion-icon>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {foiCurtido ? (
              <ion-icon
                class="liked"
                onClick={mudaCurtido}
                name="heart"
                data-test="like-post"
              ></ion-icon>
            ) : (
              <ion-icon
                onClick={mudaCurtido}
                name="heart-outline"
                data-test="like-post"
              ></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div onClick={mudaSalvo} data-test="save-post">
            {foiSalvo ? (
              <ion-icon name="bookmark"></ion-icon>
            ) : (
              <ion-icon name="bookmark-outline"></ion-icon>
            )}
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>{props.curtidasNome}</strong> e{" "}
            <strong data-test="likes-number">
              e outras {contador} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      nome: "meowed",
      imagem: "assets/img/meowed.svg",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidasNome: "respondeai",
      curtidasNumero: 101523,
      foiSalvo: false,
      foiCurtido: false,
    },
    {
      nome: "noclaftech",
      imagem: "assets/img/noclaftech.jpg",
      imagemPost: "assets/img/noclaf.png",
      curtidasNome: "adorable_animals",
      curtidasNumero: 99159,
      foiSalvo: false,
      foiCurtido: false,
    },
  ];
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          nome={post.nome}
          imagem={post.imagem}
          imagemPost={post.imagemPost}
          curtidasNome={post.curtidasNome}
          curtidasNumero={post.curtidasNumero}
          foiSalvo={post.foiSalvo}
          foiCurtido={post.foiCurtido}
        />
      ))}
    </div>
  );
}
